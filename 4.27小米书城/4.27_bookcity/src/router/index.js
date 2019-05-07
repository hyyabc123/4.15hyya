import Vue from 'vue'
import Router from 'vue-router'
// import Home from "../components/home"
const Home =()=> import("../components/home")
const Bookcity =()=> import("../views/bookcity")
const Bookshell =()=> import("../views/bookshell")
const SearchJump =()=> import("../views/searchJump")
const Detail = ()=> import("../views/detail.vue")
const readPage =()=>import("../views/readPage.vue")
const Login = () => import("../views/login.vue")
// import Bookcity from "../views/bookcity"
// import Bookshell from "../views/bookshell"
// import SearchJump from "../views/searchJump"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      redirect:"/bookcity"
    },
    {
      path:"/bookcity",
      name:"bookcity",
      component:Bookcity
    },
    {
      path:"/bookshell",
      name:"bookshell",
      component:Bookshell
    },
    {
      path:"/searchJump",
      name:"searchJump",
      component:SearchJump
    },
    {
      path:"/detail/:id/:title",
      name:"detail",
      component:Detail
    },
    {
      path:"/readPage",
      name:"readPage",
      component:readPage,
      beforeEnter(to,from,next){
        if(window.localStorage.getItem("userId")){
          next()
        }else{
          next("/login")
        }
        
      }
    },
    {
      path:"/login",
      name:"login",
      component:Login
    }
  ]
})
