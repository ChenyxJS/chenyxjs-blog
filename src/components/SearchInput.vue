<!--
 * @Author: chenyx
 * @Date: 2023-03-11 10:07:15
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-08-29 18:05:41
 * @FilePath: /chenyxjs-blog/src/components/SearchInput.vue
-->
<template>
    <div
        style="display: flex; flex-wrap: nowrap; align-items: center"
        @click="open"
    >
        <base-icon icon-name="icon-sousuo" size="26"></base-icon>
        <span style="margin: 0 5px">搜索</span>
        <span class="search" type="text">
            {{ placeholder }}
        </span>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import key from "keymaster";
const emit = defineEmits(["open", "close"]);

const props = defineProps({
    placeholder: {
        type: String,
        default: "",
    },
});
onMounted(() => {
    // 绑定搜索框开启事件
    key("⌘+k", open);
});

function open() {
    emit("open");
}
</script>

<style scoped>
.search {
    text-align: center;
    line-height: 30px;
    width: 50px;
    height: 32px;
    background: transparent;
    border: var(--border);
    outline: none;
    color: var(--text-navbar);
    border-radius: 6px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 12px;
}
.search:hover {
    border: 1px solid #009dff;
}
</style>
