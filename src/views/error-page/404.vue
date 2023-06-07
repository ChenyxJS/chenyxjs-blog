<!--
 * @Author: chenyx
 * @Date: 2023-04-26 11:28:25
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-06-08 01:09:06
 * @FilePath: /chenyxjs-blog/src/views/error-page/404.vue
-->
<template>
    <div class="container">
        <div id="lottie" style="width: 50%"></div>
        <el-button @click="back" round>BACK HOME</el-button>
    </div>
</template>

<script setup lang="ts">
import router from "@/router";
import lottie from "lottie-web";
import lottieDataJson from "@/assets/lottie/404/404.json";
import { onMounted } from "vue";

onMounted(() => {
    init();
});

function back() {
    router.replace("home");
}

function init() {
    const icon = document.getElementById("lottie") || new HTMLElement();
    lottie.loadAnimation({
        container: icon, // 包含动画的dom元素
        renderer: "svg", // 渲染出来的是什么格式
        loop: true, // 循环播放
        autoplay: true, // 自动播放
        animationData: lottieDataJson, // 动画json的路径
    });
}
</script>

<style>
.container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
</style>
