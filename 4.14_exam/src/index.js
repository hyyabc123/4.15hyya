import {ajax} from "./js/script.js"
import "./css/style.css";
import "./scss/style.scss"
import "./fonts/iconfont.css"
import "./js/flexible"
import Vue from"../node_modules/vue/dist/vue.min.js"

ajax("/api/index").then((res)=>{
    console.log(res)
})
new Vue({
    el:"#app",
    data:{
        find:"发现",
        main:[
            {
                class:"iconfont icon-fangdajing",
                tit:"朋友圈",
                class1:"iconfont icon-angle-right"
            },
            {
                class:"iconfont icon-fangdajing",
                tit:"朋友圈",
                class1:"iconfont icon-angle-right"
            }
            ,{
                class:"iconfont icon-fangdajing",
                tit:"朋友圈",
                class1:"iconfont icon-angle-right"
            }
            ,{
                class:"iconfont icon-fangdajing",
                tit:"朋友圈",
                class1:"iconfont icon-angle-right"
            }
        ],
        footerData:[
            {
                class:"iconfont icon-24",
                tit:"微信"
            },
            {
                class:"iconfont icon-24",
                tit:"通讯录"
            },
            {
                class:"iconfont icon-24",
                tit:"发现"
            },
            {
                class:"iconfont icon-wode",
                tit:"我"
            }
        ],
        // msg:true,
    }
})