import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Identification from '@/views/Identification.vue'
import CovidQuestions from '@/views/CovidQuestions.vue'
import Vaccination from '@/views/Vaccination.vue'
import Suggestions from '@/views/Suggestions.vue'
import ThankYou from '@/views/ThankYou.vue'

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
      component: Vaccination
    },
    {
      path: '/suggestions',
      name: 'suggestions',
      component: Suggestions
    }
    ,{
      path: '/thank-you',
      name: 'thank-you',
      component: ThankYou
    }
  ]
})

export default router

