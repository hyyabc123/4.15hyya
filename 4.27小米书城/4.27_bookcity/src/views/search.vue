<template>
    <div class="search">
        <p @click="$router.push({name:'searchJump'})">请输入书名，作者</p>
        <span v-if="flag" @click="$emit('change')">点击</span>
    </div>
</template>
<script>
export default {
    props:["flag"],
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
.search{
    width: 100%;
    height: 44px;;
    display: flex;
    padding: 0 20px;
    line-height: 44px;
    border-bottom: 1px solid #ccc;
}

.search p{
    flex: 1
}
</style>