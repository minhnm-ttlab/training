import { createRouter, createWebHistory } from 'vue-router'
import CatalogView from '@/views/CatalogView.vue'

const routes = [
  {
    path: '/',
    name: 'catalog-view',
    component: CatalogView,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
