<!--
 * @Descripttion:
 * @version:
 * @Author: Chenyx
 * @Date: 2022-10-12 22:48:04
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-04-11 10:45:28
-->
<script setup lang="ts">
import { useAppStroe } from "@/store/modules/app";
import { onMounted } from "vue";
import { useCategoryStore } from "@/store/modules/category";

const store = useCategoryStore();
store.getCategory();
const appStore = useAppStroe();
onMounted(() => {
    window.onresize = () => {
        let screenWidth = document.body.clientWidth;
        let screenHeight = document.body.clientHeight;
        appStore.deviceResize(screenWidth, screenHeight);
    };
});
</script>

<template>
    <router-view v-wechat-title="$route.meta.title"></router-view>
</template>
