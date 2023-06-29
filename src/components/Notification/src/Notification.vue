<script setup lang="ts">
import { onMounted, ref } from "vue";
import BaseIcon from "@/components/BaseIcon.vue";
import { notificationEmits, NotificationProps } from "./notification";
import { useEventListener, useTimeoutFn } from "@vueuse/core";
import { EVENT_CODE } from "@/utils/globalEnum";

// data
const props = defineProps<NotificationProps>();
defineEmits(notificationEmits);

const visible = ref(false);
let timer: (() => void) | undefined = undefined;

onMounted(() => {
    startTimer();
    visible.value = true;
});

useEventListener(document, "keydown", onKeydown);

// method
function startTimer() {
    console.log(props);
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
    if (props.onClose !== undefined) props.onClose();
}

function onKeydown({ code }: KeyboardEvent) {
    if (code === EVENT_CODE.delete || code === EVENT_CODE.backspace) {
        clearTimer(); // press delete/backspace clear timer
    } else if (code === EVENT_CODE.esc) {
        // press esc to close the notification
        if (visible.value) {
            close();
        }
    } else {
        startTimer(); // resume timer
    }
}

defineExpose({
    visible,
    /** @description close notification */
    close,
});
</script>
<template>
    <ul class="notifications" :style="{ top: props.offset + 'px' }">
        <transition @before-leave="beforeClose()">
            <li v-show="visible" class="notification">
                <button class="close" @click="close()">
                    <BaseIcon iconName="icon-guanbi1"></BaseIcon>
                </button>
                <span>{{ props.message }}</span>
            </li>
        </transition>
    </ul>
</template>
<style lang="scss" scoped>
.notifications {
    position: fixed;
    top: 15px;
    right: 15px;
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 1rem;
    width: 260px;
    z-index: 9999;
    transition: all 0.5s ease-in-out;
    .notification {
        position: relative;
        background-color: hsla(0, 0%, 100%, 0.1);
        padding: 20px;
        border: var(--border);
        border-radius: 10px;
        color: hsla(0, 0%, 100%, 0.569);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);

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
    .item:hover {
        color: #fff;
    }
}
.v-leave-active {
    transition: all ease-out 0.5s;
}
.v-enter-active {
    transition: all 0.5s ease-in;
}
.v-enter-from,
.v-leave-to {
    transform: translateX(280px);
    opacity: 0;
}
</style>
