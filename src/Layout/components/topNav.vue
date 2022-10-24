<!--
 * @Descripttion: 
 * @version: 
 * @Author: Chenyx
 * @Date: 2022-10-12 23:13:30
 * @LastEditors: Chenyx
 * @LastEditTime: 2022-10-20 19:39:39
-->
<template>
  <div class="top-nav">
    <div class="top-nav-container">
      <div class="nav-left flex-cc">
        <input class="search" placeholder="keywords" type="text" />
      </div>
      <div class="nav-options">
        <a href="">门户</a>
        <a @click="toHome">总览</a>
        <a @click="toProject">UX</a>
      </div>
      <div class="nav-right flex flex-ce">
        <transition >
          <div v-if="isShowNavRight" class="nav-right_title">掘金前端热点 <svg-icon icon-name="hot" icon-size="16"></svg-icon>
        </div>
        </transition>
        
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: "topNav",
  computed: {
    isShowNavRight() {
      return this.$route.path == '/index/home' ? true : false;
    }
  },
  methods: {
    toHome() {
      this.$router.push("/index/home")
    },
    toProject() {
      this.$router.push("/index/project")
    },
  },
})
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

      input {
        width: 100%;
        height: 32px;
        background: transparent;
        border: var(--border);
        outline: none;
        padding: 0 8px;
        color: var(--text-navbar);
        border-radius: 6px;
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
