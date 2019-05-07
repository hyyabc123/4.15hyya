<template>
    <div>
        <span @click="delcount(id)">-</span>
        <span>{{num}}</span>
        <span @click="addcount(id)">+</span>
    </div>
</template>
<script>
import {mapMutations} from "vuex"
export default {
    props:["id","num"],
    components:{

    },
    data(){
        return {

        }
    },
    computed:{

    },
    methods:{
        ...mapMutations(["addcount","delcount"])
    },
    created(){
        console.log(this)
    },
    mounted(){

    }
}
</script>
<style scoped lang="">

</style>