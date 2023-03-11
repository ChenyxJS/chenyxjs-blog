<!--
 * @Descripttion: 
 * @version: 
 * @Author: Chenyx
 * @Date: 2022-10-12 23:06:25
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-03-11 16:59:14
-->
<template>
  <div class="Layout">
    <!-- 导航栏 -->
    <top-nav />
    <div class="container">
      <!-- 侧边栏 -->
      <div class="slider-layout">
        <slider />
      </div>
      <!-- main -->
      <div class="content-layout">
        <content />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import topNav from "./components/topNav.vue";
import content from "./components/content.vue";
import slider from "./components/slider.vue";
</script>

<style lang="scss" scoped>
@media screen and (max-width:576px){
  .slider-layout {
    display: none;
  }
} 
</style>
