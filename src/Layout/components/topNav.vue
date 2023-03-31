<!--
 * @Descripttion: 
 * @version: 
 * @Author: Chenyx
 * @Date: 2022-10-12 23:13:30
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-04-01 01:20:38
-->
<template>
  <div class="top-nav">
    <div class="top-nav-container">
      <div class="nav-left">
        <search-input
          class="input"
          placeholder="keywords"
          :value="searchValue"
          @open="openSearchPanel"
          @close="closeSearchPanel"
        ></search-input>
        <SearchPanel
          v-if="!appStore.deviceStatus.isMobile"
          :is-show="isShowSearchPanel"
          @search="changeKeywords"
          class="panel"
        ></SearchPanel>
      </div>
      <div v-show="!appStore.deviceStatus.isMobile" class="nav-options">
        <a @click="toPortal">门户</a>
        <a @click="toHome">总览</a>
        <a @click="toProject">项目</a>
      </div>
      <div class="nav-right flex flex-ce">
        <div
          v-if="isShowNavRight && !appStore.deviceStatus.isMobile"
          class="nav-right_title"
        >
          掘金前端热点 <svg-icon icon-name="hot" icon-size="16"></svg-icon>
        </div>
        <div v-show="appStore.deviceStatus.isMobile" class="menu-btn">
          <menu-btn :is-open="isOpenMenu" @click="openMenu"></menu-btn>
          <menu-panel
            :is-open="isOpenMenu"
            @close-menu="closeMenu"
          ></menu-panel>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, provide, ref, watch } from "vue";
import { useRoute } from "vue-router";
import router from "@/router";
import SearchInput from "@/components/SearchInput.vue";
import SearchPanel from "@/components/SearchPanel.vue";
import MenuBtn from "@/components/MenuBtn.vue";
import MenuPanel from "@/components/MenuPanel.vue";
import { useHeaderSearchStroe } from "@/store/modules/headerSearch";
import { useAppStroe } from "@/store/modules/app";
import { debounce } from "@/utils/index";
import { ElMessage } from "element-plus";

const appStore = useAppStroe();
const headerSearchStore = useHeaderSearchStroe();
let searchValue = ref(headerSearchStore.keywords);
let isOpenMenu = ref(false);
let isShowSearchPanel = ref(false);

provide("searchValue", searchValue);
const change = debounce(headerSearchStore.changeKeywords, 1000);

watch(
  searchValue,
  (newVal, oldVal) => {
    change(newVal);
  }
);

// 实例化路由对象
const route = useRoute();

// 在博客首页时才显示右边的Nav
const isShowNavRight = computed(() => {
  return route.path == "/home" ? true : false;
});

function toPortal(){
  ElMessage.warning('模块正在调试中，敬请期待...')
}
function toHome() {
  router.push("/home");
}
function toProject() {
  // router.push("/project");
  ElMessage.warning('模块正在调试中，敬请期待...')
}
function openMenu() {
  isOpenMenu.value = !isOpenMenu.value;
}
function closeMenu() {
  isOpenMenu.value = false;
}
function changeKeywords(keywords: string) {
  console.log("change keywords: " + keywords);
  searchValue.value = keywords;
}

function openSearchPanel() {
  isShowSearchPanel.value = true;
}
function closeSearchPanel() {
  isShowSearchPanel.value = false;
}
</script>

<style lang="scss" scoped>
.top-nav {
  height: 62px;
  min-height: 62px;
  background: var(--bg-navbar);
  color: #fff;

  .top-nav-container {
    display: flex;
    align-items: center;
    width: 100%;
    height: 62px;

    .nav-left {
      height: 100%;
      width: 294px;
      margin-left: 20px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .input {
        position: relative;
      }
      .panel {
        position: absolute;
        top: 50px;
        left: 20px;
      }
    }

    .nav-options {
      font-weight: 600;
      a {
        margin: 0 5px;
        color: #fff;
      }
    }

    .nav-right {
      height: 100%;
      flex: 1;
      font-weight: 600;
      margin-left: auto;
      &_title {
        width: 100%;
        max-width: 350px;
        letter-spacing: 1px;
      }
    }
  }
}
.menu-btn {
  margin-right: 10px;
}
</style>
