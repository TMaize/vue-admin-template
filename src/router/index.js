import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/index'),
    meta: { title: '控制台', menu: false }
  },
  {
    path: '/',
    name: 'home',
    meta: { title: '主页', icon: 'el-icon-house', menu: true },
    component: () => import('../views/index.vue'),
    children: [
      {
        path: 'dashboard',
        meta: { title: '控制台', menu: true },
        component: () => import('../views/dashboard/index.vue')
      },
      {
        path: 'home-1',
        meta: { title: '主页1', menu: true },
        component: () => import('../views/home-1/index.vue')
      },
      {
        path: 'home-2',
        meta: { title: '主页2', menu: true },
        component: () => import('../views/home-2/index.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
