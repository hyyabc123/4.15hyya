<template>
    <div class="swiper-container banner">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in bannerArr" :key=index>
                <img class="img1" :src="item.img" alt="">
            </div>
        </div>
    </div>
</template>
<script>
import "../../node_modules/swiper/dist/css/swiper.min.css"
import Swiper from "swiper"
export default {
    props:["bannerArr"],
    components:{

    },
    data(){
        return {

        }
    },
    computed:{

    },
    methods:{
        
    },
    created(){
        this.$nextTick(()=>{
            new Swiper(".banner",{

            })
        })
        
    },
    mounted(){

    }
}
</script>
<style scoped lang="">

</style>