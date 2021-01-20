import Vue from 'vue'
import VueRouter from 'vue-router'
// import store from '@/store'
// import layout from '@/layout/layout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import("@/pages/hello")
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const token = sessionStorage.getItem('token');
  // store.getters('isLogin')
  if (to.meta.requireLogin) {
    //需要检测登录
    if (token) {
      next();
    } else {
      console.log('前往登录...')
      next({
        path: '/login'
      });
    }
  } else {

    next();
  }
})

export default router
