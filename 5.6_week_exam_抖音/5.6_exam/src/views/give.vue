<template>
    <div class="give">
        <div class="swiper-container banner">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item,index) in bannerlistGetters" :key=index>
                    <img :src="item.img" alt="">
                </div>
            </div>
        </div>
        <div class="right">
            <router-link to='/fast' tag='li' class="iconfont icon-fenxiang2"></router-link>
            <router-link to='/fight' tag='li' class="iconfont icon-xinxi"></router-link>
            <router-link to='/login' tag='li' :class="['iconfont','icon-shoucang1',{'active':flag}]"></router-link>
        </div>
    </div>  
</template>
<script>
import "../../node_modules/swiper/dist/css/swiper.min.css"
import Swiper from "swiper"
import "../fonts/iconfont.css"
import {mapGetters,mapMutations,mapState} from "vuex"
export default {
    props:{

    },
    components:{

    },
    data(){
        return {

        }
    },
    computed:{
        ...mapState(['flag']),
        ...mapGetters(['bannerlistGetters'])
    },
    methods:{
        ...mapMutations(['change'])
    },
    created(){
        this.$nextTick(()=>{
            new Swiper('.banner',{
                direction:'vertical'
            })
        })
    },
    mounted(){

    },
    beforeRouteLeave(to,from,next){
        let arr=['fast','gight']
        if(document.cookie && to.name=='login'){      // 登录且去login 
            this.change()
            next('/')
        }else if(!document.cookie && to.name!='login'){

           next('/login')
        }else{
            next()
        }
    }
}
</script>
<style scoped lang="">
*{
    margin: 0;
    padding: 0;
}
    .give{
        width: 100%;
        height: 100%;
    }
   .swiper-slide{
       width: 100%;
       height: 40px;
   }
   .swiper-slide img{
       width: 100%;
       height: 100%
   }
   .right{
       position: fixed;
       width: 50px;
       height: 300px;
       /* background: red; */
       z-index: 100;
       right: 20px;
       top: 300px;
   }
   .right li{
       width: 100%;
       height: 50px;
       text-align: center;
       font-size: 40px;
       margin-bottom: 20px;;
       color: white;
   }
    .right li.active{
       color: red;
   }
</style>