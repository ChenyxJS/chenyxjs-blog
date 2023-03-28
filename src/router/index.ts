/*
 * @Descripttion:
 * @version:
 * @Author: Chenyx
 * @Date: 2022-10-12 23:24:53
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-03-28 15:24:11
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
    redirect: "/home",
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
  import.meta.env.MODE === "production"
    ? createWebHistory()
    : createWebHashHistory();

const router = createRouter({
  history,
  routes,
});

export default router;
