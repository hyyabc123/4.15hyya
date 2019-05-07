<template>
    <div>
        <div class="big">
            <div v-if="count" class="dis">
                <span @click="del">-</span>
                <span>{{count}}</span>
            </div>
            <span @click="add" :type=type class="ad">+</span>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        count:{
            
        },
        index:{

        },
        id:{

        },
        type:{

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
        add(){
            let num =this.count+1
            this.$bus.$emit("addcount",num,this.id,this.type)

        },
        del(){
            let num =this.count-1
            this.$bus.$emit("addcount",num,this.id,this.type)
        }
    },
    created(){
        
    },
    mounted(){

    }
}
</script>
<style scoped lang="">
    .big{
        width: 100px;
        height: 30px;
        /* background: red; */
        display: flex;
    }
    .dis{
        flex: 2;
        display: flex;
        
    }
    .dis span{
        flex: 1;
    }
    .ad{
        flex: 1
    }
</style>