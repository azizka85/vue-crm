import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'Home',
  meta: {
    layout: 'main'
  },
  component: () => import('../views/Home.vue')
}, {
  path: '/login',
  name: 'Login',
  meta: {
    layout: 'auth'
  },
  component: () => import('../views/Login.vue')
}, {
  path: '/register',
  name: 'Register',
  meta: {
    layout: 'auth'
  },
  component: () => import('../views/Register.vue')
}, {
  path: '/categories',
  name: 'Categories',
  meta: {
    layout: 'main'
  },
  component: () => import('../views/Categories.vue')
}, {
  path: '/detail',
  name: 'Detail',
  meta: {
    layout: 'main'
  },
  component: () => import('../views/Detail.vue')
}, {
  path: '/history',
  name: 'History',
  meta: {
    layout: 'main'
  },
  component: () => import('../views/History.vue')
}, {
  path: '/planning',
  name: 'Planning',
  meta: {
    layout: 'main'
  },
  component: () => import('../views/Planning.vue')
}, {
  path: '/profile',
  name: 'Profile',
  meta: {
    layout: 'main'
  },
  component: () => import('../views/Profile.vue')
}, {
  path: '/record',
  name: 'Record',
  meta: {
    layout: 'main'
  },
  component: () => import('../views/Record.vue')
}]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
