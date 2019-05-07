import Vue from 'vue'
import Router from 'vue-router'

const Add =()=>import('../views/add.vue')
const Focus =()=>import('../views/focus.vue')
const Home =()=>import('../views/home.vue')
const My =()=>import('../views/my.vue')
const News =()=>import('../views/news.vue')
const Give =()=>import('../views/give.vue')
const City =()=>import('../views/city.vue')
const Login =()=>import('../views/login.vue')
const Fast =()=>import('../views/fast.vue')
const Fight =()=>import('../views/fight.vue')

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      redirect:{name:'give'},
      children:[
        {
          path: 'give',
          name: 'give',
          component: Give
        },
        {
          path: 'city',
          name: 'city',
          component: City
        }
      ]
    },
    {
      path: '/add',
      name: 'add',
      component: Add
    },
    {
      path: '/focus',
      name: 'focus',
      component: Focus
    },
    {
      path: '/my',
      name: 'my',
      component: My
    },
    {
      path: '/news',
      name: 'news',
      component: News
    },
    {
      path:"/login",
      name:"login",
      component:Login,
    },
    {
      path:"/fast",
      name:"fast",
      component:Fast
    },
    {
      path:"/fight",
      name:"fight",
      component:Fight
    }
  ]
})
export default router