import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/login',
    //   name: 'logiin',
    //   component: () => import('@/pages/portal/views/user/LoginView.vue')
    // },
    
    {
      path: '/',
      name: 'home',
      component: () => import('@/pages/home/HomeView.vue'),
      children:[
        {
          path:'',
          name:'PoliceModel',
          component: () => import('@/pages/home/PoliceModel.vue'),
        },
        {
          path:'task',
          name:'task',
          component: () => import('@/pages/task/PoliceTask.vue'),
        },
        {
          path:'training',
          name:'training',
          component: () => import('@/pages/training/PoliceTraining.vue'),
        },
        {
          path:'clothing',
          name:'clothing',
          component: () => import('@/pages/clothing/PoliceClothing.vue'),
        },
        {
          path:'equipment',
          name:'equipment',
          component: () => import('@/pages/equipment/PoliceEquipment.vue'),
        },
      ]
    }

      
  ]
})

// router.beforeEach((to, from, next) => {
  // if (to.path === '/login') return next();

  // const tokenStore = useTokenStore()
  // if (!tokenStore.token) {
  //   return next('/login')
  // } else {
  //   return next()
  // }
// })

// router.onError((handler) => {

// })

export default router
