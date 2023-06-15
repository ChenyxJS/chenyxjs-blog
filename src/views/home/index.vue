<!--
 * @Author: chenyx
 * @Date: 2023-04-11 18:41:34
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-06-13 18:36:09
 * @FilePath: /chenyxjs-blog/src/views/home/index.vue
-->
<script setup lang="ts">
import WallpaperSwiper from "@/components/WallpaperSwiper.vue";
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
                <h3>👋欢迎来到我的个人网站</h3>
                <h1>Call me Chenyx</h1>
                <h3>
                    <span>And I'm a</span>
                    <vuetyped
                        class="identity"
                        :strings="['前端开发工程师', '技术文章分享者']"
                        :loop="true"
                        :startDelay="300"
                        :typeSpeed="100"
                        :backSpeed="50"
                    >
                        <div class="typing"></div>
                    </vuetyped>
                </h3>
            </div>
        </div>
        <div class="panel">
            <ArticlePanel></ArticlePanel>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.home {
    width: 100%;
    height: 100%;
    .panel {
        width: 100%;
        margin-bottom: 70px;
    }
}
.home .introduction {
    display: flex;
    align-items: flex-start;
    .content {
        margin-top: 70px;
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

@media (max-width: 729px) {
    .panel {
        height: auto !important;
        display: flex;
        flex-direction: column;
    }
    .home .introduction .content {
        margin-top: 70px;
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
