<!--
 * @Descripttion: 
 * @version: 
 * @Author: Chenyx
 * @Date: 2022-10-23 22:07:00
 * @LastEditors: Chenyx
 * @LastEditTime: 2022-10-24 02:11:17
-->
<template>
  <div class="article">
    <div class="article-content">
      <!-- <v-md-editor
        mode="preview"
        :default-show-toc="true"
        :toc-nav-position-right="true"
        v-model="article"
        height="100vh"
      ></v-md-editor> -->
      <v-md-preview :text="article"></v-md-preview>
    </div>
    <div class="article-nav">
      <span>111</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import textMD from "@/assets/md/test.md?raw";
export default defineComponent({
  name: "article",

  setup() {
    let article: string = textMD;
    return { article };
  },
});
</script>

<style lang="scss" scoped>
.article {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  padding-bottom: 30px;
  background-color: var(--bg-primary);
  display: flex;
  &-content {
    flex: 1;
    padding-bottom: 60px;
    height: 100vh;
    overflow: auto;
  }
  &-nav {
    min-width: 330px;
    padding: 10px;
  }
}
</style>
