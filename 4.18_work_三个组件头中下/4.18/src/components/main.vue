<template>
    <div>
        <my-dl v-for="(item,index) in list" :img=item.contentFirstImg :tit="item.categoryName" :price=item.id :key="index"></my-dl>
    </div>
</template>

<script>
import myDl from "./dl.vue"
import axios from "axios"
export default {
    props:{

    },
    components:{
        myDl 
    },
    data(){
        return {
            list:null
        }
    },
    computed:{

    },
    methods:{

    },
    created(){
        axios.get("/api/index").then((res)=>{
            this.list=res.data.data
            console.log(res.data.data)
        })
    },
    mounted(){

    }
}
</script>
<style scoped  lang="scss">
    *{
        margin: 0;
        padding: 0;
        list-style: none;
        text-decoration: non;

    }
</style>



