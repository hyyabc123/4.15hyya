import Vue from "vue";
import vuex from "vuex"
import data from "../mock/data"
console.log(data)
Vue.use(vuex)
export default new vuex.Store({
    state:{
        data:data,
        listarr:data.list,
        newarr:[],
        flag:false
    },
    mutations:{
        add(state,id){
            let index = state.listarr.findIndex(item=>item.id==id)
            state.listarr[index].count++
            console.log(state.listarr[index].count)
            console.log(index)
            if(!state.newarr.includes(state.listarr[index])){
                state.newarr.push(state.listarr[index])
            }
        },
        add1(state,id){
            let index = state.listarr.findIndex(item=>item.id==id)
            state.listarr[index].count++
        },
        del(state,id){
            let index = state.listarr.findIndex(item=>item.id==id)
            state.listarr[index].count--
        },
        change(state,id){
            // console.log(id)
            let index = state.newarr.findIndex(item=>item.id==id)
            console.log(index)
            state.newarr[index].flag=!state.newarr[index].flag
            let fflag=state.newarr.every(item=>item.flag)
            state.flag =fflag
            
        },
        all(state){
            state.flag=!state.flag
            state.newarr.forEach(item=>item.flag=state.flag)
        }
    },
    getters:{
        bannerArr(){
            return data.bannerArr
        },
        newarr(state){
            return state.newarr
        },
        list(){
            return data.list
        },
        totalcount(state){
            return state.newarr.reduce((prev,cur)=>prev+cur.count,0)
        },
        flag1(state){
            return state.flag
        },
        totalPrice(state){
            return state.newarr.filter(item=>item.flag).reduce((prev,cur)=>prev+cur.price*cur.count,0)
        }
    },
    actions:{

    }
})