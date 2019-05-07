import Vue from 'vue'
import Router from 'vue-router'
import Movie from "../views/movie"
import MovieTick from "../views/movieTick"
import My from "../views/my"
import Chep from "../views/chep"
import Fast from "../views/fast"
import Hot from "../views/hot"
import Detail from "../views/detail"

const Login = ()=>import("../views/login.vue")
const Titct = ()=>import("../views/titct.vue")

Vue.use(Router)

const router =  new Router({
  mode:'history',
  routes: [
    {
      path:"/",
      redirect:{name:'movie'}
    },
    {
      path: '/movie',
      name: 'movie',
      component: Movie,
      redirect:{name:'hot'},
      children:[
        {
          path: 'hot',
          name: 'hot',
          component: Hot,
        },
        {
          path: 'fast',
          name: 'fast',
          component: Fast,
        },
      ]
    },
    {
      path: '/movietick',
      name: 'movietick',
      component: MovieTick
    },
    {
      path: '/my',
      name: 'my',
      component: My
    },
    {
      path: '/chep',
      name: 'chep',
      component: Chep
    },
    {
      path:"/detail/:id",
      name:"detail",
      component:Detail
    },{
      path:"/login",
      name:'login',
      component:Login
    },
    {
      path:"/titct",
      name:'titct',
      component:Titct,
      beforeEnter(to,from,next){
        if(window.localStorage.getItem("userId")){
          next()
        }else{
          next("/login")
        }
      }
    }
  ]
})

// router.beforeEach((to,from,next)=>{
//   console.log(to.name)
 
//   next()
  
// })

export default router 