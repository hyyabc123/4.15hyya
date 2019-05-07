<template>
    <div>
        <my-list v-for="(item,index) in movies"
        :name = item.name
        :grade = item.grade
        :actors = item.actors
        :runtime = item.runtime
        :nation = item.nation
        :poster = item.poster
        :id = item.filmId
        :key=index></my-list>
    </div>
</template>
<script>
import myList from "./mylist";
import axios from "axios"
export default {
    props:{

    },
    components:{
        myList
    },
    data(){
        return {
            movies:[],
        }   
    },
    computed:{

    },
    methods:{
        
    },
    created(){
        axios.get("/api/data").then((res)=>{
            console.log(res.data.data.films)
            this.movies =res.data.data.films
        })
    },
    mounted(){

    }
}
</script>
<style  lang="">
    dl{
        width: 100%;
        height: 130px;
        display: flex;
        padding: 10px;
        
    }
    dl>dt{
        width: 120px;
        height: 120px;
        padding: 10px;
    }
    dl>dt img{
        width: 100%;
        height: 100%;
    }
    dl dd{
        flex: 1;
        padding: 10px 0;
    }
    
</style>