import { createRouter, createWebHistory } from 'vue-router'
const routes = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
        path: '/',
        name: 'home',
        component: () => import('../components/home.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../components/login.vue')
    },{
      path: '/login2',
      name: 'login2',
      component: () => import('../components/login2.vue')
    }
  
  ]


});

// for Login Protected;

// routes.beforeEach((to, from, next) => {
//   const isAuthancation = JSON.parse(sessionStorage.getItem("authentication"));
//   if (to.name !== 'login' && !isAuthancation) {
//     next({ name: 'login' })

//   }
//   if (to.name === 'login' && isAuthancation) {
//     next({ name: 'cildehome' })

//   }
//   else next();
// })

export default routes
