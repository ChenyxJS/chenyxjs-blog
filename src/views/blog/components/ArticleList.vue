<template>
  <div id="article-content" class="article-content">
    <!-- article_card_list start -->
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
        <div class="article-card-content_tags">
          <div v-for="tag in getArticleTags(item)" :key="tag" class="tag">
            {{
              categoryStore.category.find((item) => {
                return item.id == tag;
              })?.name
            }}
          </div>
        </div>
        <section class="article-card-content_content">
          {{ item.articleDesc }}
        </section>
        <div class="article-card-content_options">
          <p class="btn">
            <i class="iconfont icon-a-chakaneye" style="color: #56a6ff"> </i>
            <span style="margin-left: 5px; font-size: 12px">
              {{ item.articleLooks || 0 }}
            </span>
          </p>
          <p v-download="item.articleUrl" @click.stop class="btn">
            <i class="iconfont icon-a-lianjielink" style="color: #56a6ff"> </i>
            <span style="margin-left: 5px; font-size: 12px"> Download </span>
          </p>
        </div>
      </div>
    </div>
    <!-- article_card_list end -->
    <!-- loading start -->
    <div v-show="state.showLoading" class="lottie loading">
      <div id="loading"></div>
    </div>
    <!-- loading end -->
    <!-- no-data start -->
    <div v-show="!state.showLoading && showNoData" class="lottie">
      <div id="no-data"></div>
    </div>
    <!-- no-data end -->
  </div>
  <el-backtop :right="100" :bottom="100" />
</template>

<script setup lang="ts">
import { formatDate } from "@/utils";
import lottie, { AnimationItem } from "lottie-web";
import lottieNoDataJson from "@/assets/lottie/no-data/no-data.json";
import lottieLoadingJson from "@/assets/lottie/loading/loading.json";
import { getArticleList } from "@/api/article";
import { reactive, onMounted, onUpdated, watch, computed } from "vue";
import { useRouter } from "vue-router";
import { scrollBehavior } from "@/utils/scrollShow";
import { useCategoryStore } from "@/store/modules/category";
import { useHeaderSearchStroe } from "@/store/modules/headerSearch";
import { ArticleQuery, Article } from "@/api/article/types";
import { OrderType } from "@/utils/globalEnum";

const categoryStore = useCategoryStore();
const headerSearchStore = useHeaderSearchStroe();
const articleQuery = {
  keywords: headerSearchStore.keywords,
  articleTagIds: "0",
  page: 1,
  limit: 0,
  orderItem: "article_create_time",
  orderType: OrderType.desc,
} as ArticleQuery;

const state = reactive({
  articleList: [] as Array<Article>,
  showLoading: false,
  loadingLottie: {} as AnimationItem,
});

// 标签选择改变时，触发搜索
watch(
  () => categoryStore.nowCategory,
  (newVar) => {
    if (String(newVar) === "0") {
      articleQuery.articleTagIds = String(newVar);
    } else {
      articleQuery.articleTagIds = "/" + newVar + "/";
    }
    getList();
  },
  { deep: true }
);

// 搜索关键词改变时，触发搜索
watch(
  () => headerSearchStore.keywords,
  (newVar) => {
    articleQuery.keywords = newVar;
    getList();
  }
);

let showNoData = computed(() => {
  return state.articleList.length == 0 ? true : false;
});

onMounted(() => {
  initLoadingLottie();
  getList();
  onUpdated(() => {
    const elList: HTMLCollectionOf<Element> =
      document.getElementsByClassName("article-card");
    scrollBehavior(elList);
  });
});

function getList() {
  state.showLoading = true;
  getArticleList(articleQuery)
    .then(({ data }) => {
      if (data.success) {
        state.articleList = data.root || [];
      } else {
        state.articleList = [];
      }
    })
    .finally(() => {
      if (state.articleList) {
        initNoDataLottie();
      }
      state.showLoading = false;
    });
}

// 实例化路由对象
const router = useRouter();
// 初始化跳转方法
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

function typeFilters(code: string) {
  return code == "origin" ? "原创" : "转载";
}

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

function initLoadingLottie() {
  const loading = document.getElementById("loading") || new HTMLElement();
  state.loadingLottie = lottie.loadAnimation({
    container: loading, // 包含动画的dom元素
    renderer: "svg", // 渲染出来的是什么格式
    loop: true, // 循环播放
    autoplay: true, // 自动播放
    animationData: lottieLoadingJson, // 动画json的路径
  });
}

function initNoDataLottie() {
  const noData = document.getElementById("no-data") || new HTMLElement();
  lottie.loadAnimation({
    container: noData, // 包含动画的dom元素
    renderer: "svg", // 渲染出来的是什么格式
    loop: true, // 循环播放
    autoplay: true, // 自动播放
    animationData: lottieNoDataJson, // 动画json的路径
  });
}
</script>

<style lang="scss" scoped>
.article-content {
  flex: 1;
  height: calc(100vh - 62px);
  overflow: hidden scroll;
  .lottie {
    width: 100%;
    height: 100%;
    z-index: 998;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .loading {
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.6);
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
      }
      &_tags {
        margin-bottom: 16px;
        display: flex;
        flex-wrap: wrap;
        .tag {
          font-size: 10px;
          border: var(--border);
          margin-right: 12px;
          padding: 0 6px;
          border-radius: 6px;
        }
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
        display: flex;
        .btn {
          display: flex;
          align-items: center;
          justify-content: center;
          border: var(--border);
          margin-right: 12px;
          padding: 6px;
          border-radius: 6px;
        }
        .btn:hover {
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
