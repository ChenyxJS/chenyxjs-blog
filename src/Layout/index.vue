<!--
 * @Descripttion: 
 * @version: 
 * @Author: Chenyx
 * @Date: 2022-10-12 23:06:25
 * @LastEditors: Chenyx
 * @LastEditTime: 2022-10-17 15:28:26
-->
<template>
  <div class="Layout">
    <top-nav />
    <div class="container">
      <!-- 导航栏 -->
      <div class="slider">
        <!-- 标签分类 -->
        <ul class="article-tags">
          <li class="article-tags-item">
            <i class="iconfont icon-a-biaoqianlabel is-active"></i>
            <a href="">全部</a>
          </li>
          <li class="article-tags-item">
            <i class="iconfont icon-a-biaoqianlabel info"></i>
            <a href="">前端</a>
          </li>
          <li class="article-tags-item">
            <i class="iconfont icon-a-biaoqianlabel info"></i>
            <a href="">前端资源</a>
          </li>
          <li class="article-tags-item">
            <i class="iconfont icon-a-biaoqianlabel info"></i>
            <a href="">git</a>
          </li>
          <li class="article-tags-item">
            <i class="iconfont icon-a-biaoqianlabel info"></i>
            <a href="">其他</a>
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
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import topNav from "./components/topNav.vue";
export default {
  components: {
    topNav,
  },
};
</script>

<style lang="scss" scoped>
.Layout {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;

  .container {
    display: flex;
    flex: 1;
    .slider {
      width: 350px;
      min-height: var(--main-height);
      background: var(--bg-primary);
      padding: 0px 32px;

      .article-tags {
        width: 100;
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
    }
  }
}
.is-active {
  color: var(--warning);
}
</style>
