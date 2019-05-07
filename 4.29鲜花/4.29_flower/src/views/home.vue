<template>
    <div class="main">
        <div class="main_main">
            <div class="header">
                <ul class="ul1" ref="ul1" :style="{width:width+'px'}">
                    <li :class="{'active':index==ind}" v-for="(item,index) in list" :key=index>{{item.Linkage}}</li>
                </ul>
            </div>
            <div class="banner12">
                <div @click="change" class="swiper-container banner1">
                    <div class="swiper-wrapper">

                        <div class="swiper-slide" v-for="(item,index) in list" :key=index> 
                            <img :src="item.ImageUrl" alt="">
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <my-footer></my-footer>
    </div>
</template>
<script>
import BScroll from "better-scroll"
import Swiper from "swiper"
import "../../node_modules/swiper/dist/css/swiper.min.css"
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
            list:[],
            width:0,
            ind:0
        }
    },
    computed:{

    },
    methods:{
        change(){
            this.$router.push({name:'detail'})
        }
    },
    created(){
        this.$http.get("/api/banner").then((res)=>{
            console.log(res.data.BannerList)
            this.list = res.data.BannerList
            let that = this
            this.$nextTick(()=>{
                let  bsc=new BScroll(".header",{
                    scrollX:true        
                })
                 Array.from(this.$refs.ul1.children,(item)=>{
                    that.width+=item.offsetWidth
                })
                new Swiper(".banner1",{
                    spaceBetween:20,
                    on:{
                        slideChangeTransitionEnd(){
                            that.ind =this.activeIndex
                            bsc.scrollToElement(that.$refs.ul1.children[that.ind])
                        }
                    }
                })
            })
        })
    },
    mounted(){

    }
}
</script>
<style scoped lang="">
    .header{
        width: 100%;
        height: 40px;
        overflow: hidden;
        border-bottom: 1px solid #ccc;
    }
    .active{
        color: orange;
    }
    .ul1{
        display: flex;
    }
    .header li{
        padding:0 10px;
        flex-shrink: 0;
        text-align: center;
        line-height: 40px;
    }
    .banner12{
        width: 100%;
        height: 500px;
    }
    .banner1{
        width: 100%;
        height: 100%;
        /* flex: 1; */
        padding: 0 20px;;
    }
    .banner1 img{
        width: 100%;
        height: 100%;
    }
    /* .banner1 img{
        width: 100%;
        height: 100%;
    } */
    .main_main{
        display: flex;
        flex-direction: column;
    }
</style>