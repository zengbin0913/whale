<template>
  <div class="main">
     <my-header  class="header" :style="{'background-color':bgColor}"></my-header>
    <!-- 这是轮播图部分  -->
    <div id="demo" class="carousel" data-ride="carousel">
      <!-- 1.轮播图片carousel-inner-->
      <div class="carousel-inner">
        <div class="carousel-item" v-for="(item,i) of list" :key="i" :class="{active:i==num}" :style="{backgroundColor:item.bgcolor}">
          <router-link to="/waybill">
            <img class="banner1" :src="'http://127.0.0.1:3000/'+item.left_img"/>
            <img class="banner2" :src="'http://127.0.0.1:3000/'+item.right_img" />
          </router-link>
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
    <!-- 项目规划区域-->
    <div id="intr">
      <div class="my_width">
        <div class="plan">
          <a class=" pearl" href="https://www.52bjy.com/about/zhenzhu.html" style="color:#fff">
          <h3>珍珠计划</h3>
          <p>在我们国内很多贫困山区还很落后，很多地方的孩子都没机会上学，对白鲸鱼而言，他们都是遗落的珍珠。</p>
          </a>
        </div>
        <div class="plan" style="border-left:0">
          <h3>蔚蓝计划</h3>
          <p>明星的行为往往会影响一代人，白鲸鱼启动蔚蓝计划希望能够通过明星后援团的力量改变公益的方式。</p>
        </div>
      </div>
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
  },
  computed:{
    bgColor(){
      document.onscroll=function(){
      var header=document.getElementsByClassName("header")[0];
      var scoll=document.documentElement.scrollTop||document.body.scrollTop;
      if(scoll>0) {header.style.backgroundColor="#ff6375";header.style.opacity=scoll/440;}
      else {header.style.backgroundColor="";header.style.opacity="";}
      }
    }
  }
};
</script>
<style scoped>
.main{
  width: 100%;
  height: 37.5rem;
  position:relative;
}
.carousel{
  height: 37.5rem;
}
#intr {
  width: 100%;
  height: 7.5rem;
  background: rgba(255,255,255,0.3);
  color: #ffffff;
  box-sizing: border-box;
  position:absolute;
  left:0;bottom:0;
  
}
/*内容区域公共宽度1200px*/
.my_width,
.co2-h1,
.co2-h1 h1,
.bjyju-item {
width: 75rem;
}
/*内容区域文字居中显示*/
.my_width .plan,
#intr .my_width h3,
.co2,
.co2-h1 h1,
.bjyju-item,
.bjyju-item-h4,
.span-text span {
  text-align: center;
}
.my_width,
.bjyju-item {
  margin: 0 auto;
}
.my_width {
  display: flex;
}
/* 计划内容 */
.my_width .plan {
  width: 37.5rem;
  height: 7.5rem;
  border-left: 0.0625rem solid #ffffff;
  border-right: 0.0625rem solid #ffffff;
}
#intr .my_width h3 {
  font-size: 1.5rem;
  margin: 0.625rem 0;
}
#intr .plan p {
  padding: 0 1.875rem;
  font-size: 1rem;
}
.carousel-inner,.carousel-item{
  height:100%;
}
/* 轮播图区域 */
.carousel-indicators {
  display:fixed;
  bottom:11.875rem; left:0;
  height: 4rem;
  display: flex;
  padding-left: 0;
  margin-right: 15%;
  margin-left: 15%;
  padding-top:3.75rem;
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
  width: 1.875rem;
  height: 0.3125rem;
  margin-right: 0.678rem;
  background: #444;
  opacity: 0.3;
  -moz-opacity: 0.3;
  filter: alpha(opacity=30);
  overflow: hidden;
}
/*指示器默认选中状态*/
.carousel-indicators li.active {
  background: #fff;
}
/*轮播图左边图片*/
.banner1 {
  width: 34.375rem;
  height: 13.75rem;
  position: absolute;
  left: 15%;
  top: 15%;
}
/*轮播图右边图片*/
.banner2 {
  position: absolute;
  right: 10%;
  top: 8%;
}
</style>