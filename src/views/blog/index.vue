<!--
 * @Descripttion:
 * @version:
 * @Author: Chenyx
 * @Date: 2022-10-15 20:40:39
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-05-09 19:05:36
-->
<template>
    <div class="blog">
        <!-- 主内容区 -->
        <ariticle-content />
        <!-- 右侧边栏 -->
        <div class="asider-content" v-if="!appStore.deviceStatus.isMobile">
            <right-list-panel> </right-list-panel>
        </div>
    </div>
</template>

<script setup lang="ts" name="Blog">
import AriticleContent from "./components/ArticleList.vue";
import RightListPanel from "./components/RightListPanel.vue";
import { useAppStroe } from "@/store/modules/app";

const appStore = useAppStroe();
</script>

<style lang="scss" scoped>
.blog {
    display: flex;
    min-height: var(--main-height);
    overflow: hidden;
    // background: #1f242d;

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
