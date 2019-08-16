<template>
    <div>
      <my-header></my-header>
      <carousel :list="list"></carousel>  
    </div>
</template>
<script>
import carousel from "../components/Com_carousel.vue";
export default {
  data() {
    return {
      list: [] //轮播图信息,父组件给子组件传值
    };
  },
  components: {carousel },
  created() {
    this.axios.get("/company/carousel").then(result => {
      this.list = result.data;
    });
  }
};
</script>