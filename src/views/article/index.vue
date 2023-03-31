<!--
 * @Descripttion: 
 * @version: 
 * @Author: Chenyx
 * @Date: 2022-10-23 22:07:00
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-03-31 17:58:44
-->
<template>
  <div class="article">
    <div v-if="state.loading" class="loading flex flex-cc">
      <ThreeBallLoading></ThreeBallLoading>
    </div>
    <template v-else>
      <div class="article-content">
        <v-md-preview
          style="overflow: hidden scroll"
          v-if="state.article"
          :text="state.article"
          ref="preview"
        />
      </div>
      <div id="article-anchor" class="article-anchor">
        <span>
          <el-icon style="vertical-align: top" :size="18">
            <Notebook />
          </el-icon>
          <span style="font-size: 16px; line-height: 16px">目录</span>
        </span>
        <div
          class="article-anchor_tag"
          v-for="anchor in state.anchorList"
          :key="anchor.lineIndex"
          :anchor="anchor.lineIndex"
          :style="{ marginLeft: anchor.indent * 28 + 'px' }"
          @click="handleAnchorClick(anchor)"
        >
          {{ anchor.title }}
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts" name="Article">
import {
  reactive,
  getCurrentInstance,
  nextTick,
  onMounted,
  ComponentInternalInstance,
} from "vue";
import { ElMessage, ElIcon } from "element-plus";
import { useRoute } from "vue-router";
import ThreeBallLoading from "@/components/Loading/ThreeBallLoading.vue";
import { getArticleById } from "@/api/article";
// data
interface Anchor {
  title: string;
  lineIndex: number;
  indent: number;
  offsetTop: number;
}

const state = reactive({
  anchorList: [] as Anchor[],
  loading: false,
  article: "",
});
const route = useRoute();

const { proxy } = getCurrentInstance() as ComponentInternalInstance;
let previewDom: any;
// hook
onMounted(() => {
  getArticle();
});

// function
function getArticle() {
  state.loading = true;
  getArticleById(Number(route.query.id))
    .then(({ data }) => {
      if (data.success) {
        state.article = data.object;
        state.loading = false;
        renderAnchors();
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
async function renderAnchors() {
  // markdown更新完成后渲染目录
  await nextTick();

  previewDom = proxy?.$refs.preview;
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
    offsetTop: el.offsetTop,
  }));
  // 添加滚动监听
  scrollListener();
}

// 目录点击跳转
function handleAnchorClick(anchor: Anchor) {
  const { lineIndex } = anchor;
  const heading = previewDom.$el.querySelector(
    `[data-v-md-line="${lineIndex}"]`
  );
  if (heading) {
    previewDom.scrollToTarget({
      target: heading,
      scrollContainer: previewDom.$el,
      top: 40,
    });
  }
}

/**
 * @description: 监听文章滚动
 * @return {*}
 */
async function scrollListener() {
  await nextTick();
  const anchors = previewDom.$el.querySelectorAll("h1,h2,h3,h4,h5,h6");
  previewDom?.$el.addEventListener("scroll", (e: any) => {
    const target = e.target;
    // 获取滚动到的当前元素
    let anchorTarget = {} as Anchor;
    for (let i = 0; i < anchors.length; i++) {
      if (anchors[i].offsetTop - 120 < target?.scrollTop) {
        anchorTarget = {
          lineIndex: anchors[i].getAttribute("data-v-md-line"),
        } as Anchor;
      }
    }
    handleAnchorScroll(anchorTarget);
  });
}

/**
 * @description: 目录跟随滚动
 * @return {*}
 */
function handleAnchorScroll(anchorTarget: Anchor) {
  const anchorList: HTMLCollectionOf<Element> =
    document.getElementsByClassName("article-anchor_tag");
  for (let i = 0; i < anchorList.length; i++) {
    if (
      Number(anchorList[i].getAttribute("anchor")) != anchorTarget.lineIndex
    ) {
      anchorList[i].classList.remove("active");
    } else {
      anchorList[i].scrollIntoView({
        block: "center",
      });
      anchorList[i].classList.add("active");
    }
  }
}
</script>

<style lang="scss" scoped>
.loading {
  width: 100%;
}
.article {
  width: 100%;
  height: 100%;
  overflow: hidden scroll;
  background-color: var(--bg-primary);
  display: flex;
  .article-content {
    flex: 1;
    overflow: hidden scroll;
    display: flex;
    justify-content: center;
  }
  &-anchor {
    min-width: 330px;
    max-width: 330px;
    max-height: 100%;
    padding: 10px;
    padding-right: 0;
    overflow: hidden scroll;
    &_tag {
      color: rgba(235, 235, 235, 0.6);
      cursor: pointer;
      margin: 7px 0;
      padding: 6px 6px;
    }
    &_tag:hover,
    .active {
      color: var(--text-link-hover);
      background-color: rgba(59, 142, 237, 0.2);
      border-radius: 6px 0 0 6px;
    }
  }
}
@media screen and (max-width: 1100px) {
  .article-anchor {
    display: none;
  }
}
</style>
