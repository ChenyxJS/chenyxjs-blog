<template>
  <div class="drawer-card ">
    <div class="card-body">
      <ul>
        <li style="--i: 5">
          <a href="#">html</a>
        </li>
        <li style="--i: 4">
          <a href="#">css</a>
        </li>
        <li style="--i: 3">
          <a href="#">vue</a>
        </li>
        <li style="--i: 2">
          <a href="#">react</a>
        </li>
        <li style="--i: 1">
          <a href="#">javascript</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { controller } from "../js/index";

onMounted(()=>{
      // Drawer
      const bannerDrawerScene = new ScrollMagic.Scene({
      offset: 0, // start scene after scrolling for 100px
      triggerElement: '.drawer-card'
    })
    bannerDrawerScene.setTween('.drawer-card', { backgroundColor: '#8c86fe' });
    // 控制器添加场景
  controller.addScene([bannerDrawerScene]);
})
</script>

<style scoped>
.drawer-card {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 450px;
}

.drawer-card ul {
  position: relative;
  transform: skewY(-15deg);
}

.drawer-card li {
  width: 200px;
  padding: 15px;
  background-color: #3e3f46;
  position: relative;
  z-index: var(--i);
  list-style-type: none;
  transition: 0.5s;
  cursor: pointer;
}
.drawer-card li:hover {
  background-color: #6c63ff;
  transform: translateX(-50px);
}
.drawer-card li:hover::before {
  background-color: #5c56df;
}
.drawer-card li:hover::after {
  background-color: #7972fb;
}

.drawer-card li::before {
  content: " ";
  position: absolute;
  top: 0;
  left: -40px;
  width: 40px;
  height: 100%;
  background-color: #2e3133;
  transform-origin: right;
  transform: skewY(45deg);
  transition: 0.5s;
}
.drawer-card li::after {
  content: "摸我，有惊喜！";
  position: absolute;
  top: -40px;
  left: 0;
  width: 100%;
  height: 40px;
  padding: 0 20px;
  line-height: 40px;
  box-sizing: border-box;
  background-color: #3d3d3d;
  transform-origin: bottom;
  transform: skewX(45deg);
  transition: 0.5s;
  color: #fff;
  letter-spacing: 1px;
}
.drawer-card li:first-child:hover:after {
  content: "继续，下一个！";
}
.drawer-card li:nth-child(2)::after {
  content: "一";
}
.drawer-card li:nth-child(3)::after {
  content: "键";
}
.drawer-card li:nth-child(4)::after {
  content: "三";
}
.drawer-card li:last-child::after {
  content: "连";
  box-shadow: -100px 100px 20px rgba(0, 0, 0, 0.1);
}

.drawer-card a {
  color: #999;
  text-decoration: none;
  display: block;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: 0.5s;
}

.drawer-card li:hover a {
  color: #fff;
}
</style>
