import { createRouter, createWebHashHistory } from "vue-router"

import Layout from '@/Layout/index.vue'

const routes = [
    {
        path: '/',
        component: Layout,
        children: [
            {
                path:'home',
                component:()=>import("../views/home/index.vue")
            },
            {
                path:'project',
                component:()=>import("../views/project/index.vue")
            }
        ]
    },
]
export const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router
