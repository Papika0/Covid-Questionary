import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import IdentificationView from '@/views/IdentificationView.vue'
import CovidQuestionsView from '@/views/CovidQuestionsView.vue'
import VaccinationView from '@/views/VaccinationView.vue'
import SuggestionsView from '@/views/SuggestionsView.vue'
import ThankYouView from '@/views/ThankYouView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/identification',
      name: 'identification',
      component: IdentificationView
    },
    {
      path: '/covid-questions',
      name: 'questions',
      component: CovidQuestionsView
    },
    {
      path: '/vaccination',
      name: 'vaccination',
      component: VaccinationView
    },
    {
      path: '/suggestions',
      name: 'suggestions',
      component: SuggestionsView
    }
    ,{
      path: '/thank-you',
      name: 'thank-you',
      component: ThankYouView
    }
  ]
})

export default router

