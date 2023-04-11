<!--
 * @Author: chenyx
 * @Date: 2023-03-09 17:55:18
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-04-11 20:00:18
 * @FilePath: /chenyxjs-blog/src/Layout/components/HomeSlider.vue
-->
<template>
  <!-- 简介 -->
  <div class="slider-item profile-card">
    <profile-card></profile-card>
  </div>
  <!-- 最新动态 -->
  <div class="slider-item recent-activity">
    <h4>最近动态</h4>
    <section>Vue3 + Vite3.0 + Typescript 版本的 Blog 上线了!</section>
    <!-- <section>Jenkins持续集成、持续部署（CI/CD）</section> -->
  </div>
  <!-- Copyright -->
  <copyright></copyright>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.slider-item {
  padding-bottom: 32px;
  border-bottom: var(--border);
}

.profile-card {
  margin-top: 20px;
}

</style>
