import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      name: 'root',
      redirect: "home"
    },
    {
      path: '/layout',
      name: "layout",
      component: () => import('@/layout/common'),
      children: [{
        path: '/home',
        name: "home",
        component: () => import('@/views/Main'),
      }]
    }
  ]
})
