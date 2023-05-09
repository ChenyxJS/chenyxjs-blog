<!--
 * @Descripttion: 
 * @version: 
 * @Author: Chenyx
 * @Date: 2022-10-12 23:06:25
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-05-09 18:12:28
-->
<template>
  <div class="Layout">
    <div class="top-layout">
      <top-nav />
    </div>
    <div class="container-layout">
      <!-- 侧边栏 -->
      <div v-show="!appStore.deviceStatus.isMobile" class="slider-layout">
        <blog-slider v-if="isShowBlogSlider" />
        <home-slider v-else />
      </div>
      <!-- main -->
      <div class="content-layout">
        <content />
      </div>
    </div>
    <div v-if="appStore.deviceStatus.isMobile" class="footer-layout">
      <footer-panel></footer-panel>
    </div>
  </div>
</template>
<script setup lang="ts">
import TopNav from "./components/TopNav.vue";
import content from "./components/content.vue";
import BlogSlider from "./components/BlogSlider.vue";
import footerPanel from "./components/footer.vue";
import HomeSlider from "./components/HomeSlider.vue";
import { useRoute } from "vue-router";
import { computed } from "vue";
import { useAppStroe } from "@/store/modules/app";

const route = useRoute();
const appStore = useAppStroe();

let isShowBlogSlider = computed(() => {
  return route.path === "/blog" ||
    route.path === "/article"
    ? true
    : false;
});
</script>

<style lang="scss" scoped></style>
