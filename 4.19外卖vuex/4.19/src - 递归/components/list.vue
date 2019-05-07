<template>
    <ul>
        <li v-for="(item,index) in list" :key=index>
                <h3>{{item.title}}</h3>
                <list v-if="item.title" :list = item.child></list>
        </li>
    </ul>
</template>
<script>
export default {
    name:"list",
    props:{
        list:{

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
    *{
        list-style: none;
    }
</style>
