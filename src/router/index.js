import Vue from 'vue'
import VueRouter from 'vue-router'
import Ch04 from '../views/Ch04.vue'
import Ch05 from '../views/Ch05.vue'
import Ch06 from '../views/Ch06.vue'
import Ch07 from '../views/Ch07.vue'
import Ch08 from '../views/Ch08.vue'
import Ch09 from '../views/Ch09.vue'
import Ch10 from '../views/Ch10.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/ch04',
    name: 'Ch04',
    component: Ch04
  },
  {
    path: '/ch05',
    name: 'Ch05',
    component: Ch05
  },
  {
    path: '/ch06',
    name: 'Ch06',
    component: Ch06
  },
  {
    path: '/ch07',
    name: 'Ch07',
    component: Ch07
  },
  {
    path: '/ch08',
    name: 'Ch08',
    component: Ch08
  },
  {
    path: '/ch09',
    name: 'Ch09',
    component: Ch09
  },
  {
    path: '/ch10',
    name: 'Ch10',
    component: Ch10
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
