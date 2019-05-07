<template>
    <div>
        <div v-for="(item,index) in list" :key="index">
            <li>班级:1701C</li>
            <li>姓名:{{item}}</li>
        </div>
        
    </div>
</template>
<script>
export default {
    props:{
        list:{
            type:Array,
        }
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

</style>
