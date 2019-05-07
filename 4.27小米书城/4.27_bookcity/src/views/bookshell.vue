<template>
    <div>
        <my-header></my-header>
        <my-search :flag="true" @change="change"></my-search>
        <div class="main">
            <my-list v-for="(item,index1) in shelldata" 
            :title=item.title
            :summary=item.summary
            :id=item.fiction_id
            :img=item.cover
            :classname='classname'
            :key="index1">
            <template>
                <p>{{item.summary}}</p>
            </template>
            </my-list>
        </div>
    </div>
</template>
<script>
import myHeader from "./header"
import mySearch from "./search"
import myList from "./mylist"
export default {
    props:{

    },
    components:{
        myHeader,
        mySearch,
        myList
    },
    data(){
        return {
            shelldata:[],
            classname:"leftright"
        }
    },
    computed:{
        
    },
    methods:{
        change(){
            this.classname= this.classname == "leftright" ? "topdown":"leftright"
        }
    },
    created(){
        this.$http.get("/api/index").then((res)=>{
            console.log(res.data.items[3].data.data)
            this.shelldata= res.data.items[3].data.data

        })
    },
    mounted(){

    }
}
</script>
<style scoped lang="">
.main{
        display: flex;
        flex-wrap: wrap;
    }
</style>