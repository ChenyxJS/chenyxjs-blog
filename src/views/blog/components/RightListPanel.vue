<!--
 * @Author: chenyx
 * @Date: 2023-03-23 17:02:55
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-06-21 13:01:33
 * @FilePath: /chenyxjs-blog/src/views/blog/components/RightListPanel.vue
-->

<script setup lang="ts">
import { getJueJinData } from "@/api/juejin";
import { onMounted, reactive } from "vue";

type JueJinData = {
    id: number;
    time: number;
    title: string;
    des: string;
    url: string;
    collect_count: number;
    comment_count: number;
    view_count: number;
};

const state = reactive({
    loading: true,
    list: [{}, {}, {}, {}, {}, {}, {}, {}] as JueJinData[],
});

onMounted(() => {
    getJueJinData().then(({ data }) => {
        if (data.success) {
            const list = data.object.object.data;
            let arr: JueJinData[] = [];
            list.forEach((item: any) => {
                arr.push({
                    id: item.article_id,
                    title: item.article_info.title,
                    des: item.article_info.brief_content,
                    time: item.article_info.mtime,
                    url: "https://juejin.cn/post/" + item.article_id,
                    collect_count: item.article_info.collect_count,
                    comment_count: item.article_info.comment_count,
                    view_count: item.article_info.view_count,
                });
            });
            state.list = arr;
            state.loading = false;
        }
    });
});

function go(url: string) {
    window.open(url, "_blank");
}
</script>

<template>
    <div class="asider-articles">
        <div class="asider-title">
            掘金前端热点
            <svg-icon icon-name="hot" icon-size="16"></svg-icon>
        </div>
        <el-skeleton
            style="width: 100%"
            :loading="state.loading"
            animated
            :throttle="0"
        >
            <template #template>
                <div
                    class="asider-article-card"
                    v-for="item in state.list"
                    :key="item.id"
                >
                    <el-skeleton-item
                        style="width: 50%; margin-top: 20px"
                        variant="h3"
                    ></el-skeleton-item>
                    <el-skeleton-item
                        style="height: 35px"
                        variant="text"
                    ></el-skeleton-item>
                    <div class="asider-article-card_options">
                        <el-skeleton-item
                            class="btn"
                            style="width: 40px; height: 20px"
                            variant="button"
                        ></el-skeleton-item>
                        <el-skeleton-item
                            class="btn"
                            style="width: 40px; height: 20px"
                            variant="button"
                        ></el-skeleton-item>
                        <el-skeleton-item
                            class="btn"
                            style="width: 40px; height: 20px"
                            variant="button"
                        ></el-skeleton-item>
                    </div>
                </div>
            </template>
            <template #default>
                <div
                    class="asider-article-card"
                    v-for="item in state.list"
                    :key="item.id"
                    @click="go(item.url)"
                >
                    <h4>
                        <a class="asider-link">{{ item.title }}</a>
                    </h4>
                    <section>{{ item.des }}</section>
                    <div class="asider-article-card_options">
                        <p
                            class="iconfont icon-icon-dian btn"
                            style="color: #56a6ff"
                        >
                            <span>{{ item.view_count }}</span>
                        </p>
                        <p
                            class="iconfont icon-dianzan btn"
                            style="color: #e6a23c"
                        >
                            <span>{{ item.collect_count }}</span>
                        </p>
                        <p
                            class="iconfont icon-xiaoxi btn"
                            style="color: #56a6ff"
                        >
                            <span>{{ item.comment_count }}</span>
                        </p>
                    </div>
                </div>
            </template>
        </el-skeleton>
    </div>
</template>

<style lang="scss" scoped>
::-webkit-scrollbar{
    display: none;
}
.asider-articles {
    width: 300px;
    margin-top: 20px;
    max-height: 100vh;
    overflow: scroll;
    position: relative;

    .asider-title{
        position: sticky;
        top: 0;
        text-align: center;
        padding: 5px 0;
        background-color: hsla(0, 0%, 100%, 0.1);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        border-radius: 9999px;
    }

    .asider-article-card {
        width: 100%;
        border-bottom: var(--border);
        margin-right: 30px;
        padding-bottom: 16px;
        cursor: pointer;

        .asider-link {
            color: #fff;
        }
        section {
            padding-bottom: 20px;
            color: var(--text-second);
            font-size: 14px;
        }
        .asider-article-card_options {
            .btn {
                display: inline-block;
                font-size: 14px;
                letter-spacing: 2px;
                border: var(--border);
                margin-right: 12px;
                padding: 4px 6px;
                border-radius: 6px;
                span {
                    color: var(--text-primary);
                    font-weight: 600;
                }
            }

            .btn:hover {
                transition: border-color 0.3s;
                border-color: var(--text-link);
            }
        }
    }
}
</style>
