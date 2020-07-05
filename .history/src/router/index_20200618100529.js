import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home.vue'

Vue.use(VueRouter)

  const routes = [
    {

     

      

{
  
  path:'/',
  name:'layout',
  component:layout,
  children:[

    {
      path: '',
      name: 'home',
      component: home
    },
    {
      path:'ca',
      name:'Pagenation_table',
      component: () => import('../components/Pagenation_table/Pagenation_table.vue')
    },

    





  ]
}
    }
  
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
