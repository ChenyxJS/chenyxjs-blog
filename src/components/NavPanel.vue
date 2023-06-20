<script setup lang="ts">
import { useMenu } from "@/hooks/menu-hooks";
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";

// data
const { menu } = useMenu();
const route = useRoute();

// hook
onMounted(() => {
    fuc();
});
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
function fuc() {
    let container = document.getElementById("container");
    if (container) {
        container.addEventListener("mousemove", (e: MouseEvent) => {
            let rect = container?.getBoundingClientRect() as DOMRect;
            let x = e.clientX - rect.left;
            let y = e.clientY - rect.top;
            container?.style.setProperty("--x", x + "px");
            container?.style.setProperty("--y", y + "px");
        });
    }
}
</script>
<template>
    <nav id="container">
        <div class="container"></div>
        <ul class="nav-panel">
            <li
                :class="[
                    nowNavIndex === item.index ? 'nav-item-active' : '',
                    'nav-item',
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
    </nav>
</template>
<style lang="scss" scoped>
nav {
    position: relative;
    z-index: 50;
}
nav:hover .container {
    position: absolute;
    inset: 0;
    z-index: 9999;
    border-radius: 9999px;
    background: radial-gradient(
        100px circle at var(--x) var(--y),
        hsla(214, 83%, 59%, 0.15) 0%,
        transparent 65%
    );
    pointer-events: none;
}

.nav-panel {
    display: inline-flex;
    justify-content: center;
    position: relative;
    padding: 12px 20px;
    box-shadow: var(--box-border-shadow);
    border-radius: 9999px;
    background-image: linear-gradient(
        to bottom,
        rgba(24, 24, 27, 0.7),
        rgba(39, 39, 42, 0.9)
    );
    cursor: pointer;
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);

    .nav-item {
        padding: 0 5px;
        font-weight: 500;
        color: #fff;
        transition: all 0.45s cubic-bezier(0.4, 0, 0.2, 1);
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
