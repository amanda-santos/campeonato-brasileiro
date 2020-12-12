import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ClubsList from '../views/ClubsList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/classification',
    name: 'ClubsList',
    component: ClubsList
  }
]

const router = new VueRouter({
  routes
})

export default router
