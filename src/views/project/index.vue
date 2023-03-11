<!--
 * @Descripttion: 
 * @version: 
 * @Author: Chenyx
 * @Date: 2022-10-15 20:40:46
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-03-10 17:17:59
-->
<template>
    <div class="days-list">
        <day1 />
        <day1 />
        <day1 />
    </div>
</template>

<script setup lang="ts">
import day1 from "./components/day1.vue";
import day2 from "./components/day2.vue";
</script>

<style scoped>
.days-list{
    display: block;
    overflow: scroll;
}
.days-panel {
    display: block;
}
.days-challenge-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
