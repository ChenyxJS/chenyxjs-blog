/*
 * @Descripttion:
 * @version:
 * @Author: Chenyx
 * @Date: 2022-10-12 22:48:04
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-03-21 00:50:30
 */
import { createApp } from "vue";
import { createPinia } from "pinia";



import "./assets/iconfont/iconfont.css";
import "@/style/index.scss";
import "@/utils/flexible";
import "amfe-flexible/index.js";

import App from "./App.vue";
import router from "./router";

import { formatDate } from "../src/utils/index";

import SvgIcon from "@/components/SvgIcon.vue";
const pinia = createPinia();

const app = createApp(App);

// 注册全局方法
app.config.globalProperties.$FormatDate = formatDate;
app.component("svg-icon", SvgIcon);
app.use(router);
app.use(pinia);
app.mount("#app");
