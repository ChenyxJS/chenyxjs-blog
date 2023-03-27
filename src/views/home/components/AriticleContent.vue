<template>
  <div id="article-content" class="article-content">
    <!-- 文章card -->
    <div
      class="article-card"
      v-for="item in data.articleList"
      :key="item.articleId"
    >
      <!-- 文章发布时间、类型 -->
      <div class="article-card-sec">
        <p>{{ $FormatDate(item.articleCreateTime) }}</p>
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
import lottie from "lottie-web";
import lottieDataJson from "@/assets/lottie/NoData/data.json";
import { storeToRefs } from "pinia";
import { getArticleList } from "@/api/article";
import { reactive, ref, onMounted, onUpdated, watch } from "vue";
import { useRouter } from "vue-router";
import { scrollBehavior } from "@/utils/scrollAnimations/scrollShow";
import { useCategoryStore } from "@/store/modules/category";
import { useKeyWordsStore } from "@/store/modules/keywords";
import { ArticleQuery, Article } from "@/api/article/types";

const categoryStore = useCategoryStore();
const keywordsStore = useKeyWordsStore();
const { keywords } = storeToRefs(keywordsStore);
const articleQuery: ArticleQuery = {
  keywords: keywordsStore.keywords,
  articleType: "",
  pageNum: 1,
  pageSize: 0,
};
interface Data {
  articleList: Article[];
}
let data: Data = reactive({
  articleList: [],
});
let showLoading = ref(false);

watch(
  categoryStore.getNowCategory(),
  (newVar, oldVar) => {
    // articleQuery.articleType = newVar;
    getList();
  },
  { deep: true }
);
watch(
  keywords,
  (newVar, oldVar) => {
    articleQuery.keywords = newVar;
    getList();
  },
  { deep: true }
);
watch(
  data,
  (newVar, oldVar) => {
    showLoading.value = newVar.articleList.length == 0 ? true : false;
  },
  { deep: true }
);

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
  getArticleList(articleQuery).then((res: any) => {
    if (res.success) {
      data.articleList = res.root || [];
    } else {
      data.articleList = [];
    }
  });
}

// 实例化路由对象
const router = useRouter();
// 初始化跳转方法
function toArticle(article: Article) {
  router.push({
    path: "/article",
    query:{
      id: article.articleId,
    }
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
  height: calc(100vh - 40px);
  overflow: scroll;
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
