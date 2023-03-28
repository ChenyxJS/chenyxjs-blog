<!--
 * @Author: chenyx
 * @Date: 2023-03-23 17:54:43
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-03-28 21:07:59
 * @FilePath: /chenyxjs-blog/src/components/MenuBtn.vue
-->
<template>
  <div id="bar-box" class="bar-box">
    <div id="bar1" class="bar"></div>
    <div id="bar2" class="bar"></div>
    <div id="bar3" class="bar"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, watch } from "vue";

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
});

// 获取bar
let bar1: HTMLElement | null;
let bar2: HTMLElement | null;
let bar3: HTMLElement | null;

watch(
  () => props.isOpen,
  (newVal, oldVal) => {
    if (newVal) {
      if (bar1 && bar2 && bar3) {
        bar1.classList.remove("bar1-active");
        bar2.classList.remove("bar2-active");
        bar3.classList.remove("bar3-active");
        bar1.classList.add("bar1-reverse");
        bar2.classList.add("bar2-reverse");
        bar3.classList.add("bar3-reverse");
      }
    } else {
      if (bar1 && bar2 && bar3) {
        bar1.classList.add("bar1-active");
        bar2.classList.add("bar2-active");
        bar3.classList.add("bar3-active");
        bar1.classList.remove("bar1-reverse");
        bar2.classList.remove("bar2-reverse");
        bar3.classList.remove("bar3-reverse");
      }
    }
  }
);

onMounted(() => {
  // 获取bar
  bar1 = document.getElementById("bar1");
  bar2 = document.getElementById("bar2");
  bar3 = document.getElementById("bar3");
});
</script>

<style scoped>
.bar {
  width: 36px;
  height: 4px;
  background: var(--text-second);
  margin-bottom: 4px;
  border-radius: 4px;
  box-shadow: 0 4px 2px rgba(0, 0, 0, 0.2);
}
.bar1-reverse {
  animation: change1-rev 0.6s ease-in-out forwards;
}
.bar2-reverse {
  animation: change2-rev 0.6s ease-in-out forwards;
}
.bar3-reverse {
  animation: change3-rev 0.6s ease-in-out forwards;
}

.bar1-active {
  animation: change1 0.6s ease-in-out forwards;
}
.bar2-active {
  animation: change2 0.6s ease-in-out forwards;
}
.bar3-active {
  animation: change3 0.6s ease-in-out forwards;
}

@keyframes change1 {
  0% {
  }
  50% {
    transform: translateY(8px) rotate(0deg);
  }
  100% {
    transform: translateY(8px) rotate(-45deg);
  }
}

@keyframes change2 {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(0);
    opacity: 0;
  }
}

@keyframes change3 {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: translateY(-8px) rotate(0deg);
  }
  100% {
    transform: translateY(-8px) rotate(45deg);
  }
}

@keyframes change1-rev {
  0% {
    transform: translateY(8px) rotate(-45deg);
  }
  50% {
    transform: translateY(8px) rotate(0deg);
  }
  100% {
  }
}

@keyframes change2-rev {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes change3-rev {
  0% {
    transform: translateY(-8px) rotate(45deg);
  }
  50% {
    transform: translateY(-8px) rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
</style>
