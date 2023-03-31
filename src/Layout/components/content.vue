<!--
 * @Author: chenyx
 * @Date: 2023-03-09 17:52:44
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-03-31 12:15:49
 * @FilePath: /chenyxjs-blog/src/Layout/components/content.vue
-->
<template>
  <router-view v-slot="{ Component }">
    <transition name="fade-transform" mode="out-in">
      <keep-alive :exclude="['Article']">
        <component :is="Component" ></component>
      </keep-alive>
    </transition>
  </router-view>
</template>

<script setup lang="ts"></script>

<style></style>
