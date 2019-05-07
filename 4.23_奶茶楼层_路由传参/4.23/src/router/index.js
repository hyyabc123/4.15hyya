import Vue from "vue"
import VueRouter from "vue-router"

import Profile from "../view/profile"
import Order from "../view/order"
import Home from "../view/home"
import Discover from "../view/discover"

import Shop from "../view/shop"

import pingjia from "../view/pingjia"
import shangjia from "../view/shangjia"
import youhui from "../view/youhui"
 
Vue.use(VueRouter);

const router = new VueRouter({  
    mode:"history",
    routes:[
        {
            path:"/",
            name:"home",
            component:Home
        },
        {
            path:"/profile",
            name:"profile",
            component:Profile
        },
        {
            path:"/order",
            name:"order",
            component:Order
        },
        {
            path:"/discover",
            name:"discover",
            component:Discover
        },
        {
            path:"/shop/:id",
            name:"shop",
            component:Shop,
            children:[
                {
                    path:"pingjia",
                    name:"pingjia",
                    component:pingjia
                },
                {
                    path:"youhui",
                    name:"youhui",
                    component:youhui
                },
                {
                    path:"shangjia",
                    name:"shangjia",
                    component:shangjia
                }
            ]
        }
    ]     
})
const arr = ["profile","order"]
let storage = window.localStorage.getItem("user")
router.beforeEach(function(to,from,next){
    if(arr.includes(to.name)){
        if(storage=="asd"){
            next()
        }else{
            next("/")
        }
    }else{
        next()
    }
    
})
export default router 