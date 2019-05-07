<template>
    <div>
        <dl>
            <dt>

            </dt>
            <dd>
                <p>{{title}}</p>
                <p>价格：{{price}}</p>
                <p>数量：{{count}}</p>
                <my-count :count= count :type=type :id = id :index=index></my-count>
            </dd>
        </dl>
    </div>
</template>
<script>
import myCount from "./count"
export default {
    props:["price","count","id","title","index","type"],
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
        console.log(this.type)
    },
    mounted(){

    }
}
</script>
<style scoped lang="">
dl{
    width: 100%;
    height: 100px;
    /* background: red; */
    display: flex;
    font-size: 13px;
    border-bottom: 1px solid #ccc;
}
dt{
    flex: 1.3;
    padding: 2px;
    background: url("../img/1.PNG") no-repeat;
    background-size: 100% 100%;
}
dd{
    flex: 2;
    padding-left: 10px;
}
</style>