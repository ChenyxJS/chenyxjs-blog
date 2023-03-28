<!--
 * @Author: chenyx
 * @Date: 2023-03-09 17:55:18
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-03-28 14:16:25
 * @FilePath: /chenyxjs-blog/src/Layout/components/slider.vue
-->
<template>
  <!-- 标签分类 -->
  <ul class="article-tags">
    <li
      @click="change(item.id)"
      v-for="item in state.store.getCategory()"
      class="article-tags-item"
    >
      <i
        class="iconfont icon-a-biaoqianlabel"
        :class="[item.active ? 'is-active' : '']"
      ></i>
      <a>{{ item.name }}</a>
    </li>
  </ul>
  <!-- 最新动态 -->
  <div class="recent-activity">
    <h4>最近动态</h4>
    <section>Vue3 + Vite3.0 + Typescript 版本的 Blog 上线了!</section>
    <!-- <section>Jenkins持续集成、持续部署（CI/CD）</section> -->
  </div>
  <!-- Copyright -->
  <div class="copyright">
    <h4>Copyright</h4>
    <section>
      <p>作者：Chenyx</p>
      <p>
        <a href="https://beian.miit.gov.cn/" target="_blank">{{ ICP }} </a>
      </p>
      <p>© 2023 chenyx.site 版权所有</p>
    </section>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { webBaseInfo } from "@/config";
import { useCategoryStore } from "@/store/modules/category";

const { ICP, NS } = webBaseInfo;

const state = reactive({
  store: useCategoryStore(),
});

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
