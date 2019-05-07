<template>
  <div>
    <dl>
      <dt>
        <img :src="img" alt>
      </dt>
      <dd>
        <span>{{tit}}</span>
        <span>{{time1}}</span>
      </dd>
    </dl>
  </div>
</template>
<script>
export default {
  props: ["img", "tit", "time"],
  data() {
    return {};
  },
  computed: {
    time1() {
      return new Date(this.time).toLocaleDateString();
    }
  }
};
</script>
<style scoped lang="scss">

div {
  width: 100%;
  height: 100%;
  dl {
    display: flex;
    dt {
      flex: 2;
      img {
        width: 100%;
        height: 100%;
      }
    }
    dd {
      flex: 4;
    }
  }
}
</style>

