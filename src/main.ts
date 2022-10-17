/*
 * @Descripttion: 
 * @version: 
 * @Author: Chenyx
 * @Date: 2022-10-12 22:48:04
 * @LastEditors: Chenyx
 * @LastEditTime: 2022-10-17 11:23:55
 */
import { createApp } from 'vue'
import './style.css'
import "./assets/iconfont/iconfont.css";
import '@/style/flex.scss'
import '@/style/scrollShow.scss'

import App from './App.vue'
import router from "./router";

import { formatDate } from "../src/utils/index";

import SvgIcon from "@/components/SvgIcon.vue";

const app = createApp(App)
// 注册全局方法
app.config.globalProperties.$FormatDate = formatDate
app.component('svg-icon',SvgIcon)
app.use(router)
app.mount('#app')
