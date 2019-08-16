<template>
  <div class="main">
    <!-- 这是轮播图部分  -->
    <div id="demo" class="carousel" data-ride="carousel">
      <!-- 1.轮播图片carousel-inner-->
      <div class="carousel-inner">
        <div class="carousel-item" v-for="(item,i) of list" :key="i" :class="{active:i==num}" :style="{backgroundColor:item.bgcolor}">
        <img class="combanner1" :src="'http://127.0.0.1:3000/'+item.left_img"/>
        <img class="combanner2" :src="'http://127.0.0.1:3000/'+item.right_img" />
        </div>
      </div>
      <!-- 1.2.左右箭头-->
      <a data-slide="prev" href="#demo" class="carousel-control-prev">
      </a>
      <a data-slide="next" href="#demo" class="carousel-control-next">
      </a>
      <!-- 1.3.轮播指示器-->
      <ul class="carousel-indicators">
        <li data-target="#demo" data-slide-to="0" class="active"></li>
        <li data-target="#demo" data-slide-to="1"></li>
        <li data-target="#demo" data-slide-to="2"></li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      num:-1,
    }
  },
  props:["list"],
  methods:{
    play(){
			this.num++;
			if(this.num==this.list.length) this.num=0;
		},
  },
  created(){
    this.play();
  }
};
</script>
<style scoped>
/* 轮播图区域 */
.carousel-indicators {
  margin-bottom: 1.875rem;
  display: flex;
  padding-left: 0;
  margin-right: 15%;
  margin-left: 15%;
}
/* 1.2轮播图左右箭头 */
.carousel-control-prev,.carousel-control-next{
  top:50%;
  width: 5rem;
}
.carousel-control-prev{
  background:url("../assets/img/l-btn.png")no-repeat;
  left:5%
}
.carousel-control-next {
  background:url("../assets/img/r-btn.png")no-repeat;
}
/* 1.3.轮播指示器 */
.carousel-indicators li {
  display: inline-block;
  width:5rem;
  height: 0.6125rem;
  margin-right: 0.678rem;
  background: #444;
  opacity: 0.3;
  -moz-opacity: 0.3;
  filter: alpha(opacity=30);
  overflow: hidden;
}
/*指示器默认选中状态*/
.carousel-indicators li.active {
  background: #fb5e5e;
}
/*轮播图左边图片*/
.combanner1 {
  width: 34.375rem;
  height: 13.75rem;
  position: absolute;
  left: 15%;
  top: 15%;
}
/*轮播图右边图片*/
.combanner2 {
  width: 31.25rem;
  height: 23.75rem;
  margin-left: 50rem;
}
</style>