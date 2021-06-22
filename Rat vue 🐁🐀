import Vue from 'vue'
import Router from 'vue-router'
import RatLogin from '@/components/manage/RatLogin.vue'
import RatIndex from '@/components/home/RatIndex.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
        path: '/index',
      name: 'RatIndex',
      component: RatIndex
    },
    {
      path: '/manage',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'RatLogin',
      component: RatLogin
    }
  ]
})
