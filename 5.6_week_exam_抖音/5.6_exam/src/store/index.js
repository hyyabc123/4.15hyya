import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        list:[
            {   
                title:"推荐",
                id:1
            },
            {
                title:"北京",
                id:2
            }
        ],
        bannerlist:[
            {
                img:"../../static/images/1.jpg"
            },
            {
                img:"../../static/images/1.jpg"
            },
            {
                img:"../../static/images/1.jpg"
            },
            {
                img:"../../static/images/1.jpg"
            }
        ],
        datalist:[
            {
                img:"../../static/images/3.jpg",
                title:"美食"
            },
            {
                img:"../../static/images/3.jpg",
                title:"美食"
            },
            {
                img:"../../static/images/3.jpg",
                title:"美食"
            },
            {
                img:"../../static/images/3.jpg",
                title:"美食"
            }
        ],
        flag:false
    },
    mutations:{
        change(state){
            state.flag=!state.flag
            console.log(document.cookie)
        }
    },
    getters:{
        getlist(state){
            return state.list
        },
        bannerlistGetters(state){
            return state.bannerlist
        },
        datalistGetters(state){
            return state.datalist
        }
    },
    actions:{

    }
})