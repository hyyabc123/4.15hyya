<template>
    <header class="header"> 
        <div class="head">
            <router-link to="/bookcity" tag="li">书城</router-link>
            <router-link to="/bookshell" tag="li">书架</router-link>
        </div>
        <span class="pre">个人</span>
    </header>
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
    .header{
        width: 100%;
        height: 44px;;
        background: #ccc;
        display: flex;
        padding: 0 10px;
    }
    .header .head{
        flex: 2;
        text-align: center;
        line-height: 44px;
        display: flex;
    }
    .head li{
        flex: 1;
    }
    .header .pre{
        flex: 1;
        text-align: center;
        line-height: 44px;
    }
    
</style>