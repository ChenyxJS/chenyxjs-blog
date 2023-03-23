/*
 * @Descripttion:
 * @version:
 * @Author: Chenyx
 * @Date: 2022-10-12 22:48:04
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-03-23 22:28:20
 */
import { createApp } from "vue";
import { createPinia } from "pinia";
// 引入v-md-editor组件
import VMdPreview from "@kangc/v-md-editor/lib/preview";
import vuepressTheme from "@kangc/v-md-editor/lib/theme/vuepress.js";
import '@/style/markdown.css'
// 显示代码行数
import createLineNumbertPlugin from "@kangc/v-md-editor/lib/plugins/line-number/index";
// 复制按钮
import createCopyCodePlugin from '@kangc/v-md-editor/lib/plugins/copy-code/index';
import '@kangc/v-md-editor/lib/plugins/copy-code/copy-code.css';
// 表情
import createEmojiPlugin from '@kangc/v-md-editor/lib/plugins/emoji/index';
import '@kangc/v-md-editor/lib/plugins/emoji/emoji.css';


import "./assets/iconfont/iconfont.css";
import "@/style/index.scss";
import "@/utils/flexible";
import "amfe-flexible/index.js";

 



import Prism from "prismjs";

VMdPreview.use(vuepressTheme, { Prism });
VMdPreview.use(createLineNumbertPlugin());
VMdPreview.use(createCopyCodePlugin());
VMdPreview.use(createEmojiPlugin());


import App from "./App.vue";
import router from "./router";

import { formatDate } from "../src/utils/index";

import SvgIcon from "@/components/SvgIcon.vue";
const pinia = createPinia();

const app = createApp(App);


// 注册全局方法
app.config.globalProperties.$FormatDate = formatDate;
app.use(VMdPreview);
app.component("svg-icon", SvgIcon);
app.use(router);
app.use(pinia);
app.mount("#app");
