<template>
    <div>
        shop{{$route.params.id}}
        <div class="lis">
            <li @click="$router.push({name:'diancan',params:{}})">点餐</li>
            <li @click="$router.push({name:'pingjia',params:{}})" >评价</li>
            <li @click="$router.push({name:'shangjia',params:{}})" >商家</li>
        </div>
        <router-view></router-view>
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
        if(to.params.id<=2){
            next()
        }else{
            next("/discover")
        }
    }        
}
</script>
<style scoped lang="">
    .lis{
        width: 100%;
        height: 40px;
        display: flex;
    }
    li{
        flex: 1;
        line-height: 40px;
        text-align: center; 
    }
</style>