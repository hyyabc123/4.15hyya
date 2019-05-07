<template>
    <div>
        <li>水果名称:{{title}}</li>
        <li>水果价格:{{price}}</li>
        <li>水果数量:{{num}}</li> 
        <my-count :num=num  :id=id></my-count>
    </div>
</template>
<script>
import myCount from "./count"
export default {
    props:["num","title","price","id"],
    components:{
        myCount
    },
    data(){
        return {

        }
    },
    computed:{

    },
    methods:{

    },
    created(){
        
    },
    mounted(){

    }
}
</script>
<style scoped lang="">

</style>    