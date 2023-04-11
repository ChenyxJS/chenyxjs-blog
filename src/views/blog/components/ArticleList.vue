<template>
  <div id="article-content" class="article-content">
    <!-- 文章card -->
    <div
      class="article-card"
      v-for="item in state.articleList"
      :key="item.articleId"
    >
      <!-- 文章发布时间、类型 -->
      <div class="article-card-sec">
        <p>{{ formatDate(item.articleCreateTime) }}</p>
        <i class="iconfont icon-a-lianjielink">{{
          typeFilters(item.articleType)
        }}</i>
      </div>
      <!-- 文章内容 -->
      <div class="article-card-content" @click="toArticle(item)">
        <h1 class="article-card-content_title">{{ item.articleTitle }}</h1>
        <section class="article-card-content_content">
          {{ item.articleDesc }}
        </section>
        <div class="article-card-content_options">
          <i class="iconfont icon-a-fenxiangshare" style="color: #e6a23c"></i>
          <i class="iconfont icon-a-chakaneye" style="color: #56a6ff"></i>
          <i class="iconfont icon-a-lianjielink" style="color: #56a6ff"></i>
        </div>
      </div>
    </div>
    <!-- loding -->
    <div v-show="showLoading" class="loding">
      <div id="loding"></div>
    </div>
  </div>
  <el-backtop :right="100" :bottom="100" />
</template>

<script setup lang="ts">
import { formatDate } from "@/utils";
import lottie from "lottie-web";
import lottieDataJson from "@/assets/lottie/NoData/data.json";
import { getArticleList } from "@/api/article";
import { reactive, onMounted, onUpdated, watch, computed, onUnmounted } from "vue";
import { useRouter } from "vue-router";
import { scrollBehavior } from "@/utils/scrollShow"
import { useCategoryStore } from "@/store/modules/category";
import { useHeaderSearchStroe } from "@/store/modules/headerSearch";
import { ArticleQuery, Article } from "@/api/article/types";
import { OrderType } from "@/utils/globalEnum";

const categoryStore = useCategoryStore();
const headerSearchStore = useHeaderSearchStroe();
const articleQuery = {
  keywords: headerSearchStore.keywords,
  articleTagId: 0,
  page: 1,
  limit: 0,
  orderItem: "article_create_time",
  orderType: OrderType.desc,
} as ArticleQuery;

const state = reactive({
  articleList: [] as Array<Article>,
});

watch(
  () => categoryStore.nowCategory,
  (newVar, oldVar) => {
    articleQuery.articleTagId = newVar;
    getList();
  },
  { deep: true }
);
watch(
  () => headerSearchStore.keywords,
  (newVar, oldVar) => {
    articleQuery.keywords = newVar;
    getList();
  }
);

let showLoading = computed(() => {
  return state.articleList.length == 0 ? true : false;
});

onMounted(() => {
  initLoding();
  getList();
  onUpdated(() => {
    const elList: HTMLCollectionOf<Element> =
      document.getElementsByClassName("article-card");
    scrollBehavior(elList);
  });
});

function getList() {
  getArticleList(articleQuery).then(({ data }) => {
    if (data.success) {
      state.articleList = data.root || [];
    } else {
      state.articleList = [];
    }
  });
}

// 实例化路由对象
const router = useRouter();
// 初始化跳转方法
function toArticle(article: Article) {
  router.push({
    path: "/article",
    query: {
      id: article.articleId,
    },
  }).then(()=>{
  window.document.title = article.articleTitle;
  });
}

function typeFilters(code: string) {
  return code == "origin" ? "原创" : "转载";
}

function initLoding() {
  const icon = document.getElementById("loding") || new HTMLElement();
  lottie.loadAnimation({
    container: icon, // 包含动画的dom元素
    renderer: "svg", // 渲染出来的是什么格式
    loop: true, // 循环播放
    autoplay: true, // 自动播放
    animationData: lottieDataJson, // 动画json的路径
  });
}
</script>

<style lang="scss" scoped>
.article-content {
  flex: 1;
  height: calc(100vh - 62px);
  overflow: hidden scroll;
  .loding {
    width: 100%;
    height: 100%;
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .article-card {
    padding: 10px;
    min-width: 200px;
    opacity: 0;
    transform: translateY(100px);
    transition: opacity 0.6s cubic-bezier(0.5, 0, 0, 1) 0.2s,
      transform 0.6s cubic-bezier(0.5, 0, 0, 1) 0.2s;

    .article-card-sec {
      color: var(--text-second);
      p {
        font-size: 12px;
        display: inline-block;
        margin-right: 6px;
      }
      i {
        font-size: 12px;
      }
    }
    .article-card-content {
      border: var(--border);
      border-radius: 6px;
      padding: 10px;
      cursor: pointer;
      &_title {
        color: #fff;
        font-size: 16px;
        margin-bottom: 16px;
      }
      &_content {
        font-size: 14px;
        color: var(--text-second);
        word-break: break-all;
        text-overflow: ellipsis;
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3; /* 这里是超出几行省略 */
      }
      &_options {
        margin-top: 24px;
        i {
          border: var(--border);
          margin-right: 12px;
          padding: 6px;
          border-radius: 6px;
        }
        i:hover {
          transition: border-color 0.3s;
          border-color: var(--text-link);
        }
      }
    }
  }
}
.scrollShow {
  opacity: 1 !important;
  transform: translateY(0) !important;
}
</style>
