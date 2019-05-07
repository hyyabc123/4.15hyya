<template>
  <div class="main">
    <div class="mian_">
      <div class="main_main">
        <div class="banner">
          <my-banner :bannerList="bannerList"></my-banner>
        </div>
        <li class="hot">
          <span
            @click="fn(index)"
            v-for="(item,index) in spanList"
            :key="index"
            :class="{'active':index==ind}"
          >正在热映</span>
        </li>
        <div class="box">
          <router-view></router-view>
        </div>
      </div>
    </div>
    <my-footer></my-footer>
  </div>
</template>
<script>
import myBanner from "../components/banner";
import Swiper from "swiper";
import axios from "axios";
export default {
  props: {},
  components: {
    myBanner
  },
  data() {
    return {
      bannerList: [],
      ind: 0,
      spanList: [
        {
          tit: "正在热映"
        },
        {
          tit: "即将上映"
        }
      ]
      // flag:true
    };
  },
  computed: {},
  methods: {
    fn(index) {
      this.ind = index;
      if (index == 0) {
        this.$router.push({ name: "hot" });
      } else {
        this.$router.push({ name: "fast" });
      }
    }
  },
  created() {
    axios.get("/api/banner").then(res => {
      this.bannerList = res.data.data;
      this.$nextTick(() => {
        new Swiper(".banner1", {});
      });
    });
  },
  mounted() {}
};
</script>
<style  lang="">
.hot {
  width: 100%;
  height: 40px;
  display: flex;
}
.hot span {
  flex: 1;
  text-align: center;
  line-height: 40px;
}
.hot .active {
  color: orange;
}
html,
body,
#app,
.main {
  width: 100%;
  height: 100%;
}
.main {
  display: flex;
  flex-direction: column;
}
.main_{
  flex: 1;
  display: flex;
}
.main_main {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.main_main .box{
  width: 100%;
  height: 378px;
  overflow: auto;
}
.main .main_ .main_main {
  flex: 1;
}

</style>