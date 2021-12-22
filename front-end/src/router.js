import {createRouter, createWebHistory} from 'vue-router';

const routes = [
  {
    path: '/',
    alias: '/activities',
    name: 'activities',
    component: () => import('./components/ActivitiesList')
  },
  {
    path: '/activities/:id',
    name: 'activity-details',
    component: () => import('./components/Activity')
  },
  {
    path: '/add',
    name: 'add',
    component: () => import('./components/AddActivity')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;