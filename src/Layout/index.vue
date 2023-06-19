<!--
* @Descripttion:
* @version:
* @Author: Chenyx
 * @Date: 2022-10-12 23:06:25
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-06-18 00:33:43
-->
<template>
    <div class="Layout">
        <Notification />
        <div v-show="state.showTopNav" class="top-layout">
            <div class="top-panel">
                <div style="opacity: 0" />
                <nav-panel />
                <div style="opacity: 0" />
            </div>
        </div>
        <div class="main-layout">
            <div v-show="!isMobile" class="slider-layout">
                <blog-sidebar v-if="isShowBlogSidebar" />
                <home-sidebar v-else />
            </div>
            <div class="content-layout">
                <content />
            </div>
        </div>
        <div v-if="isMobile" class="footer-layout">
            <footer-panel />
        </div>
    </div>
</template>
<script setup lang="ts">
import NavPanel from "@/components/NavPanel.vue";
import TopNav from "./components/TopNav.vue";
import Content from "./components/Content.vue";
import BlogSidebar from "./components/BlogSidebar.vue";
import HomeSidebar from "./components/HomeSidebar.vue";
import FooterPanel from "./components/Footer.vue";
import { useRoute } from "vue-router";
import { computed, onMounted, reactive, watch } from "vue";
import { useAppStroe } from "@/store/modules/app";
import Notification from "@/components/Notification/Notification.vue";

const route = useRoute();
const appStore = useAppStroe();
const state = reactive({
    top: 0,
    showTopNav: true,
});

onMounted(() => {
    window.addEventListener("scroll", () => {
        state.top =
            document.documentElement.scrollTop || document.body.scrollTop;
    });
});

watch(
    () => state.top,
    (newVal, oldVal) => {
        if (newVal > 62) {
            if (newVal > oldVal) {
                state.showTopNav = false;
            } else {
                state.showTopNav = true;
            }
        }
    }
);

const isShowBlogSidebar = computed(() => {
    return route.path === "/blog" || route.path === "/article" ? true : false;
});

const isMobile = computed(() => {
    return appStore.deviceStatus.isMobile
});
</script>
