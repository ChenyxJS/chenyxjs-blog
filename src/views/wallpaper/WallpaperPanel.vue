<script setup lang="ts">
import { reactive } from "vue";

const state = reactive({
    wallpaperList: [
        "https://oss.chenyx.site/static/png/chenyx.png",
        "https://oss.chenyx.site/static/jpg/t014d46a590e4d07543.jpg",
        "https://oss.chenyx.site/static/jpg/t012492e8ab86f90a3e.jpg",
        "https://oss.chenyx.site/static/jpg/t013d7f3c427ef61ef4.jpg",
        "https://oss.chenyx.site/static/png/Chenyx3dText.png",
        "https://oss.chenyx.site/static/jpg/ba64-fykcppx8320919.jpg",
        "https://oss.chenyx.site/static/jpg/t0125431d12a54d8874.jpg",
        "https://oss.chenyx.site/static/png/bizhi1.png",
        "https://oss.chenyx.site/static/png/bizhi2.png",
        "https://oss.chenyx.site/static/jpg/t0153f7a6e7558f8414.jpg",
        "https://oss.chenyx.site/static/jpg/t0154531e5acb137359.jpg",
        "https://oss.chenyx.site/static/jpg/t015d4f327880dddb26.jpg",
        "https://oss.chenyx.site/static/jpg/t01e1a2d6222d272b78.jpg",
        "https://oss.chenyx.site/static/jpg/t01c3dca97966573c74.jpg",
        "https://oss.chenyx.site/static/jpg/t01a676f085326404d3.jpg"
    ],
});

function play(id: string) {
    const video: any = document.getElementById(id);
    video.play();
}

function download(url: string) {
    window.open(url);
}
</script>
<template>
    <div class="wallpaper-panel">
        <div
            v-for="(item, index) in state.wallpaperList"
            :key="index"
            class="wallpaper"
        >
            <div class="icon-panel">
                <base-icon
                    v-download="item"
                    :size="40"
                    iconName="icon-xiazai"
                ></base-icon>
                <!-- <base-icon
                    @click="play(`video-${index}`)"
                    :size="40"
                    iconName="icon-zantingbofang"
                ></base-icon> -->
            </div>
            <img class="video" v-lazy="item" alt="">
            <!-- <video :id="`video-${index}`" class="video" v-lazy="item"></video> -->
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
    min-height: 100vh;
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
.icon-panel {
    position: absolute;
    inset: 0;
    opacity: 0;
    transition: all 0.5s ease;
    z-index: 2;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
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
    .icon-panel {
        opacity: 1;
    }
}
.wallpaper:hover::after {
    opacity: 1;
}
@media (max-width: 719px) {
    .wallpaper-panel{
        column-count: 1;
        width: 95%;
    }
}
</style>
