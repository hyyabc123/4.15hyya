<template>
    <div>
        搜索页面啊啊啊啊啊{{$route.query.count}}{{$route.params.count}}
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
        console.log(this.$router)
        console.log(this.$route)
    },
    mounted(){

    }
}
</script>
<style scoped lang="">

</style>