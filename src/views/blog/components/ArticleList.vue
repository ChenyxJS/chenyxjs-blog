<script setup lang="ts">
import { getArticleList } from "@/api/article";
import { reactive, onMounted, watch, computed } from "vue";
import { useCategoryStore } from "@/store/modules/category";
import { useHeaderSearchStroe } from "@/store/modules/headerSearch";
import { ArticleQuery, Article } from "@/api/article/types";
import { OrderType } from "@/utils/globalEnum";
import ArticleCard from "@/components/ArticleCard.vue";

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
    getList();
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
            if (state.articleList.length === 0) {
            }
            state.showLoading = false;
        });
}
</script>

<template>
    <div class="article-content">
        <div class="article-list">
            <article-card
                v-silde-in="{ translateY: 100, duration: 1000 }"
                v-for="item in state.articleList"
                :article="item"
                :key="item.articleId"
            ></article-card>
        </div>
        <!-- no-data start -->
        <div v-show="!state.showLoading && showNoData" class="lottie">
            <div id="no-data"></div>
        </div>
        <!-- no-data end -->
    </div>
</template>

<style lang="scss" scoped>
.article-content {
    flex: 1;
    padding: 20px;
    .lottie {
        width: 100%;
        height: 100%;
        z-index: 998;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .article-list {
        margin-top: 20px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 20px;
    }
}

@media (max-width: 1440px) {
    .article-content .article-list {
        margin-top: 20px;
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 20px;
    }
}
</style>
