<!--
* @Descripttion:
* @version:
* @Author: Chenyx
 * @Date: 2022-10-12 23:06:25
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-06-20 15:40:35
-->

<script setup lang="ts">
import Dialog from "@/components/Dialog/Dialog.vue";
import NavPanel from "@/components/NavPanel.vue";
import BaseIcon from "@/components/BaseIcon.vue";
import Content from "./components/Content.vue";
import HomeSidebar from "./components/HomeSidebar.vue";
import FooterPanel from "./components/Footer.vue";
import { useRoute } from "vue-router";
import { computed, onMounted, reactive, watch } from "vue";
import { useAppStroe } from "@/store/modules/app";
import Notification from "@/components/Notification/Notification.vue";
import { useMenu } from "@/hooks/menu-hooks";

const route = useRoute();
const appStore = useAppStroe();
const { menu } = useMenu();

const state = reactive({
    top: 0,
    showTopNav: true,
    showNavDialog: false,
});

onMounted(() => {
    window.addEventListener("scroll", () => {
        state.top =
            document.documentElement.scrollTop || document.body.scrollTop;
        console.log(state.top);
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
const isShowSidebar = computed(() => {
    return route.path === "/home" ? true : false;
});

const isMobile = computed(() => {
    return appStore.deviceStatus.isMobile;
});

function openNavDialog() {
    state.showNavDialog = true;
}
function closeNavDialog() {
    state.showNavDialog = false;
}
</script>
<template>
    <div class="layout">
        <div id="main" class="layout-container">
            <Notification />
            <Dialog
                :isShow="state.showNavDialog"
                title="站内导航"
                @close="closeNavDialog"
            >
                <template v-slot:content>
                    <div
                        v-for="item in menu"
                        :key="item.index"
                        class="menu-item"
                        @click="item.fun(),closeNavDialog()"
                    >
                        {{ item.title }}
                    </div>
                </template>
            </Dialog>
            <div v-show="state.showTopNav" class="top-layout">
                <div class="top-panel">
                    <div style="opacity: 0" />
                    <nav-panel v-if="!isMobile" />
                    <base-panel @click="openNavDialog" v-else>
                        <span style="margin-right: 10px">前往</span>
                        <base-icon
                            iconName="icon-xiangxia"
                            color="#71717a"
                        ></base-icon>
                    </base-panel>
                    <div style="opacity: 0" />
                </div>
            </div>
            <div id="main" class="main-layout">
                <div v-show="!isMobile && isShowSidebar" class="slider-layout">
                    <home-sidebar />
                </div>
                <div class="content-layout">
                    <content />
                </div>
            </div>
            <div v-if="isMobile" class="footer-layout">
                <footer-panel />
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.menu-item {
    padding: 0 5px;
    margin-left: 5px;
    font-size: 1rem;
    line-height: 1.75rem;
    height: 25px;
    margin-top: 5px;
    border-bottom: 1px solid #363637;
}
</style>
