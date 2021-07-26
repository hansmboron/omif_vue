import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/comissoes',
    name: 'Comissões Organizadoras',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Comissoes.vue')
  },
  {
    path: '/historia',
    name: 'História',
    component: () => import(/* webpackChunkName: "about" */ '../views/Historia.vue')
  },
  {
    path: '/editais',
    name: 'Editais',
    component: () => import(/* webpackChunkName: "about" */ '../views/Editais.vue')
  },
  {
    path: '/estudo',
    name: 'Materiais Estudo',
    component: () => import(/* webpackChunkName: "about" */ '../views/Estudos.vue')
  },
  {
    path: '/revista',
    name: 'Revista',
    component: () => import(/* webpackChunkName: "about" */ '../views/Revista.vue')
  },
  {
    path: '/omif2018',
    name: 'Omif 2018',
    component: () => import(/* webpackChunkName: "about" */ '../views/Omif2018.vue')
  },
  {
    path: '/Omif2019',
    name: 'Omif 2019',
    component: () => import(/* webpackChunkName: "about" */ '../views/Omif2019.vue')
  },
  {
    path: '/Omif2020',
    name: 'Omif 2020',
    component: () => import(/* webpackChunkName: "about" */ '../views/Omif2020.vue')
  },
  {
    path: '/Omif2021',
    name: 'Omif 2021',
    component: () => import(/* webpackChunkName: "about" */ '../views/Omif2021.vue')
  },
  {
    path: '/artes',
    name: 'Artes Visuais',
    component: () => import(/* webpackChunkName: "about" */ '../views/Artes.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
