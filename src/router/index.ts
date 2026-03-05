import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/home/index.vue')
    },
    {
      path: '/products',
      name: 'Products',
      component: () => import('@/views/products/index.vue')
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('@/views/about/index.vue')
    },
    {
      path: '/faq',
      name: 'FAQ',
      component: () => import('@/views/faq/index.vue')
    },
    {
      path: '/case',
      name: 'Case',
      component: () => import('@/views/case/index.vue')
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('@/views/contact/index.vue')
    }
  ],
})

export default router
