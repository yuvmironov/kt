import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import EditTask from '../views/EditTask.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/editTask/:id',
    name: 'editTask',
    component: EditTask
  }
]

const router = new VueRouter({
  routes
})

export default router
