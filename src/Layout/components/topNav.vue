<!--
 * @Descripttion: 
 * @version: 
 * @Author: Chenyx
 * @Date: 2022-10-12 23:13:30
 * @LastEditors: Chenyx
 * @LastEditTime: 2022-11-05 21:11:47
-->
<template>
  <div class="top-nav">
    <div class="top-nav-container">
      <div class="nav-left">
        <input class="search" placeholder="keywords" v-focus type="text" />
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
<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
export default defineComponent({
  name: "topNav",
  directives: {
    focus: {
      mounted(el) {
        el.addEventListener("mouseenter", () => {
          el.classList.add("active");
        });
        el.addEventListener("mouseleave", () => {
          if(el !== document.activeElement){
            el.classList.remove("active");
          }
        });
      },
    },
  },
  computed: {
    isShowNavRight() {
      return this.$route.path == "/index/home" ? true : false;
    },
  },
  setup(){
     // 实例化路由对象
     const router = useRouter()
    // 初始化跳转方法
    const toHome = ref()
    toHome.value = ()=> {
      router.push("/index/home");
    }
    const toProject = ref()
    toProject.value = ()=> {
      router.push("/index/project");
    }
    return{
      toHome,
      toProject
    }
  },

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

      input {
        width: 200px;
        height: 32px;
        background: transparent;
        border: var(--border);
        outline: none;
        padding: 0 8px;
        color: var(--text-navbar);
        border-radius: 6px;
      }
      .active {
        border: 1px solid #009dff;
        width: 100%;
        transition: 0.5s ease;
      }
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
</style>
