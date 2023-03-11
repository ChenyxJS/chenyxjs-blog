<!--
 * @Descripttion: 
 * @version: 
 * @Author: Chenyx
 * @Date: 2022-10-15 20:40:46
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-03-10 16:25:55
-->
<template>
  <div class="days-challenge-container">
    <div class="box">
      <div class="top">
        <div class="one"></div>
        <div class="zero"></div>
        <div class="zero"></div>
      </div>
      <div class="center">DAYS</div>
      <div class="bottom">CSS CHALLENGE</div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.box {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 500px;
  height: 500px;
  border-radius: 8px;
  background: linear-gradient(to top right, #443aa0, #4ec5ca);
  color: #fff;
  font-family: "Courier New", Courier, monospace;
}
.box .top {
  display: flex;
  margin-bottom: 10px;
}
.one {
  width: 30px;
  height: 120px;
  background: #fff;
  position: relative;
  border-radius: 4px;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
  z-index: 2;
}
.one::before {
  content: "";
  position: absolute;
  top: 0;
  left: -20px;
  width: 25px;
  height: 50px;
  border-radius: 4px;
  background: #fff;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
  transform: rotate(45deg);
}
.one::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 30px;
  height: 120px;
  background: #fff;
  border-radius: 4px;
  box-shadow: -1px 1px 2px rgba(0, 0, 0, 0.1);
}

.zero {
  width: 60px;
  height: 60px;
  border: 30px solid #fff;
  border-radius: 50%;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
  margin-left: -15px;
}
.zero:nth-of-type(2) {
  z-index: 1;
}

.box .center {
  text-align: center;
  font-size: 96px;
  font-weight: 700;
  line-height: 60px;
}
.box .bottom {
  font-size: 26px;
  font-weight: 600;
  letter-spacing: 2px;
}
</style>
