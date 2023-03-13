/*
 * @Descripttion: 
 * @version: 
 * @Author: Chenyx
 * @Date: 2022-10-12 22:48:04
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-03-13 10:32:26
 */
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import "./assets/iconfont/iconfont.css";
// 引入v-md-editor组件
import VMdPreview from '@kangc/v-md-editor/lib/preview';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';
import '@/style/index.scss'





import Prism from 'prismjs';


VMdPreview.use(vuepressTheme, {
    Prism,
    extend() {
      // md为 markdown-it 实例，可以在此处进行修改配置,并使用 plugin 进行语法扩展
      // md.set(option).use(plugin);
    },
  });





import App from './App.vue'
import router from "./router";

import { formatDate } from "../src/utils/index";

import SvgIcon from "@/components/SvgIcon.vue";
const pinia = createPinia()

const app = createApp(App)

// 注册全局方法
app.config.globalProperties.$FormatDate = formatDate
app.use(VMdPreview)
app.component('svg-icon',SvgIcon)
app.use(router)
app.use(pinia)
app.mount('#app')
