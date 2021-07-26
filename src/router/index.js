import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'list',
    component: () => import('../views/List.vue')
  },
  {
    path: '/delete/:id',
    name: 'delete',
    component: () => import('../views/Delete.vue')
  },
  {
    path: '/change/:id',
    name: 'change',
    component: () => import('../views/Change.vue'),
  }, 
  {
    path: '/addfield/:id',
    name: 'addfield',
    component: () => import('../views/AddField.vue')
  },
  {
     path: '/deletefield/:id',
     name: 'deletefield',
     component: () => import('../views/DeleteField.vue')
  },
  {
    path: '/create',
    name: 'create',
    component: () => import('../views/Create.vue')
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
