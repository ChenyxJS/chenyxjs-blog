/*
 * @Descripttion:
 * @version:
 * @Author: Chenyx
 * @Date: 2022-10-12 22:48:04
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-05-04 12:43:54
 */
import { Directive, createApp } from "vue";
import { createPinia } from "pinia";
import "@/permission";

import "element-plus/theme-chalk/dark/css-vars.css";
import "element-plus/dist/index.css";
// 引入v-md-editor组件
import VMdPreview from "@kangc/v-md-editor/lib/preview";
import vuepressTheme from "@kangc/v-md-editor/lib/theme/vuepress.js";
import "@/style/markdown.css";
// 显示代码行数
import createLineNumbertPlugin from "@kangc/v-md-editor/lib/plugins/line-number/index";
// 复制按钮
import createCopyCodePlugin from "@kangc/v-md-editor/lib/plugins/copy-code/index";
import "@kangc/v-md-editor/lib/plugins/copy-code/copy-code.css";
// 表情
import createEmojiPlugin from "@kangc/v-md-editor/lib/plugins/emoji/index";
import "@kangc/v-md-editor/lib/plugins/emoji/emoji.css";

import "./assets/iconfont/iconfont.css";
import "@/style/index.scss";
// 移动端适配
import "@/utils/flexible";
import "amfe-flexible/index.js";

import Prism from "prismjs";

VMdPreview.use(vuepressTheme, {
  Prism,
});
VMdPreview.use(createLineNumbertPlugin());
VMdPreview.use(createCopyCodePlugin());
VMdPreview.use(createEmojiPlugin());

import App from "./App.vue";
import router from "./router";
import SvgIcon from "@/components/SvgIcon.vue";
import VueWechatTitle from "vue-wechat-title";
import vuetyped from 'vue3typed'
const pinia = createPinia();

const app = createApp(App);

// 自定义指令
import * as directive from '@/directive';
Object.keys(directive).forEach(key => {
  app.directive(key, (directive as { [key: string]: Directive })[key]);
});

// 注册全局方法
app.use(VMdPreview);
app.use(VueWechatTitle);
app.component("svg-icon", SvgIcon);
app.use(router);
app.use(pinia);
app.use(vuetyped);
app.mount("#app");
