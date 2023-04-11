<!--
 * @Author: chenyx
 * @Date: 2023-03-09 17:55:18
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-04-11 18:58:41
 * @FilePath: /chenyxjs-blog/src/Layout/components/BlogSlider.vue
-->
<template>
  <!-- 标签分类 -->
  <ul class="article-tags">
    <li
      @click="change(item.id)"
      v-for="item in state.store.category"
      class="article-tags-item"
    >
      <i
        class="iconfont icon-a-biaoqianlabel"
        :class="[item.active ? 'is-active' : '']"
      ></i>
      <a>{{ item.name }}</a>
    </li>
  </ul>

  <!-- Copyright -->
  <copyright></copyright>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { useCategoryStore } from "@/store/modules/category";

const state = reactive({
  store: useCategoryStore(),
});
state.store.getCategory();

function change(id: number) {
  state.store.changeCategory(id);
}
</script>

<style lang="scss" scoped>
.article-tags {
  padding-bottom: 32px;
  border-bottom: var(--border);
  .article-tags-item {
    padding: 5px;
  }
  ul {
    color: var(--text-second);
  }
  a {
    color: var(--text-link);
    transition: 0.3s ease;
    font-weight: 600;
    margin-left: 6px;
    display: block;
  }
}
.recent-activity {
  padding-bottom: 32px;
  border-bottom: var(--border);
}
.copyright section,
.recent-activity section {
  color: var(--text-second);
  font-size: 14px;
}
</style>
