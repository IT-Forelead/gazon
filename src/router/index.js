import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta: { layout: 'dashboard' },
  },
  {
    path: '/stadium',
    name: 'Stadium',
    component: () => import('../views/Stadium.vue'),
    meta: { layout: 'dashboard' },
  },
  {
    path: '/best-players',
    name: 'BestPlayer',
    component: () => import('../views/BestPlayers.vue'),
    meta: { layout: 'dashboard' },
  },
  {
    path: '/calendar',
    name: 'Calendar',
    component: () => import('../views/Calendar.vue'),
    meta: { layout: 'dashboard' },
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Profile.vue'),
    meta: { layout: 'dashboard' },
  },
  {
    path: '/stadiums',
    name: 'Stadiums',
    component: () => import('../views/Stadiums.vue'),
    meta: { layout: 'dashboard' },
  },
  {
    path: '/view-player/:name/:id',
    name: 'viewPlayer',
    component: () => import('../views/ViewPlayer.vue'),
    meta: { layout: 'dashboard' },
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

export default router
