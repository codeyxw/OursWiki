import { createWebHistory, createRouter } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import Layout from '@/layout/Index.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Layout,
    redirect: 'list',
    children: [
      {
        path: 'list',
        component: () => import('@/views/List.vue'),
      },
      {
        path: 'details',
        component: () => import('@/views/details/Index.vue'),
      },
    ],
  },
  {
    path: '/public',
    redirect: '/public/list',
    component: () => import('@/layout/Public.vue'),
    children: [
      {
        path: 'list',
        component: () => import('@/views/Public.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
