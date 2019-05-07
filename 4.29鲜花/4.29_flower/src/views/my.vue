<template>
    <div class="main">
        <div class="main_main">
            我的
            {{listgetters}}
        </div>
        <my-footer></my-footer>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
    props:{

    },
    components:{

    },
    data(){
        return {

        }
    },
    computed:{
        ...mapGetters(['listgetters'])
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