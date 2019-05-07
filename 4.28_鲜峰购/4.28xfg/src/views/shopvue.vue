<template>
  <div class="main_main">
    <div class="main">
        <my-count v-for="(item,index) in newarr"
        :count=item.count
        :title=item.title
        :price =item.price
        :flag=item.flag
        :id=item.id
        :key=index></my-count>
        <p>
          <span :class="['allCheck',{'active':flag1}]" @click="all"></span>  
          <span>全选</span>
          <span>总价:{{totalPrice}}</span>
        </p>
    </div>
    <my-footer></my-footer>
  </div>
</template>
<script>
import myCount from "./mycount"
import {mapGetters,mapMutations} from "vuex"
export default {
  props: {},
  components: {
    myCount
  },
  data() {
    return {
      flag:false
    };
  },
  computed: {
    ...mapGetters(["newarr","flag1","totalPrice"])
  },
  methods: {
    ...mapMutations(["all"]),
    
  },
  created() {

  },
  mounted() {}
};
</script>
<style scoped lang="">
.main .allCheck{
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #ccc;
}
.main  .active{
  background: orange;
}
</style>