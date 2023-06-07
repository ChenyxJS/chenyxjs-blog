<!--
 * @Author: chenyx
 * @Date: 2023-03-09 17:52:44
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-06-08 01:32:56
 * @FilePath: /chenyxjs-blog/src/Layout/components/content.vue
-->
<template>
    <router-view v-slot="{ Component }">
        <keep-alive :exclude="['Article']">
            <component :is="Component"></component>
        </keep-alive>
    </router-view>
</template>

<script setup lang="ts"></script>

<style></style>
