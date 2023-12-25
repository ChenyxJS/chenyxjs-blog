<script setup lang="ts">
import { onMounted, ref } from "vue";
import BaseIcon from "@/components/BaseIcon.vue";
import { notificationEmits, NotificationProps } from "./notification";
import { useTimeoutFn } from "@vueuse/core";

// data
const props = defineProps<NotificationProps>();
defineEmits(notificationEmits);

const visible = ref(false);
let timer: (() => void) | undefined = undefined;

onMounted(() => {
    startTimer();
    visible.value = true;
});

// method
function startTimer() {
    if (props.autoClose && props.duration! > 0) {
        ({ stop: timer } = useTimeoutFn(() => {
            if (visible.value) close();
        }, props.duration!));
    }
}

function clearTimer() {
    timer?.();
}

function close() {
    visible.value = false;
}
function beforeClose() {
    if (props.onClose !== undefined) {
        clearTimer();
        props.onClose();
    }
}

defineExpose({
    visible,
    close,
});
</script>
<template>
    <transition @before-leave="beforeClose()">
        <div
            v-show="visible"
            class="notification"
            :style="{ top: props.offset + 'px' }"
        >
            <button class="close" @click="close()">
                <BaseIcon iconName="icon-guanbi1"></BaseIcon>
            </button>
            <span>{{ props.message }}</span>
        </div>
    </transition>
</template>
<style lang="scss" scoped>
.notification {
    position: fixed;
    top: 15px;
    right: 15px;
    background-color: hsla(0, 0%, 13%, 0.8);
    padding: 20px;
    border: var(--border);
    border-radius: 10px;
    color: hsla(0, 0%, 100%, 0.569);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    transition: all 0.5s ease-in-out;
    z-index: 9999;

    .close {
        position: absolute;
        left: -8px;
        top: -8px;
        width: 18px;
        height: 18px;
        border-radius: 50%;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
    }
    .close:hover {
        transform: scale(1.1);
    }
    .close:active {
        transform: scale(0.9);
    }
}
.notification:hover {
    color: #fff;
}
.v-leave-active {
    transition: all ease 0.5s;
}
.v-enter-active {
    transition: all 0.5s ease;
}
.v-enter-from,
.v-leave-to {
    transform: translateX(280px);
    opacity: 0;
}
</style>
