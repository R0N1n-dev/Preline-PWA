import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/index.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/about', name: 'about', component: () => import('@/views/about.vue') },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/components/NotFound.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHistory(/*import.meta.env.BASE_URL*/)
})

export default router
