<!--
 * @Author: chenyx
 * @Date: 2023-04-13 19:32:11
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-04-13 20:40:02
 * @FilePath: /chenyxjs-blog/src/views/home/ArticlePanel.vue
-->
<template>
  <div class="article-panel">
    <page-card
      class="artile-card"
      @click="toArticle(item)"
      v-for="(item, index) in state.newArticleList"
      :key="index"
      :title="item.articleTitle"
    ></page-card>
  </div>
  
</template>

<script setup lang="ts">
import { getArticleList } from "@/api/article";
import { Article, ArticleQuery } from "@/api/article/types";
import { OrderType } from "@/utils/globalEnum";
import { reactive } from "vue";
import { useRouter } from "vue-router";

// 实例化路由对象
const router = useRouter();
const state = reactive({
  newArticleList: [] as Article[]
});

// 数据请求
getNewArticles();

function getNewArticles() {
  getArticleList({
    keywords: "",
    articleTagId: 0,
    page: 1,
    limit: 3,
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

function toArticle(article: Article) {
  router
    .push({
      path: "/article",
      query: {
        id: article.articleId,
      },
    })
    .then(() => {
      window.document.title = article.articleTitle;
    });
}
</script>

<style lang="scss" scoped>
.article-panel {
  padding: 40px;
  background-color: #242424;
  border-radius: 16px;
  display: flex;
  .artile-card {
    margin-right: 50px;
  }
  .artile-card:last-child {
    margin-right: 0;
  }
}
</style>
