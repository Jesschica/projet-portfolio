import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import PageError from '../views/PageError.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },

    {
      path: '/error',
      name: 'PageError',
      component: PageError
    }

  ]
})



export default router