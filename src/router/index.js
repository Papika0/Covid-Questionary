import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Identification from '@/views/Identification.vue'
import CovidQuestions from '@/views/CovidQuestions.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/identification',
      name: 'identification',
      component: Identification
    },
    {
      path: '/covid-questions',
      name: 'questions',
      component: CovidQuestions
    },
    {
      path: '/vaccination',
      name: 'vaccination',
      component: null
    },
    {
      path: '/suggestions',
      name: 'suggestions',
      component: null
    }
    ,{
      path: '/thank-you',
      name: 'thank-you',
      component: null
    }
  ]
})

export default router
