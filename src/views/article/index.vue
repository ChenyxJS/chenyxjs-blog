<!--
 * @Descripttion:
 * @version:
 * @Author: Chenyx
 * @Date: 2022-10-23 22:07:00
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-06-21 17:02:57
-->

<script setup lang="ts" name="Article">
import {
    reactive,
    getCurrentInstance,
    nextTick,
    onMounted,
    ComponentInternalInstance,
    ref,
    watchEffect,
    onUnmounted,
    inject,
} from "vue";
import { useRoute } from "vue-router";
import ThreeBallLoading from "@/components/Loading/ThreeBallLoading.vue";
import { getArticleById } from "@/api/article";
import { Article } from "@/api/article/types";

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
});
const route = useRoute();
const noteHook: any = inject("Notice");

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
        noteHook.notification({
            text: "模块正在调试中，敬请期待...",
        });
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
    const anchors = previewDom.$el.querySelectorAll("h2,h3,h4,h5,h6");
    console.log(scrollDom);
    scrollDom.addEventListener("scroll", (e: any) => {
        const target = e.target;
        console.log(e);
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
        document.getElementsByClassName("article-anchor_tag");
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
</script>
<template>
    <div
        class="article"
        v-wechat-title="($route.meta.title = state.article.articleTitle)"
    >
        <div v-if="state.loading" class="loading flex flex-cc">
            <ThreeBallLoading></ThreeBallLoading>
        </div>
        <template v-else>
            <aside id="article-anchor" class="article-anchor">
                <span>
                    <i class="iconfont icon-kuaijie"></i>
                    <span style="font-size: 16px; line-height: 16px">目录</span>
                </span>
                <div
                    class="article-anchor_tag"
                    v-for="anchor in state.anchorList"
                    :key="anchor.lineIndex"
                    :anchor="anchor.lineIndex"
                    :style="{ marginLeft: anchor.indent * 28 + 'px' }"
                    @click="handleAnchorClick(anchor)"
                >
                    {{ anchor.title }}
                </div>
            </aside>
            <div id="scrollDom" class="article-content">
                <v-md-preview
                    style="width: 100%"
                    v-if="state.articleContent"
                    :text="state.articleContent"
                    ref="preview"
                />
            </div>
            <aside class="right">
                <div class="warrper">
                    <div class="panel">
                        <button class="item">
                            <img
                                class="img"
                                src="@/assets/images/claps.png"
                                alt=""
                            />
                            <span>11</span>
                        </button>
                        <button class="item">
                            <img
                                class="img"
                                src="@/assets/images/heart.png"
                                alt=""
                            />
                            <span>11</span>
                        </button>
                        <button class="item">
                            <img
                                class="img"
                                src="@/assets/images/thumbs-up.png"
                                alt=""
                            />
                            <span>11</span>
                        </button>
                        <button class="item">
                            <img
                                class="img"
                                src="@/assets/images/fire.png"
                                alt=""
                            />
                            <span>11</span>
                        </button>
                    </div>
                </div>
            </aside>
        </template>
    </div>
</template>
<style lang="scss" scoped>
.loading {
    width: 100%;
}
.article {
    display: flex;
    justify-content: space-around;
    position: relative;
    min-height: 100vh;

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
                padding: 10px;
                display: flex;
                flex-direction: column;
                gap: 2rem;
                height: fit-content;
                border-radius: 9999px;
                background-image: linear-gradient(
                    to bottom,
                    rgba(39, 39, 42, 0.8),
                    rgba(9, 9, 11, 0.8)
                );
                box-shadow: var(--box-border-shadow);
                .item {
                    height: 24px;
                    aspect-ratio: 1/1;
                    position: relative;
                    background-color: transparent;
                    background-image: none;
                    .img {
                        position: absolute;
                        height: 100%;
                        width: 100%;
                        inset: 0px;
                        color: transparent;
                    }
                }
            }
        }
    }

    .article-content {
        flex: 1 1 0%;
        max-width: 60rem;
        display: flex;
        justify-content: center;
    }
    &-anchor {
        min-width: 200px;
        max-width: 200px;
        padding: 10px;
        padding-right: 0;
        position: sticky;
        top: 0;
        height: fit-content;
        font-size: 12px;
        padding-top: 5rem;
        &_tag {
            color: rgba(235, 235, 235, 0.6);
            cursor: pointer;
            margin: 7px 0;
            padding: 6px 6px;
        }
        &_tag:hover,
        .active {
            color: var(--text-link-hover);
        }
    }
}
@media screen and (max-width: 1100px) {
    .article {
        width: 100%;
        .article-content {
            max-width: 100%;
        }
        .right {
            display: none;
        }
        .article-anchor {
            display: none;
        }
    }
}
</style>
