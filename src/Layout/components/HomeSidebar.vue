<!--
 * @Author: chenyx
 * @Date: 2023-03-09 17:55:18
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-06-19 11:25:58
 * @FilePath: /chenyxjs-blog/src/Layout/components/HomeSidebar.vue
-->
<template>
    <!-- 简介 -->
    <div class="sidebar-item profile-card">
        <profile-card />
    </div>
    <!-- 最新动态 -->
    <div class="sidebar-item recent-activity">
        <h4>最近动态</h4>
        <section>Vue3 + Vite3.0 + Typescript 版本的 Blog 上线了!</section>
    </div>
    <!-- Copyright -->
    <copyright />
</template>

<script setup lang="ts">
import ProfileCard from "@/components/ProfileCard.vue";
import Copyright from "@/components/Copyright.vue";
</script>

<style lang="scss" scoped>
.sidebar-item {
    padding-bottom: 32px;
    border-bottom: var(--border);
}

.profile-card {
    margin-top: 20px;
}
.recent-activity {
    padding-bottom: 32px;
    border-bottom: var(--border);
}
</style>
