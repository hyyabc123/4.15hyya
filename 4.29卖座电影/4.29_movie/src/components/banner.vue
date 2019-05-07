<template>
    <div class="swiper-container banner1">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in bannerList" :key=index>
                <img :src="item.imgUrl" alt="">
            </div>
        </div>
    </div>
</template>
<script>
import Swiper from "swiper"
import "../../node_modules/swiper/dist/css/swiper.min.css"
export default {
    props:["bannerList"],
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

    },
    mounted(){

    }
}
</script>
<style scoped lang="">
    .banner1{
        width: 100%;
        height: 200px;
    }
    img{
        width: 100%;
        height: 200px;
    }

</style>