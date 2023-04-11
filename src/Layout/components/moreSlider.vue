<!--
 * @Author: chenyx
 * @Date: 2023-03-09 17:55:18
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-04-11 11:10:11
 * @FilePath: /chenyxjs-blog/src/Layout/components/moreSlider.vue
-->
<template>
  <!-- 更多文章 -->
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
  <div class="copyright">
    <h4>Copyright</h4>
    <section>
      <p>作者：Chenyx</p>
      <p>
        <a href="https://beian.miit.gov.cn/" target="_blank">{{ ICP }} </a>
      </p>
      <p>
        <img src="../../assets/images/beian.png" style="float:left; margin-right: 5px;"/>
        <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=45020302000255" target="_blank">{{ NS }} </a>
      </p>
      <p>© 2023 chenyx.site 版权所有</p>
    </section>
  </div>
</template>

<script setup lang="ts">
import { webBaseInfo } from "@/config";
import { reactive } from "vue"
import { useCategoryStore } from "@/store/modules/category";

const { ICP, NS } = webBaseInfo;
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
