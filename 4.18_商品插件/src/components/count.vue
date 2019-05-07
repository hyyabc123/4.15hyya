<template>
    <div>
        <span @click="down">-</span>
            {{count}} 
        <span @click="add">+</span>
        <!-- <li>总价：{{totalprice}}</li> -->
    </div>
</template>
<script>
export default {
    props:{
        count:{
            
        },
        id:{

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
            this.$bus.$emit("addcount",num,this.id)
        },
        down(){
            let num =this.count-1
            if(this.count==0){
                num=0
            }
            this.$bus.$emit("addcount",num,this.id)
        }
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="">

</style>