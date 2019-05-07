<template>
    
        <dl>
            <dt>
                <img :src="img" alt="">
            </dt>
            <dd>
                <li>{{tit}}</li>
                <li>{{price}}</li>
            </dd>
        </dl>
</template>
<script>
export default {
    props:{
        img:{

        },
        tit:{

        },
        price:{

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

    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
// div{
//     width: 100%;
//     height: 100%;

// }
    dl{
        width: 50%;
        height: 200px;
        dt{
            width: 100%;
            height: 70%;
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
</style>