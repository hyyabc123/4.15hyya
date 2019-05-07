<template>
    <footer class="footer">
        <router-link tag='li' to="/">首页</router-link>
        <router-link tag='li' to="/focus">关注</router-link>
        <router-link tag='li' to="/add">+</router-link>
        <router-link tag='li' to="/news">消息</router-link>
        <router-link tag='li' to="/my">我的</router-link>
    </footer>
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
    .footer li{
        flex: 1;
        text-align: center;
        line-height: 40px;
        font-weight: bold;;
        color: #333;
    }
</style>