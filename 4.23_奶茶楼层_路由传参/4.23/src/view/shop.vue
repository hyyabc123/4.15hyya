<template>
    <div>
        <li>
            <span @click="$router.push({name:'pingjia'})">评价</span>
            <span @click="$router.push({name:'shangjia'})">商家</span>
            <span @click="$router.push({name:'youhui'})">优惠</span>
        </li>
        <keep-alive include="diancan">
            <router-view></router-view>
        </keep-alive>
        
        
    </div>
</template>
<script>
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

    },
    methods:{

    },
    created(){

    },
    mounted(){

    },
    beforeRouteEnter(to,from,next){
        console.log(to,from)
        if(to.params.id<4){
            next()
        }else{
            next("/")
        }
        
    }
}
</script>
<style scoped lang="">
    li{
        width: 100%;
        height: 40px;
        display: flex;
        
    }
    span{
        flex:1;
        text-align: center;
        line-height: 40px;
    }
</style>