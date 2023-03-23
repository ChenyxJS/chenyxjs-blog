<!--
 * @Descripttion: 
 * @version: 
 * @Author: Chenyx
 * @Date: 2022-10-15 20:40:39
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-03-23 17:07:58
-->
<template>
  <div class="home">
    <!-- 主内容区 -->
    <ariticle-content />
    <!-- 右侧边栏 -->
    <div class="asider-content" v-if="!appStore.deviceStatus.isMobile">
      <right-list-panel> </right-list-panel>
    </div>
  </div>
</template>

<script setup lang="ts">
import AriticleContent from "./components/AriticleContent.vue";
import RightListPanel from "./components/RightListPanel.vue";
import { useAppStroe } from "@/store/modules/app";

const appStore = useAppStroe();
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  min-height: var(--main-height);
  overflow: hidden;
  ::-webkit-scrollbar-thumb {
    display: none;
  }

  .asider-content {
    transition: all 0.3s ease-out;
    margin-left: 24px;
    width: 350px;
    min-height: var(--main-height);
  }
}

.asider-content_hidden {
  width: 0 !important;
  margin: 0 !important ;
}
</style>
