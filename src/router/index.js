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
    children: [
      {
        path: 'about',
        name: 'AboutProduct',
        component: () => import('@/views/Product/AboutProduct.vue'),
      },
      {
        path: 'details',
        name: 'DetailsProduct',
        component: () => import('@/views/Product/DetailsProduct.vue'),
      },
      {
        path: 'specs',
        name: 'SpecsProduct',
        component: () => import('@/views/Product/SpecsProduct.vue'),
      },
    ],
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
