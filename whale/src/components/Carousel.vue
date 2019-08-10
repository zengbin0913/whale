<template>
<div class="container">
  <div class="carousel" data-ride="carousel" id="demo">
		<!-- 1轮播图片 -->
		<div class="carousel-inner">
			<div class="carousel-item" v-for="(item,i) of list" :key="i" :class="{active:i==num}">
				<a href=""><img :src="'http://127.0.0.1:3000/'+item.img" class="w-100"></a>
			</div>
		</div>
		<!-- 2左右箭头 -->
		<a href="#demo" class="carousel-control-prev" data-slide="prev">
			<span class="carousel-control-prev-icon"></span>
		</a>
		<a href="#demo" class="carousel-control-next" data-slide="next">
			<span class="carousel-control-next-icon"></span>
		</a>
		<!-- 3轮播指示器 -->
		<ul class="carousel-indicators">
			<li data-target="#demo" class="active" data-slide-to="0"></li>
			<li data-target="#demo" data-slide-to="1"></li>
			<li data-target="#demo" data-slide-to="2"></li>
			<li data-target="#demo" data-slide-to="3"></li>
		</ul>
	</div>
</div>
</template>
<script>
export default {
  data(){
    return{
			list:[],
			num:-1
    }
  },
  methods:{
		load(){
			this.axios.get("index/carousel").then(result=>{
				this.list=result.data;
			})
		},
		play(){
			this.num++;
			if(this.num==this.list.length) this.num=0;
		},
	},
	created(){
		this.load();
		this.play(); //加载完成时调用显示
	}
}
</script>
<style scoped>
  .carousel-control-prev,
					.carousel-control-next{
							width: 4%;
							height: 20%;
							top:40%;
							background-color: rgba(0,0,0,0.3);
							border-radius: 0.25rem;
					}
					.carousel-indicators li{
							width: 0.8rem;
							height: 0.8rem;
							background-color:#fff;
							border-radius:50%;
							margin-right:6px;
							margin-left:6px;
					}
					.carousel-indicators .active{
							background-color:#0aa1ed;
					}
</style>

