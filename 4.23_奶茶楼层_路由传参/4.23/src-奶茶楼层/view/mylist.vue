<template>
    <div class="content">
        <h3>{{name}}</h3>
            <dl v-for="(item,index) in foods" :key=index> 
                <dt>
                    <img :src="item.image" alt="">
                </dt>
                <dd>
                    <li>{{item.name}}</li>
                    <li>{{item.price}}</li>
                    <li>{{item.description}}</li>
                </dd>
            </dl>
    </div>
</template>
<script>
export default {
    props:["name","foods","name1"],
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
<style scoped lang="scss">
h3{
    padding-left: 5px;;
}
    dl{
        width: 100%;
        height: 100px;
        // background: red;
        display: flex;
        margin-bottom: 10px;;
        padding-left: 5px;
        dt{
            width: 100px;
            height: 100px;
            img{
                width: 100%;
                height: 100%
            }
        }
        dd{
            flex: 1;
        }
    }
    
</style>