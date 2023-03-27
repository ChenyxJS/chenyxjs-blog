/*
 * @Descripttion:
 * @version:
 * @Author: Chenyx
 * @Date: 2022-10-12 23:24:53
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-03-26 15:36:37
 */
import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";

import Layout from "@/Layout/index.vue";

const routes = [
  {
    path: "/",
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: "home",
        name: "home",
        component: () => import("../views/home/index.vue"),
      },
      {
        path: "project",
        name: "project",
        component: () => import("../views/project/index.vue"),
      },
      {
        path: "article",
        name: "article",
        component: () => import("../views/article/index.vue"),
      },
    ],
  },
];
// 开发环境使用hash 生产环境使用web
const history =
  process.env.NODE_ENV == "prod"
  ? createWebHashHistory()
    : createWebHistory();
const router = createRouter({
  history,
  routes,
});


export default router;
