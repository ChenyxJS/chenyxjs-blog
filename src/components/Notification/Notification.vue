<script setup lang="ts">
import { inject } from "vue";
import BaseIcon from "../BaseIcon.vue";

// type
// data
// hook
const noteHook: any = inject("Notice");
// method
</script>
<template>
    <ul class="notifications">
        <transition-group>
            <li
                v-for="note in noteHook.notifications"
                v-fade="{ translateY: 20, duration: 500 }"
                :key="note.id"
                class="item"
            >
                <button class="close" @click="noteHook.close(note)">
                    <BaseIcon iconName="icon-guanbi1"></BaseIcon>
                </button>
                <span>{{ note.text }}</span>
            </li>
        </transition-group>
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
    .item {
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
    transition: all ease-in-out 0.5s;
}
.v-leave-to {
    opacity: 0;
    transform: translateX(280px);
}
</style>
