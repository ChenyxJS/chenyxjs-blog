<script setup lang="ts">
import { reactive } from "vue";

const state = reactive({
  wallpaperList: [
    "http://file.chenyx.site/wallpaper/5_15488489005437.mp4",
    "http://file.chenyx.site/wallpaper/5_15488489005404.mp4",
    "http://file.chenyx.site/wallpaper/5_15488489005414.mp4",
    "http://file.chenyx.site/wallpaper/5_15488489004905.mp4",
    "http://file.chenyx.site/wallpaper/2_15488489005432.mp4",
    "http://file.chenyx.site/wallpaper/2_15488489005410.mp4",
    "http://file.chenyx.site/wallpaper/2_15488489005374.mp4",
    "http://file.chenyx.site/wallpaper/2_15488489005356.mp4",
    "http://file.chenyx.site/wallpaper/2_15488489005336.mp4",
    "http://file.chenyx.site/wallpaper/2_15488489005307.mp4",
    "http://file.chenyx.site/wallpaper/2_15488489005292.mp4",
    "http://file.chenyx.site/wallpaper/2_15488489005286.mp4",
    "http://file.chenyx.site/wallpaper/2_15488489005274.mp4",
    "http://file.chenyx.site/wallpaper/2_15488489005196.mp4",
    "http://file.chenyx.site/wallpaper/1_15488489005447.mp4",
    "http://file.chenyx.site/wallpaper/1_15488489005440.mp4",
    "http://file.chenyx.site/wallpaper/1_15488489005430.mp4",
    "http://file.chenyx.site/wallpaper/1_15488489005402.mp4",
  ],
});

function play(id: string) {
  const video: any = document.getElementById(id);
  video.play();
}

function download(url: string) {
  // window.open(url);
}
</script>
<template>
  <div class="wallpaper-panel">
    <!-- <img class="pc-img" src="@/assets/images/pc.png" /> -->
    <div
      v-for="(item, index) in state.wallpaperList"
      :key="index"
      class="wallpaper"
    >
      <div @click="download(item)" class="download-icon"></div>
      <div @click="play(`video-${index}`)" class="play-icon"></div>
      <video :id="`video-${index}`" class="video" v-lazy="item"></video>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.wallpaper-panel {
  width: 100%;
  padding-bottom: 60px;
  margin: 10px 0;
  column-count: 2;
  column-gap: 20px;
}
.wallpaper {
  position: relative;
  display: flex;
  width: 100%;
  overflow: hidden;
  border-radius: 15px;
  margin-bottom: 15px;

  .video {
    flex: 1;
    width: 100%;
    transition: all 0.5s ease-in-out;
  }
}
.download-icon {
  position: absolute;
  top: calc(50% - 53px);
  left: calc(50% - 90px);
  width: 100px;
  height: 100px;
  opacity: 0;
  background-image: url("@/assets/images/download.png");
  background-repeat: no-repeat; //不重复拉伸
  background-size: 100% 100%;
  transition: all 0.5s ease;
  z-index: 2;
}
.play-icon {
  position: absolute;
  top: calc(50% - 50px);
  left: calc(50% - 10px);
  width: 100px;
  height: 100px;
  opacity: 0;
  background-image: url("@/assets/images/player.png");
  background-repeat: no-repeat; //不重复拉伸
  background-size: 100% 100%;
  transition: all 0.5s ease;
  z-index: 2;
}
.wallpaper::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.4);
  transition: all 0.5s ease;
  z-index: 1;
}
.wallpaper:hover {
  .video {
    transform: scale(1.1);
  }
  .play-icon,
  .download-icon {
    opacity: 1;
  }
}
.wallpaper:hover::after {
  opacity: 1;
}
.pc-img {
  width: 90%;
}
</style>
