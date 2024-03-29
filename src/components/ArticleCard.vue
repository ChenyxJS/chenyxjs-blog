<script setup lang="ts">
import { Article } from "@/api/article/types";
import { useCategoryStore } from "@/store/modules/category";
import { formatDate } from "@/utils";
import { useRouter } from "vue-router";

// data
const props = defineProps<{
    article: Article;
}>();
// 实例化路由对象
const router = useRouter();

const categoryStore = useCategoryStore();

// hook

// method
function getArticleTags(article: Article) {
    return article.articleTagIds
        .split("/")
        .map((tagId: string) => {
            return Number(tagId);
        })
        .filter((num: number) => {
            return num;
        });
}
// 初始化跳转方法
function toArticle() {
    router
        .push({
            path: "/article",
            query: {
                id: props.article.articleId,
            },
        })
        .then(() => {
            window.document.title = props.article.articleTitle;
        });
}
</script>
<template>
    <div class="article-card"  @click="toArticle">
        <div class="card-bg">
            <img
                class="img"
                :src="article.articleImgUrl"
                alt=""
                loading="lazy"
                decoding="async"
            />
        </div>
        <span
            class="card-info"
            :style="{
                '--post-image':
                    `url(${article.articleImgUrl})`,
                '--post-bgcolor': '#123746',
            }"
        >
            <h2 class="title">{{ article.articleTitle }}</h2>
            <span class="desc">
                <span class="left">
                    <span class="item">
                        <i class="iconfont icon-rili"></i>
                        <span>
                            {{
                                formatDate(
                                    article.articleCreateTime,
                                    "YYYY-mm-dd"
                                )
                            }}
                        </span>
                    </span>
                </span>
                <span class="right">
                    <span class="item">
                        <i class="iconfont icon-icon-dian"></i>
                        <span>{{ article.articleLooks }}</span>
                    </span>
                    <span class="item">
                        <i
                            class="iconfont icon-a-zujiantianchong_huaban1fuben11"
                        ></i>
                        <span>6分钟阅读</span>
                    </span>
                </span>
            </span>
        </span>
    </div>
</template>
<style lang="scss" scoped>
.article-card {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    aspect-ratio: 240/135;
    border-radius: 20px;
    box-shadow: var(--box-border-shadow);
    cursor: pointer;
    transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
    color: rgba(255, 255, 255, 0.7);

    &:hover {
        color: #fff;
        transform: translateY(-5px);
        .card-info::before {
            opacity: 0.3;
        }
    }
    .card-bg {
        position: relative;
        width: 100%;
        max-width: 100%;
        height: 100%;
        border-radius: 20px 20px 0 0;
        .img {
            position: absolute;
            inset: 0;
            width: 100%;
            max-width: 100%;
            height: 100%;
            border-radius: 20px 20px 0 0;
            object-fit: cover;
        }
    }

    .card-info {
        position: relative;
        padding: 1rem;
        z-index: 3;
        background-image: var(--post-image);
        background-blend-mode: overlay;
        background-repeat: no-repeat;
        background-position: bottom;
        background-size: cover;
        overflow: hidden;
        border-radius: 0 0 19px 19px;

        &::before {
            content: "";
            position: absolute;
            inset: 0;
            z-index: 10;
            transition-property: opacity;
            transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
            transition-duration: 0.15s;
            background-color: var(--post-bgcolor);
            opacity: 0.7;
            backdrop-filter: blur(8px);
            -webkit-backdrop-filter: blur(8px);
            border-radius: 0 0 19px 19px;
        }
        &::after {
            content: "";
            position: absolute;
            inset: 0;
            z-index: 10;
            transition-property: all;
            transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
            transition-duration: 0.15s;
            background-image: linear-gradient(
                to bottom,
                transparent,
                var(--post-bgcolor)
            );
            backdrop-filter: blur(8px);
            -webkit-backdrop-filter: blur(8px);
            border-radius: 0 0 19px 19px;
            pointer-events: none;
        }

        .title {
            font-size: 1.1rem;
            position: relative;
            z-index: 20;
            width: 100%;
            letter-spacing: -.025em;
        }
        .desc {
            position: relative;
            z-index: 20;
            display: flex;
            justify-content: space-between;
            font-weight: 400;
            font-size: 12px;
            .left,
            .right {
                .item {
                    margin-right: 10px;
                    i {
                        margin-right: 5px;
                    }
                }
            }
        }
    }
}
</style>
