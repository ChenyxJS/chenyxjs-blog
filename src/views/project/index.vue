<!--
 * @Descripttion: 
 * @version: 
 * @Author: Chenyx
 * @Date: 2022-10-15 20:40:46
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-03-13 20:22:51
-->
<template>
  <div class="project">
    <div class="project-list">
      <div class="title">project</div>
      <ProjectCard></ProjectCard>
    </div>
    <div class="project-list">
      <div class="title">100days</div>
      <ProjectCard></ProjectCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import ProjectCard from "./components/ProjectCard.vue";
import day1 from "./components/day1.vue";
import day2 from "./components/day2.vue";
const state = reactive({
  items: [
    {
      name: "day1",
      desc: "day1",
      img: "https://100dayscss.com/codepen/13-2.jpg",
    },
    // {
    //   name: "day2",
    //   desc: "",
    //   img: "https://100dayscss.com/codepen/13-2.jpg",
    // },
  ],
});
</script>

<style lang="scss" scoped>
.project {
  width: 100%;
  height: 100%;
  display: block;
}
.project-list {
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50%;
  padding-top: 15px;
}

.title {
  position: absolute;
  font-size: 20px;
  top: 10px;
  left: 20px;
  line-height: 24px;
}
.title::before {
  content: "";
  position: absolute;
  left: -10px;
  height: 30px;
  border: 2px solid #fff;
  border-radius: 4px;
}
</style>
