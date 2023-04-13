<!--
 * @Author: chenyx
 * @Date: 2023-04-11 18:41:34
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-04-14 01:34:38
 * @FilePath: /chenyxjs-blog/src/views/wallpaper/index.vue
-->
<script setup lang="ts">
import WallpaperPanel from "./WallpaperPanel.vue";
</script>
<template>
  <div class="wallpapers flex">
    <wallpaper-panel></wallpaper-panel>
  </div>
</template>
<style lang="scss" scoped>
.wallpapers {
  width: 100%;
  padding-top: 20px;
  height: 100%;
  overflow: scroll;
  flex-direction: column;
}
</style>
