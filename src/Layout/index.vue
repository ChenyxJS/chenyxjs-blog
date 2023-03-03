<!--
 * @Descripttion: 
 * @version: 
 * @Author: Chenyx
 * @Date: 2022-10-12 23:06:25
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-03-03 15:18:14
-->
<template>
  <div class="Layout">
    <top-nav />
    <div class="container">
      <!-- 导航栏 -->
      <div class="slider">
        <!-- 标签分类 -->
        <ul class="article-tags">
          <li
            @click="change(item.id)"
            v-for="item in state.store.getCategory()"
            class="article-tags-item"
          >
            <i
              class="iconfont icon-a-biaoqianlabel"
              :class="[item.active ? 'is-active' : '']"
            ></i>
            <a>{{ item.name }}</a>
          </li>
        </ul>
        <!-- 最新动态 -->
        <div class="recent-activity">
          <h4>最近动态</h4>
          <section>Vite3.0 + Vue3 + Typescript 版本的 Blog 上线了!</section>
        </div>
        <!-- Copyright -->
        <div class="copyright">
          <h4>Copyright</h4>
          <section>
            <p>作者：Chenyx</p>
            <p>www.chenyxjs.com 版权所有©2022</p>
          </section>
        </div>
      </div>
      <div class="content">
        <transition name="fade" mode="out-in" appear>
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </transition>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useCategoryStore } from "@/store/modules/category";
import topNav from "./components/topNav.vue";
import { useRouter,useRoute } from "vue-router";
import { reactive } from "vue";

components: {
  topNav;
}
const state = reactive({
  router: useRouter(),
  route:useRoute(),
  store: useCategoryStore(),
});

function toHomePage() {
  state.router.push({ path: "/index/home", replace: true });
}
function change(id: number) {
  state.store.changeCategory(id);
  toHomePage();
}
</script>

<style lang="scss" scoped>
.Layout {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  .container {
    display: flex;
    flex: 1;
    color: var(--text-navbar);
    .slider {
      width: 350px;
      min-height: var(--main-height);
      background: var(--bg-primary);
      padding: 0px 32px;

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
    }
    .content {
      flex: 1;
      background: var(--bg-inset);
      overflow: scroll;
    }
  }
}
.is-active {
  color: var(--warning);
}
</style>
