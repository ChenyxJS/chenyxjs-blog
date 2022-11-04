<!--
 * @Descripttion: 
 * @version: 
 * @Author: Chenyx
 * @Date: 2022-10-12 22:48:04
 * @LastEditors: Chenyx
 * @LastEditTime: 2022-11-04 19:55:02
-->
<script setup lang="ts"></script>
 
<template>
  <router-view></router-view>
</template>

<style>


body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
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
  cursor: pointer;
}
::-webkit-scrollbar{
  width: 6px;
  /* background: var(--text-primary); */
}
::-webkit-scrollbar-thumb{
  border-radius: 3px;
  background-color: var(--text-second);
}
</style>
