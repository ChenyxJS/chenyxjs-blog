<!--
 * @Descripttion: 
 * @version: 
 * @Author: Chenyx
 * @Date: 2022-10-23 22:07:00
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-03-30 16:42:54
-->
<template>
  <div class="article">
    <div v-if="state.loading" class="loading flex flex-cc">
      <ThreeBallLoading></ThreeBallLoading>
    </div>
    <template v-else>
      <div class="article-content">
        <v-md-preview
          style="overflow: scroll"
          v-if="article"
          :text="article"
          ref="preview"
        />
      </div>
      <div class="article-anchor">
        <div
          class="article-anchor_tag"
          v-for="anchor in state.anchorList"
          :key="anchor.lineIndex"
          :style="{ textIndent: anchor.indent * 28 + 'px' }"
          @click="handleAnchorClick(anchor)"
        >
          {{ anchor.title }}
        </div>
      </div>
    </template>
  </div>
</template>
<script lang="ts">
export default {
  name: "article",
};
</script>
<script setup lang="ts">
import {
  reactive,
  ref,
  getCurrentInstance,
  onUpdated,
  onMounted,
  ComponentInternalInstance,
} from "vue";
import { ElMessage } from "element-plus";
import { useRoute } from "vue-router";
import ThreeBallLoading from "@/components/Loading/ThreeBallLoading.vue";
import { getArticleById } from "@/api/article";

// data
interface Anchor {
  title: string;
  lineIndex: number;
  indent: number;
}

const state = reactive({
  anchorList: [] as Anchor[],
  loading: false,
});
const route = useRoute();

const { proxy } = getCurrentInstance() as ComponentInternalInstance;
let article = ref("");

// hook
onMounted(() => {
  getArticle();
});
onUpdated(() => {
  if (!state.loading) renderAnchors();
});

// function
function getArticle() {
  state.loading = true;
  getArticleById(Number(route.query.id))
    .then(({ data }) => {
      if (data.success) {
        article.value = data.object;
        state.loading = false;
      } else {
        ElMessage.error("文章写的太好，被偷了");
      }
    })
    .catch((err) => {
      ElMessage.error("文章写的太好，被偷了");
    })
    .finally(() => {
      state.loading = false;
    });
}

// 渲染目录
function renderAnchors() {
  const previewDom: any = proxy?.$refs.preview;
  const anchors = previewDom.$el.querySelectorAll("h1,h2,h3,h4,h5,h6");
  const titles = Array.from(anchors).filter(
    (title: any) => !!title.innerText.trim()
  );
  if (!titles.length) {
    state.anchorList = [];
    return;
  }
  const hTags = Array.from(
    new Set(titles.map((title: any) => title.tagName))
  ).sort();
  state.anchorList = titles.map((el: any) => ({
    title: el.innerText,
    lineIndex: el.getAttribute("data-v-md-line"),
    indent: hTags.indexOf(el.tagName),
  }));
}

// 目录点击跳转
function handleAnchorClick(anchor: Anchor) {
  const { lineIndex } = anchor;
  const previewDom: any = proxy?.$refs.preview;
  const heading = previewDom.$el.querySelector(
    `[data-v-md-line="${lineIndex}"]`
  );
  console.log(heading);
  if (heading) {
    previewDom.scrollToTarget({
      target: heading,
      scrollContainer: previewDom.$el,
      top: 60,
    });
  }
}
</script>

<style lang="scss" scoped>
.loading {
  width: 100%;
}
.article {
  width: 100%;
  height: 100vh;
  overflow: scroll;
  padding-bottom: 30px;
  background-color: var(--bg-primary);
  display: flex;
  .article-content {
    flex: 1;
    overflow: scroll;
    display: flex;
    justify-content: center;
  }
  &-anchor {
    min-width: 330px;
    padding: 10px;
    &_tag {
      color: var(--text-link);
      cursor: pointer;
      margin: 7px 0;
    }
    &_tag:hover {
      color: var(--text-link-hover);
    }
  }
}
@media screen and (max-width: 1100px) {
  .article-anchor {
    display: none;
  }
}
</style>
