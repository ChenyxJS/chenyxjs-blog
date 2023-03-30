<!--
 * @Author: chenyx
 * @Date: 2023-03-23 18:18:52
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-03-29 00:43:16
 * @FilePath: /chenyxjs-blog/src/components/MenuPanel.vue
-->
<template>
  <el-collapse-transition>
    <div v-show="isOpen" class="menu">
      <div class="menu-item">门户</div>
      <div class="menu-item" @click="toHome()">总览</div>
      <div
        v-for="item in store.category"
        :key="item.id"
        @click="store.changeCategory(item.id), closeMenu()"
        class="menu-item_children"
      >
        {{ item.name }}
      </div>
      <div class="menu-item">
        <a href="https://github.com/ChenyxJS">GitHub</a>
      </div>
    </div>
  </el-collapse-transition>
</template>

<script setup lang="ts">
import router from "@/router";
import { useCategoryStore } from "@/store/modules/category";

const store = useCategoryStore();
const emit = defineEmits(["closeMenu"]);
const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
});

function toHome() {
  router.push("/home");
  closeMenu();
}
function toProject() {
  router.push("/project");
}
function closeMenu() {
  emit("closeMenu");
}
</script>

<style scoped>
.menu {
  display: flex;
  flex-direction: column;
  justify-content: center;
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
