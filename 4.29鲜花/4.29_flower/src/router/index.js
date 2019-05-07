import Vue from 'vue'
import Router from 'vue-router'
const Home = ()=>import ("../views/home")
const List = ()=>import ("../views/list")
const My= ()=>import ("../views/my")
const Detail =()=>import("../views/detail.vue")

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/my',
      name: 'my',
      component: My
    },
    {
      path: '/list',
      name: 'list',
      component: List
    },
    {
      path:"/detail",
      name:"detail",
      component:Detail
    }
  ]
})
