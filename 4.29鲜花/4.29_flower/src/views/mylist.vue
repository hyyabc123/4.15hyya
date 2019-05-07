<template>
    <dl class="dl">
        <dt>
            <img :src="Image" alt="">
        </dt>
        <dd>
            <p>{{Name}}</p>
            <p>{{Introduction}}</p>
            <p>{{Price}}</p>
            <p>{{Sales}}</p>
            <p v-if="NowPromo">{{NowPromo}}</p>
        </dd>
    </dl>
</template>
<script>
export default {
    props:["Image","Name","Introduction","Price","Sales","NowPromo"],
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
<style scoped lang="">
    dl{
        width: 100%;
        height: 140px;
        /* background: red; */
        display: flex;
        border-bottom: 1px solid #ccc;
        padding: 10px;
    }
    dl dt{
        width: 100px;
        height: 100px;
    }
    dl dt img{
        width: 100%;
        height: 100%;
    }
    dl dd{
        padding-left: 20px;
    }
</style>