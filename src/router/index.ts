/*
 * @Descripttion: 
 * @version: 
 * @Author: Chenyx
 * @Date: 2022-10-12 23:24:53
 * @LastEditors: Chenyx
 * @LastEditTime: 2022-10-23 23:11:56
 */
import { createRouter, createWebHashHistory } from "vue-router"

import Layout from '@/Layout/index.vue'

const routes = [
    {
        path: '/',
        component:()=>import("../views/index/index.vue")
    },
    {
        path: '/index',
        component: Layout,
        children: [
            {
                path:'home',
                component:()=>import("../views/home/index.vue")
            },
            {
                path:'project',
                component:()=>import("../views/project/index.vue")
            },
            {
                path:'article',
                component:()=>import("../views/article/index.vue")
            },
        ]
    },
]
export const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router
