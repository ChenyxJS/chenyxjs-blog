<!--
 * @Author: chenyx
 * @Date: 2023-03-13 19:10:24
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-03-13 20:21:49
 * @FilePath: /chenyxjs-blog/src/views/project/components/ProjectCard.vue
-->
<template>
  <div class="project-item">
    <div class="project-image">
      <img class="img" :src="state.img" alt="" />
    </div>
    <div class="project-info">
      <h1 class="project-name">{{ state.name }}</h1>
      <div class="project-desc">{{ state.desc }}</div>
      <div class="options">
        <div class="option">
          <a href="https://github.com/ChenyxJS" class="btn">GitHub</a>
        </div>
        <div class="option">
          <a href="https://github.com/ChenyxJS" class="btn">更多</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";

const state = reactive({
  name: "day1",
  desc: "基于Vue3+Ts+pinia+Vite+Cesium实现的TODO事项",
  img: "https://100dayscss.com/codepen/13-2.jpg",
});
</script>

<style lang="scss" scoped>
.project-item {
  position: relative;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 8px;
  color: var(--bg-inset);
}
.project-image {
  width: 350px;
  height: 100%;
  object-fit: cover;
  img {
    height: 100%;
    border-radius: 8px 0 0 8px;
  }
}

.project-info {
  width: 400px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 8px;
  color: var(--bg-inset);
  margin: 20px;
  .project-name {
  }
  .project-desc {
    font-size: 16px;
    line-height: 24px;
    color: var(--bg-inset);
  }
}
.options {
  position: absolute;
  bottom: 20px;
  display: flex;
  justify-content: flex-end;
  .option {
    margin-left: 20px;
  }
}
.btn {
  color: #fff;
  background-color: #009dff;
  padding: 10px 20px;
  border-radius: 12px;
  box-shadow: 0 0 10px #009dff;
  text-decoration: none;
  display: inline-block;
  transition: 0.3s ease;
}
.btn:hover {
  transform: translateY(-10px);
  box-shadow: 0 0 30px #009dff;
}
</style>
