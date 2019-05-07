<template>
    <div>
        <p>
            {{$store.state.list}}
           
        </p>
        <p>
             <!-- {{list}} -->
        </p>
        <p>
            {{$store.state.count}}
        </p>
        <button @click="del(1)">减少</button>
    </div>
</template>
<script>
import {mapMutations} from "vuex"
export default {
    props:{

    },
    components:{

    },
    data(){
        return {

        }
    },
    computed:{
        // list(){
        //     return this.$store.state.list.filter(item=>item.age<20)
        // }
    },
    methods:{
        // dle(){
        //     this.$store.commit("del",2)
        // }
        ...mapMutations(["del"])
    },
    created(){

    },
    mounted(){
        
    }
}
</script>
<style scoped lang="">

</style>