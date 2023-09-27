import { createRouter, createWebHistory } from 'vue-router'
import {supabase} from "@/client/supabase";
let localUser
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
    path: '/drop',
    name: 'drop',
    component: () => import('../components/SearchStadium.vue'),
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
    path: '/match-list',
    name: 'Match list',
    component: () => import('../views/MatchList.vue'),
    meta: { layout: 'dashboard' },
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Profile.vue'),
    meta: { layout: 'dashboard' },
  },
  {
    path: '/view-stadiums/:id',
    name: 'ViewStadium',
    component: () => import('../views/ViewStadium.vue'),
    meta: { layout: 'dashboard' },
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
    meta: { layout: 'dashboard' },
  },
  {
    path: '/sign-up',
    name: 'Sign Up',
    component: () => import('../views/SignUp.vue'),
    meta: { layout: 'dashboard' },
  },
  {
    path: '/forgot-password',
    name: 'Forgot password',
    component: () => import('../views/ForgotPassword.vue'),
    meta: { layout: 'dashboard' },
  },
  {
    path: '/edit-profile',
    name: 'Edit profile',
    component: () => import('../views/EditProfile.vue'),
    meta: { layout: 'dashboard' },
  },
  {
    path: '/view-player/:name/:id',
    name: 'viewPlayer',
    component: () => import('../views/ViewPlayer.vue'),
    meta: { layout: 'dashboard' },
  },
  {
    path: '/admin',
    name: 'Admin Home',
    component: () => import('../views/admin/AdminDashboard.vue'),
    meta: {
      requiresAuth: true,
        layout: "admin"
    }
  },
  {
    path: '/my-stadiums',
    name: 'My stadiums',
    component: () => import('../views/admin/MyStadiums.vue'),
    meta: {requiresAuth: true,
    layout: "admin"}
  },
  {
    path: '/orders',
    name: 'Orders',
    component: () => import('../views/admin/Orders.vue'),
    meta: {requiresAuth: true,
      layout: "admin"}
  },
  {
    path: '/matches',
    name: 'Matches',
    component: () => import('../views/admin/Matches.vue'),
    meta: {requiresAuth: true,
      layout: "admin"}
  },
  {
    path: '/dashboard',
    name: 'Admin Dashboard',
    component: () => import('../views/admin/AdminDashboard.vue'),
    meta: {requiresAuth: true,
      layout: "admin"}
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

async function getUser(next) {
  localUser = await supabase.auth.getSession()
  console.log(localUser)
  if (localUser.data.session == null) {
    next("/")
  } else {
    next()
  }
}
//auth requirements
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    getUser(next)
  } else {
    next()
  }
})

export default router
