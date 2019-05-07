import Vue from "vue"
import Vuex from "vuex"

import alldata1 from "./modules/alldata1"
import conlist from "./modules/conlist"

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        alldata1,
        conlist
    }
})