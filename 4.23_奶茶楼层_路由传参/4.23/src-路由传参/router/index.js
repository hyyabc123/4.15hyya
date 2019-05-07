import Vue from "vue";
import VueRouter from "vue-router"

import Discover from "../components/discover"
import Home from "../components/home"
import Order from "../components/order"
import Profile from "../components/profile"
import Search from "../components/search"
import Shop from "../components/shop"

import Shangjia from "../components/shangjia"
import Diancan from "../components/diancan"
import Pingjia from "../components/pingjia"

Vue.use(VueRouter)

 const router=new VueRouter({
    mode:"history",
    routes:[
        {
            path:"/",
            name:"home",
            component:Home
        },
        {
            path:"/discover",
            name:"discover",
            component:Discover
        },
        {
            path:"/order",
            name:"order",
            component:Order
        },
        {
            path:"/profile",
            name:"profile",
            component:Profile
        },
        {
            path:"/search/:count",
            name:"search",
            component:Search
        },
        {
            path:"/shop/:id",
            name:"shop",
            component:Shop,
            children:[
                {
                    path:"diancan",
                    name:"diancan",
                    component:Diancan
                },
                {
                    path:"pingjia",
                    name:"pingjia",
                    component:Pingjia
                },
                {
                    path:"shangjia",
                    name:"shangjia",
                    component:Shangjia
                }
            ]
        }
    ]
})
const arr =["profile","order"] 
let storage=window.localStorage.getItem("user")

router.beforeEach((to,from,next)=>{
    console.log(to)
    console.log(from)
    if(arr.includes(to.name)){
        if(storage){
            next()
        }else{
            next("/")
        }
    }else{
        next()
    }
    
})
export default router