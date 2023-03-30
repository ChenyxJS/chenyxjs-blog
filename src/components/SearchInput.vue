<!--
 * @Author: chenyx
 * @Date: 2023-03-11 10:07:15
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-03-30 20:08:49
 * @FilePath: /chenyxjs-blog/src/components/SearchInput.vue
-->
<template>
  <input
    class="search"
    :placeholder="props.placeholder"
    v-model="value"
    v-focus
    type="text"
  />
</template>

<script setup lang="ts">
import { inject, toRef } from "vue";
const emit = defineEmits(["open", "close"]);

const props = defineProps({
  placeholder: {
    type: String,
    default: "",
  },
});
const value = inject("searchValue", toRef);
const vFocus = {
  mounted: (el: HTMLElement) => {
    // 监听dom获取焦点事件
    el.addEventListener("focus", () => {
      el.classList.add("active");
      // 向父级发送事件通知面板打开
      emit("open");
    });
    // 监听dom失去焦点事件
    el.addEventListener("blur", () => {
      el.classList.remove("active");
      // 判断面板是否向父级发送事件通知面板关闭
      emit("close");
    });
  },
};
</script>

<style scoped>
.search {
  width: 200px;
  height: 32px;
  background: transparent;
  border: var(--border);
  outline: none;
  padding: 0 8px;
  color: var(--text-navbar);
  border-radius: 6px;
  transition: all 0.5s ease;
}
.active {
  border: 1px solid #009dff;
  width: 100%;
  border-radius: 6px 6px 0 0;
  transition: 0.5s ease;
}
</style>
