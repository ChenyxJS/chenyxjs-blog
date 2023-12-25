<template>
    <div class="card">
        <button @click="changeCard">
            <i
                class="iconfont icon-weibiaoti--"
                style="color: #409eff; cursor: pointer"
            ></i>
        </button>
        <div class="progress">
            <img
                :class="['cover', state.isPlaying ? 'cover-play' : '']"
                src="@/assets/images/Jay.jpg"
            />
            <el-progress
                type="circle"
                :percentage="state.progress"
                :show-text="false"
            >
            </el-progress>
        </div>
        <div class="Name" style="padding: 0">
            <p>手写的从前 —— Jay</p>
        </div>
        <div class="socialbar flex-column flex-cc">
            <div class="controls-progress flex flex-cc">
                <span>{{ state.currentTime }}</span>
                <el-progress
                    style="width: 150px"
                    :percentage="state.progress"
                    :show-text="false"
                />
                <span>{{ state.duration }}</span>
            </div>

            <div class="controls">
                <i class="iconfont icon-shangyishou_huaban"></i>
                <i
                    @click="openClick"
                    style="font-size: 24px"
                    class="iconfont"
                    :class="[
                        'iconfont',
                        state.isPlaying ? 'icon-zanting' : 'icon-zantingbofang',
                    ]"
                ></i>
                <i class="iconfont icon-xiayishou_huaban"></i>
            </div>
            <audio
                style="height: 35px; display: none"
                src="https://file.chenyx.site/music/jay.flac"
                controls
                loop
                ref="singeBox"
                @canplay="getDuration"
                @timeupdate="durationchange"
            ></audio>
        </div>
    </div>
</template>

<script setup lang="ts">
import { handleFormatDuration } from "@/utils";
import { reactive, ref } from "vue";

const emit = defineEmits(["icon-click"]);

const singeBox: any = ref(null);
const state = reactive({
    musicList: [{ url: "" }],
    progress: 0,
    isPlaying: false,
    currentTime: "",
    duration: "",
});

function getDuration() {
    if (singeBox.value) {
        state.duration = handleFormatDuration(singeBox.value.duration);
        state.currentTime = handleFormatDuration(singeBox.value.currentTime);
    }
}
function durationchange() {
    state.duration = handleFormatDuration(singeBox.value.duration);
    state.currentTime = handleFormatDuration(singeBox.value.currentTime);
    state.progress = Number(
        ((singeBox.value.currentTime / singeBox.value.duration) * 100).toFixed(
            2
        )
    );
}
function openClick() {
    if (!state.isPlaying) {
        state.isPlaying = true;
        singeBox.value.play();
    } else {
        state.isPlaying = false;
        singeBox.value.pause();
    }
}
function changeCard() {
    emit("icon-click");
}
</script>

<style lang="scss" scoped>
.card {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 230px;
    // height: 280px;
    border-radius: 2em;
    padding: 10px;
    margin-top: 20px;
    box-shadow: 0 0 0 2px #1f1f23;
}
.progress {
    margin-top: 20px;
    position: relative;
    .cover {
        position: absolute;
        top: 8px;
        left: 8px;
        width: 100px;
        height: 100px;
        border-radius: 50%;
    }
    .cover-play {
        animation: rotate 15s linear infinite;
    }
    :deep(.el-progress-circle) {
        width: 116px !important;
        height: 116px !important;
    }
}
@keyframes rotate {
    0% {
        transform: rotate(0px);
    }
    100% {
        transform: rotate(360deg);
    }
}

.Name {
    color: white;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
        "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    padding: 15px;
    font-size: 20px;
    margin-top: 10px;
}

.socialbar {
    border-radius: 3em;
    width: 90%;
    padding: 5px 14px;
    color: white;
    display: flex;
    justify-content: space-around;
    background-color: #191919;
    box-shadow: 0 0 0 2px #1f1f23;
}
.socialbar .controls {
    width: 100%;
    margin-top: 5px;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.controls-progress {
    width: 100%;
    span:first-child {
        margin-right: 8px;
    }
    span:last-child {
        margin-left: 8px;
    }
}

button {
    color: #fff;
    border: none;
    background-color: transparent;
}
</style>
