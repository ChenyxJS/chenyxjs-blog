/*
 * @Descripttion:
 * @version:
 * @Author: Chenyx
 * @Date: 2022-10-12 22:48:04
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-06-29 16:35:52
 */
import { Directive, createApp } from "vue";
import { createPinia } from "pinia";
import "@/permission";

import "element-plus/theme-chalk/dark/css-vars.css";
import "element-plus/dist/index.css";
// 引入v-md-editor组件
import VMdPreview from "@kangc/v-md-editor/lib/preview";
import vuepressTheme from "@kangc/v-md-editor/lib/theme/vuepress.js";
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
import vuetyped from "vue3typed";

const pinia = createPinia();

const app = createApp(App);

// 自定义指令
import * as directive from "@/directive";
Object.keys(directive).forEach((key) => {
    app.directive(key, (directive as { [key: string]: Directive })[key]);
});

// 全局注册
// markdown预览组件
app.use(VMdPreview);
// 网页标题
app.use(VueWechatTitle);
// svg图标
app.component("svg-icon", SvgIcon);
app.use(router);
app.use(pinia);
app.use(vuetyped);
app.mount("#app");
