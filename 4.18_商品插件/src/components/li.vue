<template>
    <div>
        <ul v-for="(item,index) in arr" :key=index>
            <li>品类：{{item.title}}</li> 
            <li>价格：{{item.price}}</li>
            <my-count :count=item.count :id = item.id></my-count>
        </ul>
        <slot name="tname">asd</slot>
        <!-- <slot name="slotname1">saskjdl</slot> -->
    </div>
</template>
<script>
import myCount from "./count"
export default {
    props:{
        arr:Array
    },
    components:{
        myCount
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