import Vue from 'vue'
import Router from 'vue-router'

const Home = ()=> import("../views/home.vue")
const List = ()=> import("../views/list.vue")
const My = ()=> import("../views/my.vue")
const Detail =()=>import("../views/detail.vue")
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component:Home,
    },
    {
      path: '/my',
      name: 'my',
      component:My
    },
    {
      path: '/list',
      name: 'list',
      component:List
    },
    {
      path: 'detail',
      name: 'detail',
      component:Detail
    }
  ]
})
