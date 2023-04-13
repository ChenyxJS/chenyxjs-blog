<!--
 * @Author: chenyx
 * @Date: 2023-04-11 19:59:43
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-04-12 13:29:36
 * @FilePath: /chenyxjs-blog/src/components/ProfileCard.vue
-->
<template>
  <div :class="['warpper', { 'card-rotate': state.isBack }]">
    <person-card class="card-front" @icon-click="changeCard"></person-card>
    <music-card class="card-back" @icon-click="changeCard"></music-card>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";

const state = reactive({
  isBack: false,
});

function changeCard() {
  state.isBack = !state.isBack;
}
</script>

<style lang="scss" scoped>
.warpper {
  position: relative;
  width: 230px;
  height: 280px;
  margin-bottom: 32px;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  display: flex;
  align-items: center;
  justify-content: center;
}
.card-rotate {
  transform: rotateY(180deg);
}
.card-front,
.card-back {
  position: absolute;
  // TODO 卡片翻转兼容问题处理
  backface-visibility: hidden;
  -webkit-transform-style: preserve-3d; /*设置内嵌的元素在 3D 空间如何呈现：保留 3D*/
  -webkit-backface-visibility: hidden; /*(设置进行转换的元素的背面在面对用户时是否可见：隐藏)*/
}
.card-back {
  transform: rotateY(180deg);
}
</style>
