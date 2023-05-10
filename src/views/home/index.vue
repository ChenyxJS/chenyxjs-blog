<!--
 * @Author: chenyx
 * @Date: 2023-04-11 18:41:34
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-05-10 14:03:22
 * @FilePath: /chenyxjs-blog/src/views/home/index.vue
-->
<script setup lang="ts">
import WallpaperSwiper from "@/components/WallpaperSwiper.vue";
import ThreeTesla from "@/components/ThreeTesla.vue";
import ArticlePanel from "./ArticlePanel.vue";
import CtaButton from "@/components/CtaButton.vue";
import { useAppStroe } from "@/store/modules/app";
import { useMenu } from "@/hooks/menu-hooks";

const { toWallpaper, toBlog } = useMenu();
const appStore = useAppStroe();
</script>

<template>
  <div class="home">
    <div class="panel introduction">
      <div class="content">
        <h3>👋Welcome to my website</h3>
        <h1>Call me Chenyx</h1>
        <h3>
          <span>And I'm a</span>
          <vuetyped
            class="identity"
            :strings="['Frontend Development Engineer', 'Technical Writer']"
            :loop="true"
            :startDelay="300"
            :typeSpeed="100"
            :backSpeed="50"
          >
            <div class="typing"></div>
          </vuetyped>
        </h3>
        <p>
          People can never know what they want, because people can only live
          once, neither compare it with the previous life, nor correct it in the
          next life. There is no way to test which choice is good, because there
          is no comparison. Everything is an immediate experience, only this
          time, can't prepare.
        </p>
      </div>
    </div>
    <div class="panel">
      <div class="title"><span>Wallpaper</span></div>
      <wallpaper-swiper class="wallpaper-swiper"></wallpaper-swiper>
      <div class="more flex flex-cc">
        <cta-button @click="toWallpaper" text="More Wallpaper"></cta-button>
      </div>
    </div>
    <div class="panel" style="height: auto;">
      <div class="title"><span>Blog</span></div>
        <article-panel></article-panel>
      <div class="more flex flex-cc">
        <cta-button @click="toBlog" text="More Blog"></cta-button>
      </div>
    </div>
    <div v-if="!appStore.deviceStatus.isMobile" class="panel">
      <div class="title"><span>Threejs Demo</span></div>
      <div class="model-panel">
        <three-tesla></three-tesla>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  background: #1f242d;
  // scroll-snap-type: y mandatory;

  .panel {
    width: 100%;
    height: 100%;
    margin-bottom: 70px;
    // scroll-snap-align: start;
    // scroll-snap-stop: always;
    .title {
      font-size: 36px;
      font-weight: 700;
      margin-left: 20px;
      margin-bottom: 40px;
      position: relative;
      span{
        position: relative;
        left: 20px;
        top: 5px;
      }
    }
    .title:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      border-radius: 50px;
      background: #409eff;
      width: 50px;
      height: 50px;
      transition: all 0.3s ease;
    }
    .more{
      margin-top: 30px;
    }
  }
}
.home .introduction {
  display: flex;
  align-items: flex-start;
  .content {
    margin-top: 15%;
    max-width: 100%;
    padding-left: 70px;
    h1 {
      font-size: 56px;
      font-weight: 700;
      margin: -3px 0;
    }
    h3 {
      font-size: 32px;
      font-weight: 700;
      margin: -3px 0;
      overflow: hidden;
    }

    h3:nth-of-type(2) {
      margin-bottom: 20px;
      span {
        float: left;
        margin-right: 16px;
      }
    }
    p {
      font-size: 16px;
      width: 60%;
    }
  }
}
.model-panel {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.article-panel{
  width: 700px;
}

@media (max-width: 729px) {
  .panel {
    height: auto !important;
    display: flex;
    flex-direction: column;
  }
  .home .introduction .content {
    margin-top: 15%;
    width: 100%;
    max-width: 90%;
    padding-left: 20px;
    h1 {
      font-size: 32px;
      font-weight: 700;
      margin: -3px 0;
    }
    h3 {
      font-size: 20px;
      font-weight: 1000;
      margin: -3px 0;
      overflow: hidden;
    }
    h3:nth-of-type(2) {
      margin-bottom: 20px;
      span {
        float: none;
      }
    }
    p {
      font-size: 14px;
    }
  }
}
.identity {
  color: #b7b2a9;
}
</style>
