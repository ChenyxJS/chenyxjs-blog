<!--
 * @Author: chenyx
 * @Date: 2023-04-13 19:32:11
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-06-30 14:12:03
 * @FilePath: /chenyxjs-blog/src/views/home/RightPanel.vue
-->
<script setup lang="ts">
import BaseIcon from "@/components/BaseIcon.vue";
import ArticleCard from "@/components/ArticleCard.vue";
import { getArticleList } from "@/api/article";
import { Article, ArticleQuery } from "@/api/article/types";
import { OrderType } from "@/utils/globalEnum";
import { reactive } from "vue";
import { useRouter } from "vue-router";

// 实例化路由对象
const router = useRouter();
const state = reactive({
    newArticleList: [] as Article[],
});

// 数据请求
getNewArticles();

function getNewArticles() {
    getArticleList({
        keywords: "",
        articleTagIds: "0",
        page: 1,
        limit: 4,
        orderItem: "article_create_time",
        orderType: OrderType.desc,
    } as ArticleQuery).then(({ data }) => {
        if (data.success) {
            state.newArticleList = data.root || [];
        } else {
            state.newArticleList = [];
        }
    });
}

</script>

<template>
    <div class="container">
        <div class="left-panel">
            <div class="title">
                <base-icon iconName="icon-shenqing" size="14"></base-icon>
                <span style="margin: 5px">近期文章</span>
            </div>
            <article-card
                style="margin-bottom: 20px"
                v-for="item in state.newArticleList"
                :key="item.articleId"
                :article="item"
            ></article-card>
        </div>
        <div class="right-panel">
            <div class="card email-card">
                <div class="title">
                    <base-icon iconName="icon-fasong" size="14"></base-icon>
                    <span style="margin: 5px">动态更新</span>
                </div>
                <p style="color: rgb(161 161 170)">
                    获取我最新发布的内容通知，随时可以取消订阅。
                </p>
                <div class="subscribe">
                    <input type="email" name="email" required placeholder="你的邮箱" />
                    <button class="subscribe-btn">订阅</button>
                </div>
            </div>
            <!-- <div class="card work-card">
                <div class="title">
                    <base-icon iconName="icon-gongwenbao" size="14"></base-icon>
                    <span style="margin: 5px">工作经历</span>
                </div>
                <ol class="work-list">
                    <li class="work-item">
                        <div class="logo">
                            <img src="http://lgdxtech.com/images/favicon.png" />
                        </div>
                        <div class="work-info">
                            <div class="name">柳钢东信科技</div>
                            <div class="desc">
                                <span>前端开发工程师</span>
                                <span>2023 - 至今</span>
                            </div>
                        </div>
                    </li>
                    <li class="work-item">
                        <div class="logo">
                            <img src="https://www.bgy.com.cn/favicon.ico" />
                        </div>
                        <div class="work-info">
                            <div class="name">凤悦酒店数智部（碧桂园集团）</div>
                            <div class="desc">
                                <span>前端开发工程师</span>
                                <span>2022 - 2023</span>
                            </div>
                        </div>
                    </li>
                    <li class="work-item">
                        <div class="logo">
                            <img src="http://jtexplore.com/favicon.ico" />
                        </div>
                        <div class="work-info">
                            <div class="name">山东疆拓科技</div>
                            <div class="desc">
                                <span>软件开发工程师</span>
                                <span>2021 - 2022</span>
                            </div>
                        </div>
                    </li>
                </ol>
            </div> -->
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    padding: 0 30px;
    display: flex;
    position: relative;
    justify-content: space-between;
}
.left-panel {
    width: 50%;
}
.right-panel {
    position: sticky;
    top: 2rem;
    width: 45%;
    height: fit-content;
}

.title {
    margin-bottom: 20px;
    font-weight: 500;
}

.card {
    box-shadow: var(--box-border-shadow);
    border-radius: 20px;
    padding: 20px 15px;
}

.email-card {
    .subscribe {
        display: flex;
        justify-content: space-between;
        margin-top: 1.5rem;
        input {
            flex: 1;
            border-radius: 10px;
            border: 0;
            padding: 0.75rem;
            background-color: rgba($color: #1f1f23, $alpha: 0.2);
            box-shadow: var(--box-border-shadow);
        }
        .subscribe-btn {
            width: 55px;
            height: 40px;
            border-radius: 10px;
            background-color: #fff;
            font-weight: 800;
            border: 0;
            color: #1f1f23;
            box-shadow: none;
            margin-left: 10px;
            cursor: pointer;
            position: relative;
        }
        .subscribe-btn:hover::after {
            content: "";
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.1);
        }
    }
}
.work-card {
    margin-top: 20px;
}
.work-list {
}
.work-item {
    display: flex;
    align-items: center;
    margin-top: 20px;
    .logo {
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 50%;
        background-color: rgb(39 39 42);
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 20px;
        box-shadow: 0 0 0 2px #303034;
        img {
            width: 2.3rem;
            height: 2.3rem;
            border-radius: 50%;
            background-color: #fff;
        }
    }
    .work-info {
        flex: 1;
        display: flex;
        flex-direction: column;
        font-size: 0.875rem;
        line-height: 1.5rem;
        .name {
            font-weight: 500;
        }
        .desc {
            display: flex;
            justify-content: space-between;
            color: rgb(161 161 170);
        }
    }
}
.work-item:first-of-type {
    margin-top: 0;
}

@media (max-width: 768px) {
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0;
    }
    .left-panel,
    .right-panel {
        width: 90%;
    }
}
</style>
