<!--
 * @Descripttion:
 * @version:
 * @Author: Chenyx
 * @Date: 2022-10-15 20:40:39
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-06-20 12:21:50
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

<script setup lang="ts">
import AriticleContent from "./components/ArticleList.vue";
import RightListPanel from "./components/RightListPanel.vue";
import { useAppStroe } from "@/store/modules/app";

defineOptions({
    name: "Blog"
})

const appStore = useAppStroe();


</script>

<style lang="scss" scoped>
.blog {
    position: relative;
    display: flex;
    min-height: var(--main-height);

    ::-webkit-scrollbar-thumb {
        display: none;
    }

    .asider-content {
        height: fit-content;
        position: sticky;
        top: 0;
        transition: all 0.3s ease-out;
        margin-left: 24px;
        min-height: var(--main-height);
    }
}

.asider-content_hidden {
    width: 0 !important;
    margin: 0 !important ;
}
</style>
