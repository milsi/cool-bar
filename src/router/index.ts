import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomePage/HomeView.vue';
import WorkoutsView from '@/views/WorkoutsPage/WorkoutsView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/workouts',
      name: 'Workouts',
      // component: () => import('../views/WorkoutsView.vue'),
      component: WorkoutsView,
    },
    {
      path: '/stats',
      name: 'Stats',
      component: () => import('../views/StatsView.vue'),
    },
    {
      path: '/:catchAll(.*)',
      name: 'notFound',
      component: () => import('../views/NotFound.vue'),
    },
  ],
});

export default router;
