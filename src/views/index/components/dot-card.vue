<template>
  <div class="dot-card">
    <div class="card-body">
      <div class="dot-box">
        <span style="--i: 0; --x: 0; --y: 0">
          <i class="iconfont icon-a-biaoqianlabel"></i>
        </span>
        <span style="--i: 1; --x: 0; --y: 1">
          <i class="iconfont icon-a-biaoqianlabel"></i>
        </span>
        <span style="--i: 2; --x: 1; --y: 0">
          <i class="iconfont icon-a-biaoqianlabel"></i>
        </span>
        <span style="--i: 3; --x: -1; --y: 0">
          <i class="iconfont icon-a-biaoqianlabel"></i>
        </span>
        <span style="--i: 4; --x: 0; --y: -1">
          <i class="iconfont icon-a-biaoqianlabel"></i>
        </span>
        <span style="--i: 5; --x: -1; --y: -1">
          <i class="iconfont icon-a-biaoqianlabel"></i>
        </span>
        <span style="--i: 6; --x: 1; --y: 1">
          <i class="iconfont icon-a-biaoqianlabel"></i>
        </span>
        <span style="--i: 7; --x: 1; --y: -1">
          <i class="iconfont icon-a-biaoqianlabel"></i>
        </span>
        <span style="--i: 8; --x: -1; --y: 1">
          <i class="iconfont icon-a-biaoqianlabel"></i>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { controller } from "../js/index";

onMounted(() => {
  // Dot Menu
  const dotScene = new ScrollMagic.Scene({
    offset: 0, // start scene after scrolling for 100px
    triggerElement: ".dot-box",
  });
  dotScene.setClassToggle(".dot-box", "active");

  // 控制器添加场景
  controller.addScene([dotScene]);

  const dotBox:any = document.querySelector(".dot-box");
  dotBox.addEventListener("mouseenter", function (e:Event) {
    e.stopPropagation();
    // 给dotBox添加或移除active样式
    dotBox.classList.toggle("active");
  });

  document.addEventListener("mouseleave", () => {
    dotBox.classList.toggle("active");
  });
  
});
</script>

<style scoped>
.dot-card {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
}

.dot-box {
  width: 70px;
  height: 70px;
  margin: 0 auto;
  background-color: #212532;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.3s;
  transition-delay: 0.9s;
}
.dot-box.active {
  width: 200px;
  height: 200px;
  border-radius: 10px;
  transition-delay: 0s;
}

.dot-box span {
  width: 10px;
  height: 10px;
  background-color: #fff;
  display: block;
  border-radius: 50%;
  position: absolute;
  transform: translate(calc(12px * var(--x)), calc(12px * var(--y)));
  transition: 0.3s ease;
  transition-delay: calc(0.1s * var(--i));
  display: flex;
  align-items: center;
  justify-content: center;
}
.dot-box.active span {
  width: 45px;
  height: 45px;
  background-color: #333849;
  transform: translate(calc(60px * var(--x)), calc(60px * var(--y)));
}

[class*="icon-a-"] {
  color: #fff;
  opacity: 0;
  font-size: 0;
  transition: opacity 0.3s;
  transition-delay: 0s;
}
.dot-box.active [class*="icon-a-"] {
  font-size: 24px;
  opacity: 1;
  /* transition-delay: .6s; */
  transition-delay: calc(0.1s * var(--i));
}
.dot-box.active span:hover [class*="icon-a-"] {
  color: #6c63ff;
  filter: drop-shadow(0 0 2px #6c63ff);
}
</style>
