const state={
    ind:0,
}
const mutations={
    fn(state,obj){  
        state.ind= obj.ind
        state.type = obj.type
        console.log(state.type)
    },
}
const getters={

}
const actions = {
    
}

export default {state, mutations,getters,actions}