<template>
    <dl :class="classname" @click="fn(id,title)">
        <dt>
            <img v-lazy="img" alt="">
        </dt>
        <dd>
            <li>{{title}}</li>
            <slot v-if="classname=='leftright'"></slot>
        </dd>
    </dl>
</template>
<script>
export default {
    props:["title","summary","id","img","classname"],
    components:{

    },
    data(){
        return {
            
        }
    },
    computed:{

    },
    methods:{
        fn(id,title){
            this.$router.push({name:"detail",params:{id:id,title:title}})
        }
    },
    created(){
        
    },
    mounted(){

    }
}
</script>
<style scoped lang="">
    .topdown{
        width: 33.3%;
        height: 150px;
        padding: 12px;
    }
    .topdown dt{
        width: 100%;
        height: 100px;
    }
    .topdown dt img{
        width: 100%;
        height: 100px;
    }
    .leftright{
        width: 100%;
        height: 100px;
        display: flex;
        margin: 10px 0px;
        padding: 10px;
    }
    .leftright dt{
        width: 100px;
        height: 100px;
    }
    .leftright dt img{
        width: 100px;
        height: 100px;
    }
    .leftright dd{
        padding-left: 10px;
        padding-top: 10px;;
    }
    
</style>