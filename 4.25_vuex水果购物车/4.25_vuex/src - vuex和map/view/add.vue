<template>
    <div>
        <p>
            {{$store.state.count}}
        </p>
        <!-- <p>{{$store.getters.list}}</p> -->
        <p>{{list}}</p>
        <button @click="add(2)">
            增加
        </button>
         <button @click="addcount(2)">
            增加两秒后
        </button>
    </div>
</template>
<script>
import {mapGetters,mapMutations,mapActions} from "vuex"
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
        ...mapGetters(["list"])
        
    },
    methods:{
        // fn(){
        //     this.$store.commit("add",5)
        //     // this.$store.state.count++
        //     // console.log(this.$store.state.count)
        // },
        ...mapMutations(["add"]),
        ...mapActions(["addcount"])
        // fn(){
        //     this.$store.dispatch("addcount",10)
        // }
    },
    created(){
        console.log(this.$store.getters.list)
    },
    mounted(){

    }
}
</script>
<style scoped lang="">

</style>