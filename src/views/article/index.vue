<!--
 * @Descripttion: 
 * @version: 
 * @Author: Chenyx
 * @Date: 2022-10-23 22:07:00
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-03-23 23:22:34
-->
<template>
  <div class="article">
    <div class="article-content" ref="container">
      <v-md-preview v-if="article"  :text="article" ref="preview" />
    </div>
    <div class="article-anchor">
      <div
        class="article-anchor_tag"
        v-for="anchor in data.anchorList"
        :key="anchor.lineIndex"
        :style="{ textIndent: anchor.indent * 28 + 'px' }"
        @click="handleAnchorClick(anchor)"
      >
        {{ anchor.title }}
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: "article",
};
</script>
<script setup lang="ts">
import { reactive, ref, getCurrentInstance, onUpdated, onMounted } from "vue";
import { getArticleById } from "@/api/article"; 

// 将marked 引入
import md from "@/assets/md/2.md?raw";

// data
interface Anchor {
  title: string;
  lineIndex: number;
  indent: number;
}
interface Data {
  anchorList: Anchor[];
}
let data: Data = reactive({
  anchorList: [],
});

const { proxy } = getCurrentInstance();
let article = ref(md);
// hook
onMounted(() => {});
onUpdated(() => {
  renderAnchors();
});

// function
// 渲染目录
function renderAnchors() {
  const previewDom: any = proxy.$refs.preview;
  const anchors = previewDom.$el.querySelectorAll("h1,h2,h3,h4,h5,h6");
  const titles = Array.from(anchors).filter(
    (title: any) => !!title.innerText.trim()
  );
  if (!titles.length) {
    data.anchorList = [];
    return;
  }
  const hTags = Array.from(
    new Set(titles.map((title: any) => title.tagName))
  ).sort();
  data.anchorList = titles.map((el: any) => ({
    title: el.innerText,
    lineIndex: el.getAttribute("data-v-md-line"),
    indent: hTags.indexOf(el.tagName),
  }));
}

// 目录点击跳转
function handleAnchorClick(anchor: Anchor) {
  const { lineIndex } = anchor;
  const previewDom: any = proxy.$refs.preview;
  // const Dom: any = proxy.$refs.container;
  const heading = previewDom.$el.querySelector(
    `[data-v-md-line="${lineIndex}"]`
  );
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
.article {
  width: 100%;
  height: 100vh;
  overflow: hidden;
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
