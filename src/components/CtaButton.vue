<!--
 * @Author: chenyx
 * @Date: 2023-04-14 20:27:05
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-06-06 15:20:49
 * @FilePath: /chenyxjs-blog/src/components/CtaButton.vue
-->

<script setup lang="ts">
import BaseIcon from "./BaseIcon.vue";
const props = defineProps({
    text: {
        type: String,
        default: "Button",
    },
});
</script>
<template>
    <button class="cta">
        <span>{{ text }}</span>
        <base-icon
            class="svg"
            icon-name="icon-a-xiayiyeqianjin"
            color="#234567"
            :size="20"
        ></base-icon>
    </button>
</template>
<style lang="scss" scoped>
.cta {
    position: relative;
    margin: auto;
    padding: 12px 18px;
    transition: all 0.2s ease;
    border: none;
    background: none;
}

.cta:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    border-radius: 50px;
    background: #b1dae7;
    width: 45px;
    height: 45px;
    transition: all 0.3s ease;
}

.cta span {
    position: relative;
    font-family: "Ubuntu", sans-serif;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 0.05em;
    color: #234567;
}

.cta .svg {
    position: relative;
    top: 0;
    margin-left: 10px;
    fill: none;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke: #234567;
    stroke-width: 2;
    transform: translateX(-5px);
    transition: all 0.3s ease;
}

.cta:hover:before {
    width: 100%;
    background: #b1dae7;
}

.cta:hover .svg {
    transform: translateX(0);
}

.cta:active {
    transform: scale(0.95);
}
</style>
