import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Historico from '../views/Historico.vue'
import Sobre from '../views/Sobre.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/historico',
    name: 'Historico',
    component: Historico
  },
  {
    path: '/sobre',
    name: 'Sobre',
    component: Sobre
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
