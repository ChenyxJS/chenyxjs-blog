<!--
 * @Author: chenyx
 * @Date: 2023-03-23 18:18:52
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-03-23 22:35:14
 * @FilePath: /chenyxjs-blog/src/components/MenuPanel.vue
-->
<template>
  <div v-show="isOpen" class="menu">
    <div class="menu-item">Portal 门户</div>
    <div class="menu-item" @click="toHome()">Overview 总览</div>
    <div class="menu-item_children">All 全部</div>
    <div class="menu-item_children">Front 前端</div>
    <div class="menu-item_children">Git</div>
    <!-- <div class="menu-item_children">Other</div> -->
    <!-- <div class="menu-item_children">Resources 资源</div> -->
    <!-- <div class="menu-item" @click="toProject()">Project</div> -->
    <div class="menu-item">Github</div>
  </div>
</template>

<script setup lang="ts">
import router from "@/router";

const emit = defineEmits(['closeMenu'])
const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
});

function toHome() {
  router.push("/home");
  closeMenu()
}
function toProject() {
  router.push("/project");
}
function closeMenu(){
    emit('closeMenu')
}
</script>

<style scoped>
.menu {
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  width: 120px;
  position: absolute;
  top: 65px;
  right: 10px;
  background: #161b22;
  border-radius: 4px;
  padding: 5px;
}
.menu-item {
  margin-left: 5px;
  font-size: 16px;
  height: 25px;
  margin-top: 5px;
}
.menu-item_children {
  margin-left: 24px;
  font-size: 14px;
  height: 25px;
  margin-top: 5px;
}
</style>
