import alldata from "../../mock/content"
import axios from "axios"


const state={
    data:null
}
const mutations={
    getdata(state,data){
        state.data = data
    },
    addlistMutations(state,val){
        console.log(val)
        state.data.unshift(val.data)
    },
    removelistMutations(state,id){
        state.data= state.data.filter(item=>item.id!=id)
    },
    updatalitsMutations(state,obj){
        let index = state.data.findIndex(item=>item.id==obj.id)
        console.log(obj)
        state.data.splice(index,1,obj)
    },
    selctlistMutation(state,data){
        state.data=data
    }
}
const getters={
    getdatagetters(state){
        return state.data
    },
    
}
const actions = {
     axiosgetdata({commit}){
        axios.get('http://jsonplaceholder.typicode.com/todos').then((res)=>{
            console.log(res.data)
            commit("getdata",res.data)
        })
     },
     addlist({commit},val){
        console.log(val)
        axios.post("http://jsonplaceholder.typicode.com/todos",{
            title:val,
            completed:false,
            userId:1
        }).then((res)=>{
            commit("addlistMutations",res)
        })
     },
     removelist({commit},id){
        axios.delete(`http://jsonplaceholder.typicode.com/todos/${id}`).then((res)=>{
            commit("removelistMutations",id)
        })
     },
     updatalits({commit},obj){
        axios.put(`http://jsonplaceholder.typicode.com/todos/${obj.id}`,obj).then((res)=>{
            commit("updatalitsMutations",res.data)
        })
     },
     selctlist({commit},count){
         
        axios.get(`http://jsonplaceholder.typicode.com/todos?_limit=${count}`).then((res)=>{
            console.log(res)
            commit("selctlistMutation",res.data)
        })
     }
}

export default {state, mutations,getters,actions}