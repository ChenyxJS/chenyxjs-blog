<!--
 * @Descripttion: 
 * @version: 
 * @Author: Chenyx
 * @Date: 2022-10-12 23:06:25
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-03-29 10:26:02
-->
<template>
  <div class="Layout">
    <div class="top-layout">
      <top-nav />
    </div>
    <div class="container-layout">
      <!-- 侧边栏 -->
      <div v-show="!appStore.deviceStatus.isMobile" class="slider-layout">
        <slider v-if="isShowSlider" />
        <more-slider v-else></more-slider>
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
import topNav from "./components/topNav.vue";
import content from "./components/content.vue";
import slider from "./components/slider.vue";
import footerPanel from "./components/footer.vue";
import moreSlider from "./components/moreSlider.vue";
import { useRoute } from "vue-router";
import { computed } from "vue";
import { useAppStroe } from "@/store/modules/app";

const route = useRoute();
const appStore = useAppStroe();

let isShowSlider = computed(() => {
  return route.path == "/home" ? true : false;
});
</script>

<style lang="scss" scoped></style>
