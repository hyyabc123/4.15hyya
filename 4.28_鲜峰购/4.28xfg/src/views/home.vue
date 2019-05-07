<template>
    <div class="main_main">
        <div class="main">
            <li class="head">
                <span class="iconfont icon-dizhi-01"></span>
                <span class="local">配送至：西二旗大街</span>
                <span class="iconfont icon-fangdajing"></span>
            </li>

            <my-banner :bannerArr="bannerArr"></my-banner>
            
            <li class="week">
                <span></span>
                <img src="../images/2.jpg" alt="">
                <span></span>
            </li>
                
            <div class="cen">
                <div class="cen_cen">
                    <my-list v-for="(item,index) in list" 
                    :title=item.title
                    :count=item.count
                    :price=item.price
                    :img=item.img
                    :id = item.id
                    :key=index>
                    </my-list>
                </div>
            </div>
            <div class="bottom">
                <img src="../images/4.jpg" alt="">
            </div>
        </div>      
        <my-footer></my-footer> 
    </div>
</template>
<script>
import "../fonts/iconfont.css"
import myBanner from "./banner"
import myList from "./myList"
import {mapGetters} from "vuex"
export default {
    props:{

    },
    components:{
        myBanner,
        myList
    },
    data(){
        return {
            
        }
    },
    computed:{
        ...mapGetters(["bannerArr","list"])
    },
    methods:{

    },
    created(){

    },
    mounted(){

    }
}
</script>
<style  lang="">
*{
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
    text-decoration: none;
}
.bottom{
    width: 100%;
    height: 100px;
}
.bottom img{
    width: 100%;
    height: 100%;
}
.cen{
    width: 100%;
    height: 190px;
    /* background: red; */
    overflow-x: auto;
}
.cen_cen{
    width: auto;
    height: 180px;
    /* background: orange; */
    display: flex;
}
.cen_cen dl{
    padding: 10px;
    flex-shrink: 0;
    width: 150px;
    height: 190px;
    text-align: center;
    /* background: red; */
}
.cen_cen dl dd .price{
    width: 100%;
    display: flex;
}
.cen_cen dl dd .price span{
    flex: 1;
    display: flex;
    justify-content: space-between
}

.head{
    width: 100%;
    height: 44px;
    display: flex;
    background: #FFD704; 
}
.week{
    width: 100%;
    height: 40px;
    display: flex;
}
.week span{
    flex: 1;
}
.head .iconfont{
    flex: 1;
    text-align: center;
    line-height: 44px;
}
.head .local{
    flex: 5;   
    line-height: 44px;
}
.banner{
    width: 100%;
    height: 200px;
}
.banner .swiper-wrapper{
    width: 100%;
    height: 100%;
}
.banner .swiper-wrapper .swiper-slide{
    width: 100%;
    height: 100%
}
.banner .swiper-wrapper .swiper-slide .img{
    width: 100%;
    height: 100%
}


</style>