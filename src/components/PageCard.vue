<!--
 * @Author: chenyx
 * @Date: 2023-04-15 00:50:47
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-04-16 17:14:39
 * @FilePath: /chenyxjs-blog/src/components/PageCard.vue
-->
<template>
  <div class="cards">
    <div class="card" id="c1"></div>
    <div class="card" id="c2"></div>
    <div class="card" id="c3">{{ title }}</div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: String,
  url:String
});
</script>

<style lang="scss" scoped>
.cards {
  display: grid;
  place-items: center;
  position: relative;

}
.card {
  width: 190px;
  height: 254px;
  background: rgba(211, 211, 211, 0.199);
  position: absolute;
  transition: 0.3s ease-in-out;
  cursor: pointer;
  box-shadow: 0px 0px 30px -10px rgba(0, 0, 0, 0.3);
}

#c1 {
  background-color: #fff;
  border-radius: 6px;

}

#c2 {
  background-color: #fff;
  border-radius: 6px;

}

#c3 {
  border-radius: 6px;
  position: relative;
  background-image: url('@/assets/images/book-bg.png');
  background-size: 100% 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
}

.cards:hover #c1 {
  transform: rotate(20deg);
}

.cards:hover #c2 {
  transform: rotate(10deg);
}

#c3::before,
#c3::after {
  position: absolute;
  content: "";
  width: 20%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  font-weight: bold;
  background-color: lightblue;
  transition: all 0.5s;
}

#c3::before {
  top: 0;
  right: 0;
  border-radius: 0 0 0 100%;
}

#c3::after {
  bottom: 0;
  left: 0;
  border-radius: 0 100% 0 0;
}

#c3:hover::before,
#c3:hover:after {
  width: 100%;
  height: 100%;
  transition: all 0.5s;
}

#c3:hover:after {
  content: "GO!";
}
</style>
