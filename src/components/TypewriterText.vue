<!--
 * @Author: chenyx
 * @Date: 2023-04-14 17:11:13
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-04-14 20:15:07
 * @FilePath: /chenyxjs-blog/src/components/TypewriterText.vue
-->
<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  text: {
    type: String,
    default: "",
  },
  color:{
    type: String,
    default: "#fff",
  }
});

const strLen = computed(()=>{
    return props.text.length+1
})
const time = computed(()=>{
    return (props.text.length+1) * 0.2 + 's'
})
</script>
<template>
  <div class="typewriter-text" :style="{color: color}">
    {{ text }}r
  </div>
</template>
<style lang="scss" scoped>
.typewriter-text{
    display: inline;
    overflow: hidden;
    position: relative;
    white-space: nowrap;
    font-family: monospace;
    &::before,
    &::after{
        content: '';
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        background-color: #1f242d;
        animation: typewriter v-bind(time) steps(v-bind(strLen)) forwards infinite; 
    }
    &::after{
        width: 5px;
        border-radius: 1em;
        background-color: #fff;
        animation: typewriter v-bind(time) steps(v-bind(strLen)) forwards infinite ,flicker .8s ease-out forwards infinite; 
    }
}

@keyframes typewriter{
    to {
        left: 100%;
    }
}

@keyframes flicker{
    to {
        opacity: 0.2;
    }
}

</style>
