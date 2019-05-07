<template>
  <dl @click="look(id)">
    <dt>
      <img :src="poster" alt>
    </dt>
    <dd>
      <li>{{name}}</li>
      <p>观众评分：{{grade}}</p>
      <p>
        主演:
        <span v-for="(item,index) in actors" :key="index">{{item.name}}</span>
      </p>
      <p>{{nation}}|{{runtime}}分钟</p>
    </dd>
  </dl>
</template>
<script>
import axios from "axios"
export default {
  props: ["name", "grade", "actors", "nation", "runtime", "poster","id"],
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {
      look(id){
          console.log(id)
          this.$router.push({name:"detail",params:{id:id}})
      }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="">
p {
  font-size: 12px;
  margin: 5px 0;
}
</style>
