import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        count:1,
        list:[
            {
                age:10
            },
            {
                age:21
            },
            {
                age:25
            },
            {
                age:30
            }
        ]
    },
    mutations:{
        add(state,num){
            state.count+=num
        },
        del(state,num){
            state.count -=num
        }
    },
    getters:{
        list(state){
            return state.list.filter(item=>item.age>22)
        }
    },
    actions:{
        addcount(context,num){
            setTimeout(()=>{
                context.commit("add",num)
            },2000)
        }
    }


})