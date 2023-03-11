<!--
 * @Descripttion: 
 * @version: 
 * @Author: Chenyx
 * @Date: 2022-10-12 23:13:30
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-03-11 17:13:31
-->
<template>
  <div class="top-nav">
    <div class="top-nav-container">
      <div class="nav-left">
        <search-input
          placeholder="keywords"
          :value="searchValue"
        ></search-input>
      </div>
      <div class="nav-options">
        <a href="">门户</a>
        <a @click="toHome">总览</a>
        <a @click="toProject">UX</a>
      </div>
      <div class="nav-right flex flex-ce">
        <transition>
          <div v-if="isShowNavRight" class="nav-right_title">
            掘金前端热点 <svg-icon icon-name="hot" icon-size="16"></svg-icon>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, provide, ref, watch } from "vue";
import { useRoute } from "vue-router";
import router from "@/router";
import SearchInput from "@/components/SearchInput.vue";
import {useKeyWordsStore} from "@/store/modules/keywords"
import {debounce} from "@/utils/index"

let searchValue = ref("");
provide('searchValue', searchValue)

watch(searchValue, (newVal, oldVal) => {
  debounce(changeKeywords,2000,true)
});
function changeKeywords(){
  useKeyWordsStore().changeKeywords(searchValue.value)
}

// 实例化路由对象
const route = useRoute();
// 初始化跳转方法
const toHome = ref();
toHome.value = () => {
  router.push("/blog/home");
};
const toProject = ref();
toProject.value = () => {
  router.push("/blog/project");
};
// 在博客首页时才显示右边的Nav
const isShowNavRight = computed(() => {
  return route.path == "/blog/home" ? true : false;
});
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
      width: 318px;
      margin-left: 20px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }

    .nav-options {
      margin: 0 24px;
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

@media screen and (max-width:576px){
  .nav-right {
    display: none;
  }
} 
</style>
