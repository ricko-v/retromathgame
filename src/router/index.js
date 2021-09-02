import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Main from '../components/Main.vue'
import Gameover from '../components/Gameover.vue'
import Tentang from '../components/Tentang.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/main',
    name: 'Main',
    component: Main
  },
  {
    path: '/gameover',
    name: '/Gameover',
    component: Gameover
  },
  {
    path: '/tentang',
    name: 'Tentang',
    component: Tentang
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
