<!--
 * @Author: chenyx
 * @Date: 2023-04-11 18:41:34
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-04-14 23:53:34
 * @FilePath: /chenyxjs-blog/src/views/home/index.vue
-->
<script setup lang="ts">
import WallpaperSwiper from "@/components/WallpaperSwiper.vue";
import TypewriterText from "@/components/TypewriterText.vue";
import ArticlePanel from "./ArticlePanel.vue";
</script>

<template>
  <div class="home">
    <div class="panel introduction">
      <div class="content">
        <h3>Welcome to my website</h3>
        <h1>Call me Chenyx</h1>
        <h3>
          And I'm a
          <typewriter-text
            text="Frontend Development Engineer"
            color="#b7b2a9"
          ></typewriter-text>
        </h3>
        <p>
          People can never know what they want, because people can only live
          once, neither compare it with the previous life, nor correct it in the
          next life. There is no way to test which choice is good, because there
          is no comparison. Everything is an immediate experience, only this
          time, can't prepare.
        </p>
      </div>
      <div class="model-panel">
        <three-tesla></three-tesla>
      </div>
    </div>
    <div class="panel">
      <div class="title">wallpaper</div>
      <wallpaper-swiper class="wallpaper-swiper"></wallpaper-swiper>
    </div>
    <div class="panel">
      <div class="title">Blog</div>
      <article-panel class="article-panel"></article-panel>
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
  scroll-snap-type: y proximity;

  .panel {
    width: 100%;
    height: 100%;
    scroll-snap-align: start;
    scroll-snap-stop: always;
    .title{
      font-size: 40px;
      font-weight: 700;
      margin-bottom: 20px;
      margin-left: 20px;
    }
  }
}
.home  .introduction {
  display: flex;
  align-items: flex-start;
  .content {
    margin-top: 15%;
    max-width: 46%;
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
    }
    p {
      font-size: 16px;
    }
  }
  .model-panel{
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10%;
    :deep(canvas){
    border-radius: 10px;
    }
  }
}
</style>
