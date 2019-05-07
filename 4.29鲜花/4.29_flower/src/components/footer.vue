<template>
    <div class="footer">
        <router-link tag="li" to="/">首页</router-link>
        <router-link tag="li" to="/list">列表</router-link>
        <router-link tag="li" to="/my">我的</router-link>
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

    }
}
</script>
<style scoped lang="">
    .footer{
        width: 100%;
        height: 40px;
        display: flex;
        border-top: 1px solid #ccc;
    }
    li{
        flex: 1;
        text-align: center;
        line-height: 40px;
    }
</style>
