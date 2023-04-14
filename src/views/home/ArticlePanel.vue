<!--
 * @Author: chenyx
 * @Date: 2023-04-13 19:32:11
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-04-14 21:51:37
 * @FilePath: /chenyxjs-blog/src/views/home/ArticlePanel.vue
-->
<script setup lang="ts">
import { getArticleList } from "@/api/article";
import { Article, ArticleQuery } from "@/api/article/types";
import { OrderType } from "@/utils/globalEnum";
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { useMenu } from "@/hooks/menu-hooks";

// 实例化路由对象
const router = useRouter();
const { toBlog } = useMenu();
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
    limit: 5,
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
  <div class="container flex flex-column flex-cc">
    <div class="article-panel flex flex-sa">
      <page-card
        class="artile-card"
        @click="toArticle(item)"
        v-for="(item, index) in state.newArticleList"
        :key="index"
        :title="item.articleTitle"
      ></page-card>
    </div>
    <cta-button
      style="margin-top: 20px"
      @click="toBlog"
      text="More Blog"
    ></cta-button>
  </div>
</template>

<style lang="scss" scoped>
.article-panel {
  width: 100%;
  border-radius: 15px;
  margin-bottom: 20;
}
@media (max-width: 768px) {
  .article-panel {
    flex-direction: column;
    .artile-card {
      margin: 15px 0;
    }
  }
}
</style>
