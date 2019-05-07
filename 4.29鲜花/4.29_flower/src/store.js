import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        list:[]
    },
    mutations:{
        getlist(state,obj){
            let index = state.list.findIndex(item=>item.Subject==obj.Subject)
            if(index==-1){
                state.list.push(obj)
            }else{
                 state.list.splice(index,1,obj)
            }
            
            console.log(state.list)
        }
    },
    getters:{
        listgetters(state){
            return state.list
        }
    }    
})