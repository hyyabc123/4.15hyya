<template>
    <div class="add">
        <input type="text" v-model="val">
        <button @click="addlist(val)">点击</button>
    </div>
</template>
<script>
import {mapMutations,mapActions} from "vuex"
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
            val:""
        }
    },
    computed:{

    },
    methods:{
       ...mapActions(["addlist"]) 
    },
    created(){
        
    },  
    mounted(){

    }
}
</script>
<style scoped lang="">
    .add{
        width: 100%;
        height: 40px;
        display: flex;
    }
</style>