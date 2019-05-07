<template>
    <div>
        <div class="big">
            <div v-if="count" class="dis">
                <span @click="del({id:id})">-</span>
                <span>{{count}}</span>
            </div>
            <span @click="add({id:id})" :type=type class="ad">+</span>
        </div>
    </div>
</template>
<script>
import {mapState,mapMutations,mapActions,mapGetters} from "vuex"
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
        ...mapState(["conlist","ind","concon","buylist","flag1"])
    },
    methods:{
        ...mapMutations(["add","del"])
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