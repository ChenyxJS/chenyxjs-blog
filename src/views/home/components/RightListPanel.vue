<!--
 * @Author: chenyx
 * @Date: 2023-03-23 17:02:55
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-03-23 17:08:09
 * @FilePath: /chenyxjs-blog/src/views/home/components/RightListPanel.vue
-->
<template>
  <div class="asider-articles">
    <div class="asider-article-card" v-for="item in dataList" key="item.id">
      <h4>
        <a class="asider-link" href="">{{ item.title }}</a>
      </h4>
      <section>{{ item.content }}</section>
      <div class="asider-article-card_options">
        <p class="iconfont icon-a-chakaneye" style="color: #56a6ff">
          <span>111</span>
        </p>
        <p class="iconfont icon-dianzan" style="color: #e6a23c">
          <span>111</span>
        </p>
        <p class="iconfont icon-a-pinglunliaotian" style="color: #56a6ff">
          <span>111</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
const data = [
  {
    id: 102301,
    time: 9990023100,
    type: 1,
    title: "这是一个title",
    des: "这是一个描述",
    content: "这是一个内容",
  },
  {
    id: 100121,
    time: 6890099800,
    type: 2,
    title: "这是一个title",
    des: "这是一个描述",
    content: "这是一个内容",
  },
  {
    id: 100121,
    time: 6890099800,
    type: 2,
    title: "这是一个title",
    des: "这是一个描述",
    content:
      "这是一个内容,这是一个很长很长的内容，还有很多字没有打出来，后面还有一千万个字，懒得全部打出来了",
  },
  {
    id: 101231,
    time: 6890099800,
    type: 2,
    title: "这是一个title",
    des: "这是一个描述",
    content: "这是一个内容",
  },
  {
    id: 10221,
    time: 6890099800,
    type: 2,
    title: "这是一个title",
    des: "这是一个描述",
    content: "这是一个内容",
  },
  {
    id: 1009,
    time: 6890099800,
    type: 2,
    title: "这是一个title",
    des: "这是一个描述",
    content: "这是一个内容",
  },
];
const dataList = reactive(data);
</script>

<style lang="scss" scoped> 
.asider-articles {
  width: 300px;
  min-width: 300px;
  height: calc(100vh - 60px);
  overflow: hidden auto;
  .asider-article-card {
    width: 100%;
    border-bottom: var(--border);
    margin-right: 30px;
    padding-bottom: 16px;
    .asider-link {
      color: #fff;
    }
    section {
      padding-bottom: 20px;
      color: var(--text-second);
      font-size: 14px;
    }
    .asider-article-card_options {
      p {
        display: inline-block;
        font-size: 14px;
        letter-spacing: 2px;
        border: var(--border);
        margin-right: 12px;
        padding: 4px 6px;
        border-radius: 6px;
        cursor: pointer;
        span {
          color: var(--text-primary);
          font-weight: 600;
        }
      }

      p:hover {
        transition: border-color 0.3s;
        border-color: var(--text-link);
      }
    }
  }
}
</style>
