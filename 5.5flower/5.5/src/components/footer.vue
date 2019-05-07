<template>
    <footer class="footer">
        <router-link to='/'>首页</router-link>
        <router-link to='/list'>列表</router-link>
        <router-link to='/my'>我的</router-link>
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
    .footer a{
        flex: 1;
        text-align: center;
        line-height: 40px;
    }

</style>