<!--
 * @Descripttion: 
 * @version: 
 * @Author: Chenyx
 * @Date: 2022-10-12 22:48:04
 * @LastEditors: Chenyx
 * @LastEditTime: 2022-10-16 21:55:10
-->
<script setup lang="ts"></script>
 
<template>
  <router-view></router-view>
</template>

<style>
* {
  font-size: 14px;
  box-sizing: border-box;
}

body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  color: var(--text-primary);
  background-color: var(--bg-primary);
}
ul {
  list-style-type: none;
  padding-inline-start: 0px;
}
li {
  display: flex;
  align-items: center;
}
a {
  text-decoration: none;
}
::-webkit-scrollbar{
  width: 6px;
  background: var(--text-primary);
}
::-webkit-scrollbar-thumb{
  border-radius: 3px;
  background-color: var(--text-second);
}
</style>
