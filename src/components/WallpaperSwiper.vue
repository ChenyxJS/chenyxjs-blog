<script setup lang="ts">
import { computed, reactive } from "vue";
import BaseIcon from "./BaseIcon.vue";
import { ElMessage } from "element-plus";

const state = reactive({
    wallpaperList: [
        "http://file.chenyx.site/wallpaper/2_15488489005292.mp4",
        "http://file.chenyx.site/wallpaper/2_15488489005286.mp4",
        "http://file.chenyx.site/wallpaper/2_15488489005274.mp4",
        "http://file.chenyx.site/wallpaper/2_15488489005196.mp4",
    ],
    nowWallpaperIndex: 0,
});

const translateX = computed(() => {
    return `-${state.nowWallpaperIndex}00%`;
});

function next() {
    if (state.nowWallpaperIndex === state.wallpaperList.length - 1) {
        ElMessage.warning("已经是最后一张了");
        return;
    }
    state.nowWallpaperIndex++;
}
function pre() {
    if (state.nowWallpaperIndex === 0) {
        ElMessage.warning("已经是第一张了");
        return;
    }
    state.nowWallpaperIndex--;
}
</script>
<template>
    <div class="container flex flex-column flex-cc">
        <div class="wallpaper-swiper flex">
            <div class="button">
                <base-icon
                    @click="pre"
                    class="pre-button"
                    icon-name="icon-xiangzuo"
                    color="#fff"
                    size="2vw"
                ></base-icon>
            </div>
            <div class="swiper-container">
                <img class="pc-img" src="@/assets/images/pc.png" />
                <div class="video-warpper">
                    <video
                        id="video"
                        class="video"
                        autoplay
                        muted
                        loop
                        v-for="(item, index) in state.wallpaperList"
                        :key="index"
                        v-lazy="item"
                    ></video>
                </div>
            </div>
            <div class="button">
                <base-icon
                    @click="next"
                    class="next-button"
                    icon-name="icon-xiangyou"
                    color="#fff"
                    size="2vw"
                ></base-icon>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.container {
    width: 100%;
}
.wallpaper-swiper {
    width: 100%;
    align-items: center;
    justify-content: space-around;
}
.swiper-container {
    position: relative;
    width: 70%;
    display: flex;
    .video-warpper {
        position: absolute;
        top: 11.5%;
        left: 11.4%;
        width: 78.5%;
        height: 76.5%;
        overflow: hidden;
        display: flex;
    }
    .video {
        transform: translateX(v-bind(translateX));
        width: 100%;
        height: 100%;
        object-fit: fill;
        animation: fade 0.6s ease-in;
        transition: all 0.6s ease;
    }
}
@keyframes fade {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
@keyframes fade-right {
    0% {
        left: 100%;
    }
    100% {
        left: 11.4%;
    }
}
@keyframes fade-left {
    0% {
        left: -100%;
        opacity: 0;
    }
    100% {
        left: 11.4%;
        opacity: 1;
    }
}
.pc-img {
    width: 100%;
}
.button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4vw;
    height: 4vw;
    border-radius: 50%;
    background-color: rgba(#8b949e, 0.3);
    transition: all 0.5s ease;
}
.button:hover {
    transform: scale(1.1);
}
</style>
