<template>
    <div>
        <my-header></my-header>
        <my-search></my-search>
        <div class="swiper-container banner">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item,index) in bannerlist" :key=index>
                    <img v-lazy="item.ad_pic_url" alt="">
                </div>
            </div>
        </div>
        <h3>本周最火</h3>
        <div class="main">
            <my-list v-for="(item,index1) in booklist" 
            :title=item.title
            :summary=item.summary
            :id=item.fiction_id
            :img=item.cover
            :classname='classname'
            :key="index1"></my-list>
        </div>
        <h3>本周最热</h3>
        <div class="box">
            <my-list v-for="(item,index2) in downlist" 
            :title=item.title
            :summary=item.summary
            :id=item.fiction_id
            :img=item.cover
            :classname='classname1'
            :key="index2"></my-list>
        </div>
    </div>
</template>
<script>
import myHeader from "./header"
import mySearch from "./search"
import Swiper from "swiper"
import myList from "./mylist"
export default {
    props:{
        
    },
    components:{
        myHeader,
        mySearch,
        myList,
        
    },
    data(){
        return {
            bannerlist:[],
            booklist:[],
            classname:"topdown",
            classname1:"leftright",
            downlist:[]
        }
    },
    computed:{

    },
    methods:{

    },
    created(){
        this.$http.get("/api/index").then((res)=>{
            console.log(res.data.items[3].data.data)
            this.bannerlist= res.data.items[0].data.data
            this.booklist =res.data.items[1].data.data
            this.downlist = res.data.items[2].data.data
            this.$nextTick(()=>{
                new Swiper(".banner",{

                })
            })
            
        })
    },
    mounted(){

    }
}
</script>
<style scoped lang="">
    .swiper-slide img{
        width: 100%;
        height: auto;
    }
    h3{
        padding-left: 10px;
    }
    .main{
        display: flex;
        flex-wrap: wrap;
    }

</style>