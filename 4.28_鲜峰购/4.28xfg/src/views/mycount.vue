<template>
    <div>
        <div>
            <span @click="change(id)" :class="['chek',{'active':flag}]"></span>
            <span>{{title}}</span>
            <span>{{price}}</span>
            <span @click="del(id)">-</span>
            <span>{{count}}</span>
            <span @click="add1(id)">+</span>
        </div>
    </div>
</template>
<script>
import {mapGetters,mapMutations} from "vuex"
export default {
    props:["count","title","price","id","flag","img"],
    components:{

    },
    data(){
        return {
            
        }
    },
    computed:{
        ...mapGetters(["newarr"])
    },
    methods:{
        ...mapMutations(["add1","del","change"])
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="">
    .chek{
        display: inline-block;
        width: 20px;
        height: 20px;
        background: #ccc;;
        border-radius: 50%;
    }
    .active{
        background: orange;
    }
</style>