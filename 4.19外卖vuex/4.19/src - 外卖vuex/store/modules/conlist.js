import classlist from "../../mock/classlist"
const state={
    conlist:classlist
}
const mutations={
    getdata(state,obj){  //1
        state.conlist=obj
    },
}
const getters={
    conlistdata(state){
        return state.conlist
    }    
}
const actions = {

}

export default {state, mutations,getters,actions}