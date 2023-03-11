<!--
 * @Descripttion: 
 * @version: 
 * @Author: Chenyx
 * @Date: 2022-10-23 22:07:00
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-03-11 17:02:59
-->
<template>
  <div class="article">
    <v-md-preview class="article-content" :text="article" ref="preview" />
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
 export default{
  name: "article"
 }
</script>
<script setup lang="ts">

import { useRoute } from "vue-router";
import { reactive, ref, getCurrentInstance, onUpdated, onMounted } from "vue";
import { getArticleByUrl } from "@/api/article/index";
import axios from "axios";

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
let article = ref();
const { proxy } = getCurrentInstance();
const route = useRoute();
// 获取文章内容
const url: string = String(route.query.articleUrl);
// request()

// hook
onMounted(() => {
  getData(url);
});
onUpdated(() => {
  renderAnchors();
});

// function
function request() {
  axios
    .get(
      "http://rqqc5vc9c.hd-bkt.clouddn.com/Vue3%E6%9E%84%E5%BB%BACesium%E5%85%A5%E9%97%A8%EF%BC%88%E4%B8%80%EF%BC%89.md"
    )
    .then((response) => {
      article.value = response;
    });
}

// 获取markdown
function getData(url: string) {
  console.log(url);
  getArticleByUrl(url).then((res) => {
    article.value = res;
  });
}

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
  &-content {
    flex: 1;
    padding-bottom: 60px;
    overflow: auto;
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
@media screen and (max-width:576px){
  .article-anchor {
    display: none;
  }
} 
</style>
