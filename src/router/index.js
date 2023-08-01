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
          path: '/holidays/list',
          name: 'holiday list',
          component: () => import('../views/HolidayList.vue')

        },
        {
          path: '/holidays/holiday/details/:id',
          name: 'holiday details',
          component: () => import('../views/HolidayDetails.vue')
        },
        {
          path: '/no-holiday',
          name: 'no holiday create',
          component: () => import('../views/NoHoliday.vue')
        },
      ]
    },
    {
      name: "admin-layout",
      path: "/admin/employees",
      component: () => import('../views/admin/AdminLayout.vue'),
      children: [
        {
          name: "employees-list",
          path: "",
          component: () => import("../views/admin/AdminClientsList.vue")
        },
        {
          name: "employee-details",
          path: "/admin/employees/:id",
          component: () => import("../views/admin/AdminClientDetails.vue")
        },
        {
          path: '/admin/holidays/details/:id',
          name: 'admins side holiday details',
          component: () => import('../views/HolidayDetails.vue')
        },
      ]
    }
  ]
})

export default router
