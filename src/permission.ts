/*
 * @Author: chenyx
 * @Date: 2023-03-13 23:09:10
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-04-11 10:24:23
 * @FilePath: /chenyxjs-blog/src/permission.ts
 */
import router from "@/router";

import "nprogress/nprogress.css";

// 白名单路由
const whiteList = ["/login"];

router.beforeEach(async (to, from, next) => {
  // 每次跳转前修改网站title
  if (to.meta.title !== undefined) {
    window.document.title = to.meta.title;
    console.log(window.document.title);
  }
  next();

  // // 若存在该路由则跳转至该页面，否则跳转至401页面
  // from.name ? next({ name: from.name as any }) : next("/401");
  // // 未登录可以访问白名单页面
  // if (whiteList.indexOf(to.path) !== -1) {
  //   next();
  // } else {
  //   next(`/login?redirect=${to.path}`);
  // }
});

router.afterEach(() => {});
