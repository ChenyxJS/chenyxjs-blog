<!--
 * @Descripttion:
 * @version:
 * @Author: Chenyx
 * @Date: 2022-10-23 22:07:00
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-08-18 15:01:00
-->

<script setup lang="ts">
import {
    reactive,
    getCurrentInstance,
    nextTick,
    onMounted,
    ComponentInternalInstance,
    ref,
    watchEffect,
    onUnmounted,
} from "vue";
import { useRoute } from "vue-router";
import ThreeBallLoading from "@/components/Loading/ThreeBallLoading.vue";
import { getArticleById, updateArticle } from "@/api/article";
import { Article } from "@/api/article/types";
import router from "@/router";
import { Notification, NotificationProps } from "@/components/Notification";
import { debounce, throttle } from "@/utils";

defineOptions({
    name: "Article",
});
// data
interface Anchor {
    title: string;
    lineIndex: number;
    indent: number;
    offsetTop: number;
}

const state = reactive({
    anchorList: [] as Anchor[],
    loading: false,
    articleContent: "",
    article: {} as Article,
    fnc: debounce(update, 3000),
});
const route = useRoute();

const { proxy } = getCurrentInstance() as ComponentInternalInstance;
let previewDom: any = ref();
let scrollDom: any = ref();

onMounted(() => {
    loading();
    scrollDom = document.getElementById("scrollDom");
});
onUnmounted(() => {
    // 清除依赖收集
    stop();
});

// 文章内容改变时渲染目录
const stop = watchEffect(() => {
    if (state.articleContent)
        setTimeout(() => {
            renderAnchors();
        }, 200);
});

// function

function loading() {
    const rejectPromise = (rejectTime: number): Promise<unknown> => {
        // 指定时间后返回状态失败的promise
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                reject(new Error(`在${rejectTime}ms后返回失败Promise`));
            }, rejectTime);
        });
    };

    const reolvePromise = (reolveTime: number): Promise<unknown> => {
        // 指定时间后返回状态成功的promise
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(`在${reolveTime}ms后返回成功Promise`);
            }, reolveTime);
        });
    };

    const axiosRequest = getArticleById(Number(route.query.id)); // 记录请求的状态
    Promise.race([axiosRequest, rejectPromise(300)])
        .then((res: any) => {
            // 成功意味着请求在固定时间内返回
            handleData(res.data);
        })
        .catch((err) => {
            // 超时，整体变成onrejected，展示loading
            state.loading = true;
            Promise.all([axiosRequest, reolvePromise(1500)])
                .then((res) => {
                    handleData(res[0].data);
                })
                .catch((err) => {
                    console.log(err);
                })
                .finally(() => {
                    state.loading = false;
                });
        });
}

function handleData(data: BaseApiResult) {
    if (data.success) {
        state.articleContent = data.object.content;
        state.article = data.object.article;
    } else {
    }
}

// 渲染目录
async function renderAnchors() {
    // markdown更新完成后渲染目录
    nextTick(() => {
        previewDom = proxy?.$refs.preview;
        if (!previewDom && !scrollDom) return;
        const anchors = previewDom.$el.querySelectorAll("h2,h3,h4,h5,h6");
        const titles = Array.from(anchors).filter(
            (title: any) => !!title.innerText.trim()
        );
        if (!titles.length) {
            state.anchorList = [];
            return;
        }
        const hTags = Array.from(
            new Set(titles.map((title: any) => title.tagName))
        ).sort();
        state.anchorList = titles.map((el: any) => ({
            title: el.innerText,
            lineIndex: el.getAttribute("data-v-md-line"),
            indent: hTags.indexOf(el.tagName),
            offsetTop: el.offsetTop,
        }));
        // 添加滚动监听
        scrollListener();
    });
}

// 目录点击跳转
function handleAnchorClick(anchor: Anchor) {
    const { lineIndex } = anchor;
    const heading = previewDom.$el.querySelector(
        `[data-v-md-line="${lineIndex}"]`
    );
    if (heading) {
        previewDom.scrollToTarget({
            target: heading,
            scrollContainer: scrollDom.$el,
            top: 40,
        });
    }
}

/**
 * @description: 监听文章滚动
 * @return {*}
 */
async function scrollListener() {
    await nextTick();
    const anchors = previewDom.$el.querySelectorAll("h1,h2,h3,h4,h5,h6");
    scrollDom.addEventListener("scroll", (e: any) => {
        const target = e.target;
        // 获取滚动到的当前元素
        let anchorTarget = {} as Anchor;
        for (let i = 0; i < anchors.length; i++) {
            if (anchors[i].offsetTop - 120 < target?.scrollTop) {
                anchorTarget = {
                    lineIndex: anchors[i].getAttribute("data-v-md-line"),
                } as Anchor;
            }
        }
        handleAnchorScroll(anchorTarget);
    });
}

/**
 * @description: 目录跟随滚动
 * @return {*}
 */
function handleAnchorScroll(anchorTarget: Anchor) {
    const anchorList: HTMLCollectionOf<Element> =
        document.getElementsByClassName("anchor_tag");
    for (let i = 0; i < anchorList.length; i++) {
        if (
            Number(anchorList[i].getAttribute("anchor")) !=
            anchorTarget.lineIndex
        ) {
            anchorList[i].classList.remove("active");
        } else {
            anchorList[i].scrollIntoView({
                block: "center",
            });
            anchorList[i].classList.add("active");
        }
    }
}

function goBack() {
    router.back();
}

function update() {
    const data = {
        articleId: state.article.articleId,
        articleLikes: state.article.articleLikes,
        articleClaps: state.article.articleClaps,
        articleHearts: state.article.articleHearts,
        articleHots: state.article.articleHots,
    } as Article;
    updateArticle(data)
        .then(({ data }) => {
            if (data.success) {
                state.article = data.object;
            }
        })
        .catch((res) => {
            Notification({
                message: "慢点戳，服务器的腿都跑断了",
                duration: 3000,
                autoClose: true,
            } as NotificationProps);
        });
}

function likeClick(type: number) {
    switch (type) {
        case 0:
            state.article.articleClaps = ++state.article.articleClaps;
            break;
        case 1:
            state.article.articleHearts = ++state.article.articleHearts;
            break;
        case 2:
            state.article.articleLikes = ++state.article.articleLikes;
            break;
        default:
            state.article.articleHots = ++state.article.articleHots;
            break;
    }
    state.fnc();
}
</script>
<template>
    <div v-if="state.loading" class="loading flex flex-cc">
        <ThreeBallLoading></ThreeBallLoading>
    </div>
    <div
        v-else
        class="article"
        v-wechat-title="($route.meta.title = state.article.articleTitle)"
    >
        <aside class="left">
            <a class="return-btn" @click="goBack()">
                <base-icon iconName="icon-fanhui" size="20px"></base-icon>
            </a>
            <div id="anchor" class="anchor">
                <div
                    class="tag"
                    v-for="(anchor, index) in state.anchorList"
                    :key="anchor.lineIndex"
                    :anchor="anchor.lineIndex"
                    :style="{
                        marginLeft: anchor.indent * 10 + 'px',
                        '--index': index,
                    }"
                    @click="handleAnchorClick(anchor)"
                >
                    {{ anchor.title }}
                </div>
            </div>
        </aside>
        <div id="scrollDom" class="article-content">
            <img class="head-img" :src="state.article.articleImgUrl" alt="" />
            <v-md-preview
                style="width: 100%"
                v-if="state.articleContent"
                :text="state.articleContent"
                ref="preview"
            />
        </div>
        <aside class="right">
            <div class="warrper">
                <div id="RightPanel" class="panel">
                    <button
                        @click="likeClick(0)"
                        panel-item-index="1"
                        class="item"
                    >
                        <img class="img" src="@/assets/images/claps.png" />
                        <span class="text">{{
                            state.article.articleClaps
                        }}</span>
                    </button>
                    <button
                        @click="likeClick(1)"
                        panel-item-index="2"
                        class="item"
                    >
                        <img class="img" src="@/assets/images/heart.png" />
                        <span class="text">{{
                            state.article.articleHearts
                        }}</span>
                    </button>
                    <button
                        @click="likeClick(2)"
                        panel-item-index="3"
                        class="item"
                    >
                        <img class="img" src="@/assets/images/thumbs-up.png" />
                        <span class="text">{{
                            state.article.articleLikes
                        }}</span>
                    </button>
                    <button
                        @click="likeClick(3)"
                        panel-item-index="4"
                        class="item"
                    >
                        <img class="img" src="@/assets/images/fire.png" />
                        <span class="text">{{
                            state.article.articleHots
                        }}</span>
                    </button>
                </div>
            </div>
        </aside>
    </div>
</template>
<style lang="scss" scoped>
.loading {
    width: 100%;
    min-height: 100vh;
}
.article {
    display: flex;
    justify-content: space-between;
    position: relative;
    min-height: 100vh;
    max-width: 100%;
    margin-top: 20px;
    .left {
        position: relative;
        min-width: 200px;
        max-width: 200px;
        padding: 10px;
        padding-right: 0;
        .return-btn {
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: rgb(39 39 42);
            box-shadow: var(--box-border-shadow);
            border-radius: 50%;
        }
        .return-btn:hover {
            box-shadow: 0 0 0 0px #fff, 0 0 0 1px hsla(0, 14%, 97%, 0.3),
                0 10px 15px -3px rgba(48, 48, 49, 0.05),
                0 4px 6px -4px rgba(46, 46, 47, 0.05), 0 0 #0000;
        }
        .anchor {
            position: sticky;
            top: 0;
            height: fit-content;
            font-size: 12px;
            padding-top: 5rem;
            .tag {
                color: rgba(235, 235, 235, 0.6);
                cursor: pointer;
                margin: 7px 0;
                padding: 6px 6px;
                opacity: 0;
                animation: show 1s forwards;
                animation-delay: calc(var(--index) * 0.1s);
            }
            .tag:hover,
            .active {
                color: var(--text-link-hover);
            }
        }
    }

    .right {
        position: relative;
        width: 80px;
        display: block;
        .warrper {
            display: flex;
            justify-content: flex-end;
            position: sticky;
            top: 0.5rem;
            padding-top: 5rem;

            .panel {
                padding: 0.2rem;
                padding-top: 1rem;
                padding-bottom: 2rem;
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 2rem;
                width: 3rem;
                height: fit-content;
                border-radius: 9999px;
                background-image: linear-gradient(
                    to bottom,
                    rgba(39, 39, 42, 0.8),
                    rgba(9, 9, 11, 0.8)
                );
                box-shadow: var(--box-border-shadow);
                transition: all 0.3s ease-in-out;

                .item {
                    height: 24px;
                    aspect-ratio: 1/1;
                    position: relative;
                    background-color: transparent;
                    background-image: none;
                    transition: all 0.3s ease-in-out;

                    .img {
                        position: absolute;
                        max-width: 100%;
                        height: 100%;
                        inset: 0px;
                        color: transparent;
                    }
                    .text {
                        position: absolute;
                        left: 0;
                        bottom: -2rem;
                        width: 100%;
                        height: 100%;
                        font-size: 12px;
                        line-height: 12px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-weight: 500;
                        color: hsla(240, 6%, 90%, 0.25);
                    }
                    &:hover {
                        height: 3rem;
                    }

                    &:active {
                        transform: scale(1.4);
                        transition: all 0.3s ease;
                    }
                }
                .item:hover ~ .item:first-of-type {
                    height: 2rem;
                }
            }
        }
    }

    .article-content {
        overflow: hidden;
        position: relative;
        min-height: 100vh;
        max-width: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        .head-img {
            width: 90%;
            margin: 0 auto;
        }
    }
}
@keyframes show {
    from {
        opacity: 0;
        transform: translateX(-20px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}
@media screen and (max-width: 1100px) {
    .article {
        width: 100%;
        .article-content {
            max-width: 100%;
        }
        .left {
            display: none;
        }
        .right {
            display: none;
        }
        .anchor {
            display: none;
        }
    }
}
</style>
