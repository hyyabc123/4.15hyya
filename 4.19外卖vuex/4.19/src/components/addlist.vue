<template>
    <div>
        <select v-model="val" @change="selctlist(val)">
            <option>200</option>
            <option>100</option>
            <option>20</option>
            <option>10</option>
            <option>5</option>
        </select>
    </div>
</template>
<script>
import {mapActions} from "vuex"
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
            val:"",
        }
    },
    computed:{

    },
    methods:{
        ...mapActions(["selctlist"])
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="">

</style>