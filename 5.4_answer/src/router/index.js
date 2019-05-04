import Vue from 'vue'
import Router from 'vue-router'
import Home from "../components/home"

const Detail = ()=>import ("../components/detail")

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path:"/detail",
      name:"detail",
      component:Detail
    }
  ]
})
