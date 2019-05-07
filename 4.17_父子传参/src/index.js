import APP from "./app.vue";

import ul from "./components/ul.vue"

import Vue from "../node_modules/vue/dist/vue.esm.js"

console.log(APP)
console.log(Vue)

new Vue({
    el:"#app",
    template:"<APP />",
    components:{
        APP:APP,
    }
})