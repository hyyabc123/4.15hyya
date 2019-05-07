<template>
    <div class="main">
        <div class="main_main">
            <my-dllist v-for="(item,index) in list"
            :Subject=item.Subject
            :Content = item.Content
            :Layout = item.Layout
            :key = index></my-dllist>
        </div>
        <my-footer></my-footer>
    </div>
</template>
<script>
import myDllist from "./myDlList"
export default {
    props:{

    },
    components:{
        myDllist
    },
    data(){
        return {
            list:'',

        }
    },
    computed:{

    },
    methods:{

    },
    created(){
        this.$http.get("/api/catagory").then((res)=>{
            console.log(res.data)
            this.list =res.data
        })  
    },
    mounted(){

    }
}
</script>
<style  lang="">
.main_main{
    overflow-y: auto;
}

</style>