<template>
  <div class="cascade">
    <div class="cascade-inner">
      <img src="../../../assets/images/phone-bg.jpg" class="img" alt="" />
      <img src="../../../assets/images/phone-bg.jpg" class="img" alt="" />
      <img src="../../../assets/images/phone-bg.jpg" class="img" alt="" />
      <img src="../../../assets/images/phone-bg.jpg" class="img" alt="" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { controller } from "../js/index";
onMounted(() => {
  // Cascade
  const cascadeScene = new ScrollMagic.Scene({
    offset: 0, // start scene after scrolling for 100px
    triggerElement: ".cascade",
  });
  cascadeScene.setClassToggle(".cascade", "cascade-active");
  // 控制器添加场景
  controller.addScene([cascadeScene]);
});
</script>

<style lang="scss" scoped>
/* 层叠 */
.cascade {
  width: 280px;
  height: 550px;
  padding: 50px;
  position: relative;
  margin: 0 auto;
}
.cascade-inner {
  width: 280px;
  height: 498px;
  background: rgba(0, 0, 0, 1);
  position: absolute;
  transition: 0.5s;
  /*效果*/
  transform: rotate(-30deg) skew(25deg) scale(0.8);
}
.cascade-inner img {
  width: 280px;
  height: 498px;
  transition: 0.5s;
  position: absolute;
}

.cascade-active .cascade-inner img:nth-child(4) {
  transform: translate(80px, -80px);
  opacity: 1;
}
.cascade-active .cascade-inner img:nth-child(3) {
  transform: translate(60px, -60px);
  opacity: 0.8;
}
.cascade-active .cascade-inner img:nth-child(2) {
  transform: translate(40px, -40px);
  opacity: 0.6;
}
.cascade-active .cascade-inner img:nth-child(1) {
  transform: translate(20px, -20px);
  opacity: 0.4;
}
.cascade-active .cascade-inner {
  background: rgba(0, 0, 0, 0.1);
  box-shadow: 0 0 45px #aee5ed;
}
@media (max-width: 768px) {
  .cascade {
    width: 100%;
    .cascade-inner {
      width: 140px;
      height: 250px;
      top: calc(50% - 70px);
      left: calc(50% - 125px);
      img {
        width: 140px;
        height: 250px;
      }
    }
  }
}
</style>
