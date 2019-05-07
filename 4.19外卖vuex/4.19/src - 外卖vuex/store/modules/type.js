const state={
    type:"one"
}
const mutations={
    fn(state,obj){  
        state.ind= obj.ind
        state.type = obj.type
        console.log(state.type)
    },
}
const getters={
    alldata1(state){
        return alldata.filter(item=>item.type==state.type)
    },
}
const actions = {

}

export default {state, mutations,getters,actions}