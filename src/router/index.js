import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'CatalogView',
    component: () => import('@/views/CatalogView.vue'),
  },
  {
    path: '/product/:id',
    name: 'ProductLayout',
    component: () => import('@/views/ProductLayout.vue'),
  },
  {
    path: '/cart',
    name: 'CartLayout',
    component: () => import('@/views/CartLayout.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
