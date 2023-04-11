/*
 * @Author: chenyx
 * @Date: 2023-03-13 23:09:10
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-04-11 18:44:46
 * @FilePath: /chenyxjs-blog/src/permission.ts
 */
import router from "@/router";

import "nprogress/nprogress.css";

// 白名单路由
const whiteList = ["/login"];

router.beforeEach(async (to, from, next) => {
  // 每次跳转前修改网站title
  // if (to.meta.title !== undefined) {
  //   window.document.title = to.meta.title;
  // }
  next();


});

router.afterEach(() => {});
