import { createApp } from 'vue'
import './style.css'
import "./assets/iconfont/iconfont.css";
import App from './App.vue'
import router from "./router";

import { formatDate } from "../src/utils/index";

const app = createApp(App)
// 注册全局方法
app.config.globalProperties.$FormatDate = formatDate

app.use(router)
app.mount('#app')
