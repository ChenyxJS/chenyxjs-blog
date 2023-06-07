/*
 * @Author: chenyx
 * @Date: 2023-03-13 23:09:10
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-06-08 01:09:30
 * @FilePath: /chenyxjs-blog/src/permission.ts
 */
import router from "@/router";

import "nprogress/nprogress.css";

// 白名单路由
const whiteList = ["/login"];

router.beforeEach(async (to, from, next) => {
    // 判断是否存在该路由
    if (to.name && router.hasRoute(to.name)) {
        next();
    } else {
        next("/404");
    }
});

router.afterEach(() => {});
