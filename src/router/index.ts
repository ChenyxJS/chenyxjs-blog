/*
 * @Descripttion: 
 * @version: 
 * @Author: Chenyx
 * @Date: 2022-10-12 23:24:53
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-03-10 15:53:14
 */
import { createRouter, createWebHashHistory } from "vue-router"

import Layout from '@/Layout/index.vue'

const routes = [
    {
        path: '/',
        component:()=>import("../views/index/index.vue")
    },
    {
        path: '/blog',
        component: Layout,
        children: [
            {
                path:'home',
                name:'home',
                component:()=>import("../views/home/index.vue")
            },
            {
                path:'project',
                name:'project',
                component:()=>import("../views/project/index.vue")
            },
            {
                path:'article',
                name:'article',
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
