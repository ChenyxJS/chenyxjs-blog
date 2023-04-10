<!--
 * @Descripttion: 
 * @version: 
 * @Author: Chenyx
 * @Date: 2022-10-15 20:40:46
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-04-11 00:58:55
-->
<template>
  <div class="project flex flex-cc">
    <div class="wrapper">
      <div class="card-groups">
        <div
          class="card-group"
          v-for="(item, index) in state.items"
          :key="index"
        > 
          <a>
            <!-- <img class="img" src="@/assets/images/home-bg.png" /> -->
          </a>
          <div class="text">
            <div>{{ item.name }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
const state = reactive({
  items: [
    {
      name: "这是一个很不错的项目",
      desc: "day1",
      img: "https://100dayscss.com/codepen/13-2.jpg",
    },
    {
      name: "day1",
      desc: "day1",
      img: "https://100dayscss.com/codepen/13-2.jpg",
    },
    {
      name: "day1",
      desc: "day1",
      img: "https://100dayscss.com/codepen/13-2.jpg",
    },
    {
      name: "day1",
      desc: "day1",
      img: "https://100dayscss.com/codepen/13-2.jpg",
    },
  ],
});
</script>

<style lang="scss" scoped>
.project {
  width: 100%;
  height: calc(100vh - 62px);
  overflow: hidden;
}
.wrapper {
  margin: auto;
  width: 90%;
  height: calc(100% - 60px);
  background-color: #242424;
  border-radius: 16px;
}
.card-groups {
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.card-group {
  width: calc(30% - 13px);
  .img {
    width: 100%;
    border-radius: 14px;
  }
  .text {
    font-size: 14px;
    font-weight: 500;
    padding: 0 3px;
    cursor: pointer;
  }
}
</style>
