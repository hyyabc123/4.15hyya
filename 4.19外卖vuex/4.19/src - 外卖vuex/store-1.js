import Vue from "vue"
import vuex from "vuex"
import classlist from "./mock/classlist"
import alldata from "./mock/content"

Vue.use(vuex)

export default new vuex.Store({
    state:{
        conlist:classlist,
        alldata1:alldata,
        ind:0,
        buylist:[],
        flag1:false,
        type:"one"

    },
    mutations:{
        getdata(state,obj){  //1
            state.conlist=obj
        },
        fn(state,obj){  
            state.ind= obj.ind
            state.type = obj.type
            console.log(state.type)
        },
        add(state,obj){  //2
            console.log()
            let index = alldata.findIndex(item=>item.id==obj.id)
            // console.log(alldata[index].count)

            alldata[index].count+=1
            console.log(index)
        },
        del(state,obj){  //3 
            let index = alldata.findIndex(item=>item.id==obj.id)
            // console.log(alldata[index].count)
            alldata[index].count-=1
        },
        dialog(){
            console.log(1)
        }
        
    },  
    getters:{
        alldata1(state){
            return alldata.filter(item=>item.type==state.type)
        },
        totalprice(state){
            return alldata.reduce((prev,item)=>prev+item.price*item.count,0)
        },
        totalcount(){
            return alldata.reduce((prev,item)=>prev+item.count,0)
        }
    },
    actions:{
       
    }
})