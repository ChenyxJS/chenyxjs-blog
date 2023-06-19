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
    <div class="article-card" @click="toArticle">
        <img
            class="card-bg"
            src="@/assets/images/article-bg-default.jpg"
            alt=""
        />
        <span class="card-info">
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
                    <span class="item">
                        <i class="iconfont icon-biaoqian"></i>
                        <span
                            v-for="tag in getArticleTags(article)"
                            :key="tag"
                            class="tag"
                        >
                            {{
                                categoryStore.category.find((item) => {
                                    return item.id == tag;
                                })?.name
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
                        <i class="iconfont icon-a-zujiantianchong_huaban1fuben11"></i>
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
    justify-content: flex-end;
    aspect-ratio: 240/135;
    border-radius: 20px;
    box-shadow: var(--box-border-shadow);
    cursor: pointer;
    .card-bg {
        position: absolute;
        inset: 0;
        width: 100%;
        max-width: 100%;
        height: 100%;
        border-radius: 20px;
        object-fit: cover;
    }

    .card-info {
        position: relative;
        padding: 1rem;
        z-index: 3;
        .title {
            width: 70%;
            color: #fff;
        }
        .desc {
            display: flex;
            justify-content: space-between;
            color: rgb(161 161 170);
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
.article-card::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 2;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 20px;
    transition: all 0.3s ease-in-out;
}
.article-card:hover::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 2;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0);
    border-radius: 20px;
}
</style>
