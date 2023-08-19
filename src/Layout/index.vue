<!--
* @Descripttion:
* @version:
* @Author: Chenyx
 * @Date: 2022-10-12 23:06:25
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-08-19 17:11:00
-->

<script setup lang="ts">
import Dialog from "@/components/Dialog/Dialog.vue";
import NavPanel from "@/components/NavPanel.vue";
import BaseIcon from "@/components/BaseIcon.vue";
import Content from "./components/Content.vue";
import FooterPanel from "./components/Footer.vue";
import { useRoute } from "vue-router";
import { computed, onMounted, provide, reactive, ref, watch } from "vue";
import { useAppStroe } from "@/store/modules/app";
import { useMenu } from "@/hooks/menu-hooks";
import { debounce } from "@/utils";
import { useHeaderSearchStroe } from "@/store/modules/headerSearch";

const route = useRoute();
const appStore = useAppStroe();
const { menu } = useMenu();

const state = reactive({
    top: 0,
    showTopNav: true,
    showNavDialog: false,
});

const headerSearchStore = useHeaderSearchStroe();
let searchValue = ref(headerSearchStore.keywords);
let isShowSearchPanel = ref(false);
const change = debounce(headerSearchStore.changeKeywords, 1000);
provide("searchValue", searchValue);

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

const isMobile = computed(() => {
    return appStore.deviceStatus.isMobile;
});

function openNavDialog() {
    state.showNavDialog = true;
}
function closeNavDialog() {
    state.showNavDialog = false;
}

function changeKeywords(keywords: string) {
    searchValue.value = keywords;
}

function openSearchPanel() {
    isShowSearchPanel.value = true;
}

function closeSearchPanel() {
    isShowSearchPanel.value = false;
}
</script>
<template>
    <div class="layout">
        <div id="main" class="layout-bg"></div>
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
                    @click="item.fun(), closeNavDialog()"
                >
                    {{ item.title }}
                </div>
            </template>
        </Dialog>
        <div class="layout-container">
            <div v-show="state.showTopNav" class="top-layout">
                <div class="top-panel">
                    <div class="top-left" >
                        <search-input
                            class="input"
                            placeholder="⌘ K"
                            :value="searchValue"
                            @open="openSearchPanel"
                            @close="closeSearchPanel"
                        ></search-input>
                        <SearchPanel
                            :is-show="isShowSearchPanel"
                            @search="changeKeywords"
                            @close="closeSearchPanel"
                            class="panel"
                        ></SearchPanel>
                    </div>
                    <div class="top-center">
                        <nav-panel v-if="!isMobile" />
                        <base-panel @click="openNavDialog" v-else>
                            <span style="margin-right: 10px">前往</span>
                            <base-icon
                                iconName="icon-xiangxia"
                                color="#71717a"
                            ></base-icon>
                        </base-panel>
                    </div>
                    <div class="top-right">
                        <img
                            class="avtar"
                            src="@/assets/images/Chenyx.jpg"
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <div id="main" class="main-layout">
                <div class="content-layout">
                    <content />
                </div>
            </div>
            <div class="footer-layout">
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
