import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../views/LoginPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login page',
      component: LoginPage
    },
    {
      path: '/app',
      name: 'app layout',
      component: () => import('../views/LayoutPage.vue'),
      children: [
        {
          path: '/welcome',
          name: 'welcome page',
          component: () => import('../views/WelcomePage.vue')
        },
        {
          path: '/holiday-list',
          name: 'holiday list',
          component: () => import('../views/HolidayList.vue')

        },
        {
          path: '/holiday-details',
          name: 'holiday details',
          component: () => import('../views/HolidayDetails.vue')
        },
        {
          path: '/no-holiday',
          name: 'no holiday create',
          component: () => import('../views/NoHoliday.vue')
        },
        {
          path: '/admin',
          name: 'admin page',
          component: () => import('../views/AdminPage.vue')
        },
      ]
    }
  ]
})

export default router
