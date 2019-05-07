<template>
    <div>
        <div v-if="!item">
            亲！ 没有对应数据o
        </div>
        <my-list v-if="item" 
        :title= item.title
        :img = item.cover
        :classname="classname">
        <p>{{item.summary}}</p>
        <p></p>
        </my-list>
        <button @click="toDoRead()" v-if="item">
            点击阅读
        </button>
        <div v-if="item">
            {{item.content}}
        </div>
    </div>
</template>
<script>
import myList from "./mylist";
import myHeader from "./header"

export default {
    props:[],
    components:{
        myList,
        myHeader
    },
    data(){
        return {
            item:"",
            classname:"leftright"
        }
    },
    computed:{

    },
    methods:{
        toDoRead(){
            this.$router.push({name:"readPage"})
        }
    },
    created(){
        console.log(this.$route.params.id)
        this.$http.get("/api/list?id="+this.$route.params.id).then((res)=>{
                if(res.data.code){
                    this.item=res.data.data.item
                    console.log(this.item)
                }
            })
    },
    mounted(){

    }
}
</script>
<style scoped lang="">
    button{
        width: 50%;
        height: 40px;
        background: orange;
        border: 0;
        outline: 0;
        display: block;
        margin: 30px auto;
    }
</style>