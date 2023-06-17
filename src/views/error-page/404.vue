<!--
 * @Author: chenyx
 * @Date: 2023-04-26 11:28:25
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-06-17 19:33:18
 * @FilePath: /chenyxjs-blog/src/views/error-page/404.vue
-->
<template>
    <div class="container">
        <el-button @click="back" round>BACK HOME</el-button>
    </div>
</template>

<script setup lang="ts">
import router from "@/router";
import { onMounted } from "vue";

onMounted(() => {
});

function back() {
    router.replace("home");
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
