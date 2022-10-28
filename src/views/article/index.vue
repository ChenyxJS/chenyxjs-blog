<!--
 * @Descripttion: 
 * @version: 
 * @Author: Chenyx
 * @Date: 2022-10-23 22:07:00
 * @LastEditors: Chenyx
 * @LastEditTime: 2022-10-28 21:06:48
-->
<template>
  <div class="article">
    <v-md-preview class="article-content" :text="article" ref="preview" />
    <div class="article-anchor">
      <div
        class="article-anchor_tag"
        v-for="anchor in state.titles"
        :key="anchor.lineIndex"
        :style="{ textIndent: anchor.indent * 28 +'px'}"
        @click="handleAnchorClick(anchor)"
      >
        {{ anchor.title }}
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRoute } from "vue-router";
import { reactive, onMounted, ref, getCurrentInstance, nextTick } from "vue";
import textMD from "@/assets/md/test.md?raw";

const route = useRoute();
interface State {
  blog: any;
  id: any;
  titles: any;
}
const state: State = reactive({
  blog: [],
  id: route.query.id,
  titles: [],
});
// 引入markdown文件内容
let article: string = textMD;

const { proxy } = getCurrentInstance();
const preview = ref();
function handleAnchorClick(anchor: any) {
  console.log(`output->anchor`, anchor);
  const { lineIndex } = anchor;
  const heading = preview.value.$el.querySelector(
    `[data-v-md-line="${lineIndex}"]`
  );
  if (heading) {
    preview.value.scrollToTarget({
      target: heading,
      scrollContainer: proxy.$refs.preview.$el,
      top: 60,
    });
  }
}

onMounted(() => {
  const anchors = proxy.$refs.preview.$el.querySelectorAll("h1,h2,h3,h4,h5,h6");
  const titles = Array.from(anchors).filter(
    (title: any) => !!title.innerText.trim()
  );
  if (!titles.length) {
    state.titles = [];
    return;
  }
  const hTags = Array.from(
    new Set(titles.map((title: any) => title.tagName))
  ).sort();
  state.titles = titles.map((el: any) => ({
    title: el.innerText,
    lineIndex: el.getAttribute("data-v-md-line"),
    indent: hTags.indexOf(el.tagName),
  }));
});
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
    height: 100vh;
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
</style>
