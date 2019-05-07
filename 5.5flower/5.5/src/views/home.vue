<template>
    <div class="mian">
        <header class='header'>
            <div class="header_box" :style="{'width':width+'px'}" ref="header_box"> 
                <span :class="{'active':index==ind}" v-for='(item,index) in BannerList' :key=index>{{item.Linkage}}</span>
            </div>
        </header>
        <div class="box">
            <div class="swiper-container banner">
                <div class="swiper-wrapper">

                    <div @click="fn()" class="swiper-slide" v-for='(item,index) in BannerList' :key=index>
                        <img :src="item.ImageUrl" alt="">
                    </div>
                    
                </div>
            </div>
        </div>
        <input type="text" v-focussss>
    </div>
</template>
<script>
import BScroll from "better-scroll"
import "../../node_modules/swiper/dist/css/swiper.min.css"
import Swiper from "swiper"
export default {
    props:{

    },
    components:{

    },
    directives:{
        focussss:{
            inserted(el){
                console.log(el)
                el.focus()
            }
        }
    },
    data(){
        return {
            BannerList:null,
            width:0,
            ind:0   
        }
    },
    computed:{

    },
    methods:{
        fn(){
            this.$router.push({name:"detail",params:{}})
        }
    },
    created(){
        this.$http.get("/api/banner").then((res)=>{
            // console.log(res.data.BannerList)
            this.BannerList=res.data.BannerList
            this.$nextTick(()=>{
                let that = this
                let bscroll = new BScroll('header',{
                    scrollX:true,
                    click:true
                })
                let width = 0
                Array.from(this.$refs.header_box.children).map(item=>{
                    width += item.offsetWidth
                })
                this.width=width
                new Swiper('.banner',{
                    on:{
                        slideChangeTransitionEnd(){
                            that.ind=this.activeIndex
                            bscroll.scrollToElement(that.$refs.header_box.children[this.activeIndex],1000)
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
.active{
    color: orange;
}
.header{
    width: 100%;
    height: 40px;
    border-bottom: 1px solid #ccc;
    overflow: hidden;
}
.header_box{
    width: auto;
    height: 40px;
    display: flex;
}
.header_box span{
    padding: 0 20px; 
    flex-shrink: 0;
    line-height: 40px;
}
.box img{
    width: 100%;
}
</style>