<template>
    <div>
        <my-list v-for ="(item,index) in list" 
        :price=item.price
        :title=item.title
        :num =item.num
        :id=item.id
        :key=index></my-list>
        总价{{totalprice}}
    </div>
</template>
<script>
import myList from "./mylist"
import {mapState,mapGetters} from "vuex"
export default {
    props:{

    },
    components:{
        myList
    },
    data(){
        return {

        }
    },
    computed:{
        ...mapState(['list']),
        ...mapGetters(["totalprice"])
    },  
    methods:{
        
    },
    created(){
        // console.log(this.list)
    },
    mounted(){

    }
}
</script>
<style scoped lang="">

</style>