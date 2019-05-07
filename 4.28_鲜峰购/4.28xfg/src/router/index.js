import Vue from 'vue'
import Router from 'vue-router'

const Home =()=>import("../views/home.vue")
const Classvue =()=>import("../views/classvue.vue")
const Shopvue =()=>import("../views/shopvue.vue")
const Myvue =()=>import("../views/myvue.vue")

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: "home",
      component:Home 
    },
    {
      path: '/classvue',
      name: "classvue",
      component:Classvue
    },
    {
      path: '/shopvue',
      name: "shopvue",
      component:Shopvue
    },
    {
      path: '/myvue',
      name: "myvue",
      component:Myvue
    },
  ]
})
