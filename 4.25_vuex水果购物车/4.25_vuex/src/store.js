import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        list:[
            {
                title:"苹果", 
                price:10,
                num:1,
                id:1
            },
            {
                title:"香蕉", 
                price:5,
                num:1,
                id:2
            }
        ]
    },
    mutations:{
        addcount(state,id){
            let index = state.list.findIndex(item => item.id==id) 
            console.log(index)
            state.list[index].num++
        },
        delcount(state,id){
            let index = state.list.findIndex(item => item.id==id) 
            console.log(index)
            state.list[index].num--
        }
    },
    getters:{
        totalprice(state){
            return state.list.reduce((prev,cur)=> prev+cur.price*cur.num,0)
        }
    },
    actions:{
        
    }

})