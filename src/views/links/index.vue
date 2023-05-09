<!--
 * @Descripttion: 
 * @version: 
 * @Author: Chenyx
 * @Date: 2022-10-15 20:40:46
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-05-09 21:10:19
-->
<template>
  <div class="links flex flex-column flex-sc">
    <div
      v-for="section in state.links"
      :key="section.classes"
      class="link-section"
    >
      <h2>{{ section.classes }}</h2>
      <div class="link-group">
        <div
          v-for="item in section.list"
          :key="item.sitename"
          class="link-item"
        >
          <div class="content">
            <a :href="item.linkUrl" target="_blank" rel="noopener noreferrer"
              ><img :src="item.imageUrl" /><span class="sitename">{{
                item.sitename
              }}</span>
              <div class="desc">{{ item.desc }}</div></a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";

const state = reactive({
  links: [
    {
      classes: "UI/UX",
      list: [
        {
          linkUrl: "https://dribbble.com/",
          imageUrl:
            "https://i-1.okemu.com/2021/10/15/8e0e92de-c59d-4cdc-880a-bdc3ddaafb0b.png",
          sitename: "dribbble",
          desc: "顶级设计网站",
        },
        {
          linkUrl: "https://undraw.co/illustrations",
          imageUrl: "https://undraw.co/favicon.ico",
          sitename: "unDraw",
          desc: "插画设计",
        },
        {
          linkUrl: "https://lottiefiles.com/",
          imageUrl: "https://static9.lottiefiles.com/images/logo/icon.svg",
          sitename: "lottiefiles",
          desc: "Lottie优秀动画库",
        },
        {
          linkUrl: "https://fff.cmiscm.com/",
          imageUrl: "https://fff.cmiscm.com/favicon.ico",
          sitename: "fff.cmiscm",
          desc: "非常有趣的UX动效",
        },
        {
          linkUrl: "https://sketchfab.com/feed",
          imageUrl:
            "https://static.sketchfab.com/static/builds/web/dist/static/assets/images/favicon/e59d7f2ff579bbf9d20771b3d4d8c6a7-v2.png",
          sitename: "sketchfab",
          desc: "3d模型",
        },
        {
          linkUrl: "https://www.materialpalette.com/orange/deep-orange",
          imageUrl:
            "https://www.materialpalette.com/assets/favicon-0f3eb1b9f6d525e848b1dca6db1cabd2a3e9e843749cb9ad72222b80ab9fdf19.ico",
          sitename: "sketchfab",
          desc: "配色方案",
        },
      ],
    },
    {
      classes: "技术文档",
      list: [
        {
          linkUrl:
            "http://fe-docs.mayuxian.cn/",
          imageUrl: "http://fe-docs.mayuxian.cn//icons/logo.jpeg",
          sitename: "前端技术文档",
          desc: "约定规范、项目模板、提供FAQ等，便于项目快速启动，团队共同协作。",
        },
      ],
    },
    {
      classes: "站在巨人的肩膀上看世界",
      list: [
        {
          linkUrl: "https://muyiy.cn/",
          imageUrl: "https://muyiy.cn/favicon.ico",
          sitename: "木易杨",
          desc: "高级前端进阶之路",
        },
        {
          linkUrl: "https://shanyue.tech/",
          imageUrl: "https://shanyue.tech/favicon.ico",
          sitename: "山月行",
          desc: "山月的随笔",
        },
        {
          linkUrl: "https://q.shanyue.tech/",
          imageUrl: "https://q.shanyue.tech/favicon.ico",
          sitename: "山月行",
          desc: "山月的全栈进阶之路",
        },
        {
          linkUrl: "https://blog.touchczy.top/",
          imageUrl: "https://blog.touchczy.top/favicon.ico",
          sitename: "WindrunnerMax",
          desc: "前端小白的学习历程",
        },
      ],
    },
  ],
});
</script>

<style scoped>
img {
  overflow-clip-margin: content-box;
  overflow: clip;
}
.links {
  width: 100%;
  height: 100%;
  overflow: scroll;
  overflow-x: hidden;
  background: #1f242d;
}
.link-section {
  width: 60%;
  max-width: 745px;
  margin: 0 auto;
}

.link-section h2 {
  font-weight: 400;
  font-size: 18px;
  border-left: 3px solid #74b3eb;
  padding-left: 10px;
  margin-left: 5px;
  margin-top: 50px;
}
.link-group {
  width: 100%;
  list-style: none;
  margin-top: 10px;
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: repeat(3, 33.33%);
}
.link-item {
  margin: 4px;
  cursor: pointer;
}
.link-item .content {
  border: 1px solid #3c4a5f;
  border-radius: 10px;
  padding: 13px 30px 13px 20px;
  overflow: hidden;
  transition: all ease 0.3s;
  -webkit-transition: all ease 0.3s;
  -moz-transition: all ease 0.3s;
  -o-transition: all ease 0.3s;
  -ms-transition: all ease 0.3s;
}
.link-item .content:hover {
  border: 1px solid transparent;
  box-shadow: 0 2px 14px 0 rgba(0, 0, 0, 0.6);
  transform: translateY(-3px);
  -webkit-transform: translate(0px, -3px);
  -moz-transform: translate(0px, -3px);
  -o-transform: translate(0px, -3px);
  -ms-transform: translate(0px, -3px);
}
.link-item .content a {
  text-decoration: none;
}
.link-item .content a img {
  padding: 2px;
  border-radius: 100%;
  max-width: 100%;
  float: right;
  box-shadow: inset 0 0 10px rgba(255, 255, 255, 0.8);
  margin-top: 5px;
  margin-right: -15px;
  width: 65px;
  height: 65px;
}
.link-item .content a span.sitename {
  color: #74b3eb;
  padding: 8px 0 13px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  -o-text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 600;
}
.link-item .content a .desc {
  color: #8b8b8b;
  font-size: 13px;
  padding: 10px 0;
  border-top: 1px dashed #ddd;
  text-overflow: ellipsis;
  overflow: hidden;
  line-height: 15px;
}

@media (max-width: 1300px) {
  .link-section {
    width: 85%;
  }
  .link-group {
    grid-template-columns: repeat(2, 49.5%);
  }
}

@media (max-width: 419px) {
  .link-section {
    width: 100%;
  }
  .link-group {
    grid-template-columns: repeat(1, 100%);
  }
  .link-item {
    margin-left: 15px;
    margin-right: 15px;
  }
}
</style>
