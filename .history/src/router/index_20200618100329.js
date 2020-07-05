import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home.vue'

Vue.use(VueRouter)

  const routes = [
    {

      {
        path: '',
        name: 'home',
        component: home
      },
      {
        path:'Pagenation_table',
        name:'Pagenation_table',
        component: () => import('../components/Pagenation_table/Pagenation_table.vue')
      },


      

{
  
  path:'/',
  name:'layout',
  component:layout,
  children:[
    home
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
