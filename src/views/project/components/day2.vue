<!--
 * @Author: chenyx
 * @Date: 2023-03-10 15:58:05
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-03-10 16:34:31
 * @FilePath: /chenyxjs-blog/src/views/project/components/day2.vue
-->
<template>
  <div class="days-challenge-container">
    <div class="box">
      <div id="bar-box" class="bar-box">
        <div id="bar1" class="bar"></div>
        <div id="bar2" class="bar"></div>
        <div id="bar3" class="bar"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

onMounted(() => {
  // 获取box
  var box: HTMLElement =
    document.getElementById("bar-box") || new HTMLElement();
  // 获取bar
  var bar1: HTMLElement = document.getElementById("bar1") || new HTMLElement();
  var bar2: HTMLElement = document.getElementById("bar2") || new HTMLElement();
  var bar3: HTMLElement = document.getElementById("bar3") || new HTMLElement();
  main(box, bar1, bar2, bar3);
});

function main(
  box: HTMLElement,
  bar1: HTMLElement,
  bar2: HTMLElement,
  bar3: HTMLElement
) {
  box.addEventListener("click", () => {
    if (bar1.classList.contains("bar1-active")) {
      bar1.classList.remove("bar1-active");
      bar2.classList.remove("bar2-active");
      bar3.classList.remove("bar3-active");
      bar1.classList.add("bar1-reverse");
      bar2.classList.add("bar2-reverse");
      bar3.classList.add("bar3-reverse");
    } else {
      bar1.classList.add("bar1-active");
      bar2.classList.add("bar2-active");
      bar3.classList.add("bar3-active");
      bar1.classList.remove("bar1-reverse");
      bar2.classList.remove("bar2-reverse");
      bar3.classList.remove("bar3-reverse");
    }
  });
}
</script>

<style scoped>
.box {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 500px;
  height: 500px;
  border-radius: 8px;
  background: #3faf82;
}
.bar {
  width: 80px;
  height: 8px;
  background: #fff;
  margin-bottom: 14px;
  border-radius: 8px;
  box-shadow: 0 4px 2px rgba(0, 0, 0, 0.2);
}
.bar1-reverse {
  animation: change1-rev 1s ease-in-out forwards;
}
.bar2-reverse {
  animation: change2-rev 1s ease-in-out forwards;
}
.bar3-reverse {
  animation: change3-rev 1s ease-in-out forwards;
}

.bar1-active {
  animation: change1 1s ease-in-out forwards;
}
.bar2-active {
  animation: change2 1s ease-in-out forwards;
}
.bar3-active {
  animation: change3 1s ease-in-out forwards;
}

@keyframes change1 {
  0% {
  }
  50% {
    transform: translateY(22px) rotate(0deg);
  }
  100% {
    transform: translateY(22px) rotate(-45deg);
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
    transform: translateY(-22px) rotate(0deg);
  }
  100% {
    transform: translateY(-22px) rotate(45deg);
  }
}

@keyframes change1-rev {
  0% {
    transform: translateY(22px) rotate(-45deg);
  }
  50% {
    transform: translateY(22px) rotate(0deg);
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
    transform: translateY(-22px) rotate(45deg);
  }
  50% {
    transform: translateY(-22px) rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
</style>
