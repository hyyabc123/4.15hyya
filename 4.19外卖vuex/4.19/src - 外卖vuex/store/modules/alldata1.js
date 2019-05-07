import alldata from "../../mock/content"
import axios from "axios"


const state={
    alldata1:alldata,
    type:"one",
    ind:0,
    allda:null
    
}
const mutations={
    fn(state,obj){  
        state.ind= obj.ind
        state.type = obj.type
        console.log(state.type)
    },
    add(state,obj){
        // console.log(state.allda)
        // console.log(alldata)
        let index = state.allda.findIndex(item=>item.id==obj.id)
        // console.log(alldata[index].count)

        alldata[index].count+=1
        console.log(index)
    },
    del(state,obj){
        let index = state.allda.findIndex(item=>item.id==obj.id)
        // console.log(alldata[index].count)
        alldata[index].count-=1
    },
    dialog(){
        console.log(1)
    },
    axiosgetdataMutations(state,res){
        state.allda= res
        // console.log(state.allda)
    }
}
const getters={
    alldata1({allda}){
        console.log(allda)
        // console.log(alldata)
        return alldata.filter(item=>item.type==state.type)
    },
    totalprice(state){
        return alldata.reduce((prev,item)=>prev+item.price*item.count,0)
    },
    totalcount(){
        return alldata.reduce((prev,item)=>prev+item.count,0)
    }
}
const actions = {
     axiosgetdata({commit}){
        axios.get("/api/con").then((res)=>{
            
            commit("axiosgetdataMutations",res.data)
        })
     }  

}

export default {state, mutations,getters,actions}