<template>
    <div class="con1">
        <h3>{{name1}}</h3>
        <dl id="item1" v-for="(item,index) in foods" :key=index>
            <dt>
                <img :src="item.image" alt="">
            </dt>
            <dd>
                <b>{{item.name}}</b>
                <p></p>
                <p>${{item.price}}</p>
                <my-count ></my-count>
            </dd>
        </dl>
    </div>
</template>
<script>
import myCount from "./count"
export default {
    props:["foods","name1","img"],
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
<style scoped lang="scss">
 #item1{
        width: 100%;
        height: 100px;
        background: #ccc;
        margin-bottom: 10px;;
        display: flex;
        dt{
            width: 100px;
            height: 100px;
            img{
                width: 100%;
                height: 100%;
            }
        }
        dd{
            padding-left: 10px;
        }
    }
</style>