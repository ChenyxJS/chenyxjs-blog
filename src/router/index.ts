/*
 * @Descripttion:
 * @version:
 * @Author: Chenyx
 * @Date: 2022-10-12 23:24:53
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-04-11 18:42:28
 */
import {
  RouteRecordRaw,
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
        meta:{
          title:'见万事如流'
        }
      },
      {
        path: "blog",
        name: "blog",
        component: () => import("../views/blog/index.vue"),
        meta:{
          title:'见万事如流'
        }
      },
      {
        path: "project",
        name: "project",
        component: () => import("../views/project/index.vue"),
        meta:{
          title:'项目'
        }
      },
      {
        path: "article",
        name: "article",
        component: () => import("../views/article/index.vue"),
      },
    ],
  },
] as RouteRecordRaw[];
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
