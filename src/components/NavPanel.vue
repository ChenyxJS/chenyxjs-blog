<script setup lang="ts">
import { useMenu } from "@/hooks/menu-hooks";
import { computed } from "vue";
import { useRoute } from "vue-router";

// data
const { menu } = useMenu();
const route = useRoute();

// hook
// 获取当前Nav下标
const nowNavIndex = computed(() => {
    // 若当前实在文章页直接返回blog标签的下标
    if (route.path == "/article") return 2;
    const item = menu.find((item) => {
        return item.path === route.path;
    });
    if (item) {
        return item.index;
    }
    return 1;
});
// method
</script>
<template>
    <ul class="nav-panel">
        <li
            :class="[
                nowNavIndex === item.index ? 'nav-item-active' : '','nav-item'
            ]"
            v-for="item in menu"
            :key="item.index"
            @click="item.fun"
        >
            {{ item.title }}
        </li>
        <div
            class="indicator"
            :style="{ left: `${nowNavIndex * 38 + 22}px` }"
        ></div>
    </ul>
</template>
<style lang="scss" scoped>
.nav-panel {
    display: inline-flex;
    justify-content: center;
    position: relative;
    padding: 12px 20px;
    box-shadow: var(--box-border-shadow);
    border-radius: 9999px;
    background-color: rgba(24, 24, 27, 1);
    // background: radial-gradient(
    //     99.69232668565822px circle at 245.5078125px 28px,
    //     hsla(81, 88%, 80%, 0.07) 0%,
    //     transparent 65%
    // );
    cursor: pointer;
    .nav-item {
        padding: 0 5px;
        font-weight: 500;
        color: #fff;
    }
    .nav-item-active {
        color: #409eff;
    }
    .nav-item:hover {
        color: #409eff;
    }
    .indicator {
        position: absolute;
        bottom: -2px;
        width: 32px;
        height: 0;
        border: 1px solid #409eff;
        border-radius: 4px;
        transition: all 0.5s ease;
    }
}
</style>
