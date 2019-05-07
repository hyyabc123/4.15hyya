import Vue from "../node_modules/vue/dist/vue.esm.js";
let vm=new Vue({    
    el:"#app",
    template:`<span ref="title">{{title}}</span>`,
    data:{
        title:"msg"
    },
    beforeCreate(){ // 收集 配置项
        console.log("beforeCreate",this.$el,this.title)
    },
    created(){ //  分配配置项
        console.log("created",this.$el,this.title)
    },
    beforeMount(){
        console.log("beforeMount",this.$el,this.title)
    },
    mounted(){
        console.log("mounted",this.$el,this.title)
    },
    beforeUpdate(){
        console.log(this.$refs.title.innerHTML)
        console.log("beforeUpdata",this.$data,this.$el,this.title)
    },
    updated(){
        console.log("updatated",this.$el,this.$data,this.title)
    }
})
window.vm =vm
console.log(vm)
