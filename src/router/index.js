import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta: { layout: 'dashboard' },
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Profile.vue'),
    meta: { layout: 'dashboard' },
  },
  {
    path: '/stadiums',
    name: 'Stadiums',
    component: () => import('../views/Stadiums.vue'),
    meta: { layout: 'dashboard' },
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

export default router
