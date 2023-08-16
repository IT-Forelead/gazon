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
    path: '/:name',
    // name: : name,
    component: () => import('../views/ViewPlayer.vue'),
    meta: { layout: 'dashboard' },
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

export default router
