<!--
 * @Descripttion: 
 * @version: 
 * @Author: Chenyx
 * @Date: 2022-10-23 22:07:00
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-03-02 23:18:35
-->
<template>
  <div class="article">
    <v-md-preview class="article-content" :text="article" ref="preview" />
    <div class="article-anchor">
      <div
        class="article-anchor_tag"
        v-for="anchor in articleInfo.titles"
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
import { useRoute } from "vue-router";
import {
  reactive,
  onMounted,
  ref,
  getCurrentInstance,
  defineComponent,
  watch,
} from "vue";
import textMD from "@/assets/md/test.md?raw";
import { getArticleByUrl } from "@/api/article/index";

interface ArticleInfo {
  blog: any;
  id: any;
  titles: any;
}

export default defineComponent({
  setup() {
    const { proxy } = getCurrentInstance();
    const article = ref(textMD);
    getArticleByUrl().then((res) => {
      // article.value = res;
    });
    onMounted(() => {
      renderAnchors()
    });
    watch(
      article,
      (val, oldVal) => {
        renderAnchors();
      },
      { deep: true }
    );
    function renderAnchors() {
      const previewDom: any = proxy.$refs.preview;
      const anchors = previewDom.$el.querySelectorAll("h1,h2,h3,h4,h5,h6");
      console.log(anchors);
      const titles = Array.from(anchors).filter(
        (title: any) => !!title.innerText.trim()
      );
      if (!titles.length) {
        articleInfo.titles = [];
        return;
      }
      const hTags = Array.from(
        new Set(titles.map((title: any) => title.tagName))
      ).sort();
      articleInfo.titles = titles.map((el: any) => ({
        title: el.innerText,
        lineIndex: el.getAttribute("data-v-md-line"),
        indent: hTags.indexOf(el.tagName),
      }));
    }

    const route = useRoute();
    const articleInfo: ArticleInfo = reactive({
      blog: [],
      id: route.query.id,
      titles: [],
    });

    const handleAnchorClick: any = ref();
    handleAnchorClick.value = (anchor: any) => {
      console.log(`output->anchor`, anchor);
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
    };

    return {
      handleAnchorClick,
      article,
      articleInfo,
    };
  },
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
