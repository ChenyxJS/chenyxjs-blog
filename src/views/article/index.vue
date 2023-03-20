<!--
 * @Descripttion: 
 * @version: 
 * @Author: Chenyx
 * @Date: 2022-10-23 22:07:00
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-03-21 01:08:26
-->
<template>
  <div class="article">
    <markdown-it class="am-article-content" :plugins='plugins' :source="article" ref="preview" />
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
import { useRoute } from "vue-router";
import { reactive, ref, getCurrentInstance, onUpdated, onMounted } from "vue";
import { getArticleByUrl } from "@/api/article/index";
import axios from "axios";

import MarkdownIt from 'vue3-markdown-it'
import 'highlight.js/styles/monokai.css'


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
      "http://file.chenyx.site/markdown/Typora%2BPicGo%E5%AE%9E%E7%8E%B0%E5%85%8D%E8%B4%B9%E5%9B%BE%E7%89%87%E4%B8%8A%E4%BC%A0%E5%8A%9F%E8%83%BD.md"
      ,{headers: {
          'X-Requested-With': 'XMLHttpRequest',
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        }}
    )
    .then((response) => {
      article.value = response.data;
    });
}

// 获取markdown
function getData(url: string) {
  // getArticleByUrl(url).then((res) => {
  //   article.value = res;
  // });
  request()
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
  console.log('点击了',anchor);
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
  .am-article-content {
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
@media screen and (max-width: 576px) {
  .article-anchor {
    display: none;
  }
}
</style>
