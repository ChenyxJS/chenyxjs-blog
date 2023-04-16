<!--
 * @Author: chenyx
 * @Date: 2023-04-13 19:32:11
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-04-17 00:36:21
 * @FilePath: /chenyxjs-blog/src/views/home/ArticlePanel.vue
-->
<script setup lang="ts">
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
    articleTagId: 0,
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

<template>
  <div class="container flex flex-column">
    <div class="article-panel flex flex-sa">
      <page-card
        class="artile-card"
        @click="toArticle(item)"
        v-for="(item, index) in state.newArticleList"
        :key="index"
        :title="item.articleTitle"
      ></page-card>
    </div>
   
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 100%;
}
.article-panel {
  width: 100%;
  border-radius: 15px;
}
@media (max-width: 768px) {
  .article-panel {
    flex-direction: column;
    align-items: center;
    .artile-card {
      margin: 15px 0;
    }
  }
}
</style>
