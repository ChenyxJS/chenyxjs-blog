<!--
 * @Author: chenyx
 * @Date: 2023-03-09 17:55:18
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-06-12 09:31:14
 * @FilePath: /chenyxjs-blog/src/Layout/components/BlogSidebar.vue
-->
<template>
    <!-- tags -->
    <ul class="article-tags">
        <li
            @click="change(item.id)"
            v-for="item in store.category"
            class="article-tags-item"
        >
            <i
                class="iconfont icon-biaoqian"
                :class="[item.active ? 'is-active' : '']"
            ></i>
            <a>{{ item.name }}</a>
        </li>
    </ul>
    <!-- Copyright -->
    <copyright />
</template>

<script setup lang="ts">
import Copyright from "@/components/Copyright.vue";
import { useCategoryStore } from "@/store/modules/category";

const store = useCategoryStore();

function change(id: number) {
    store.changeCategory(id);
}
</script>

<style lang="scss" scoped>
.article-tags {
    padding-bottom: 32px;
    border-bottom: var(--border);
    .article-tags-item {
        padding: 5px;
    }
    ul {
        color: var(--text-second);
    }
    a {
        color: var(--text-link);
        transition: 0.3s ease;
        font-weight: 600;
        margin-left: 6px;
        display: block;
    }
}
.recent-activity {
    padding-bottom: 32px;
    border-bottom: var(--border);
}
.copyright section,
.recent-activity section {
    color: var(--text-second);
    font-size: 14px;
}
</style>
