<template>
    <div class="mian">
        <my-list v-for="(item,index) in list" 
        :Content=item.Content
        :Subject=item.Subject
        :Layout = item.Layout
        :key=index></my-list>
    </div>
</template>
<script>
import myList from "./mylist"
export default {
    props:{

    },
    components:{
        myList
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
        this.$http.get("/api/catagory").then((res)=>{
            console.log(res.data)
            this.list=res.data
        })
    },
    mounted(){

    }
}
</script>
<style scoped lang="">

</style>