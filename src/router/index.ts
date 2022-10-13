import { createRouter, createWebHashHistory } from "vue-router"

import Layout from '@/Layout/index.vue'

const routes = [
    {
        path: '/',
        component: Layout           
    },
]
export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

export default router
