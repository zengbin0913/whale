<template>
  <div>
    <my-header></my-header>
    <div class="container">
      <div class="type-bg">
         <h3 class="type">{{jclass.cname}}</h3>
         <p class="details">{{jclass.cdetails}}</p>
      </div>
      <div class="row m-0 pt-4">
        <div class="col-md-6 col-sm-12">
          <img :src="'http://127.0.0.1:3000/'+imgs" />
        </div>
        <div class="col-md-6 col-sm-12">
          <div class="buy">
            <p>{{product.pname}}</p>
            <a href="https://enzo.tmall.com/"></a>
          </div>
        </div>
      </div>
      <div class="relative-product mt-5">
        <div class="relatives type-bg">
          <div class="before"></div>
          <div class="titles">相关产品</div>
          <div class="after"></div>
        </div>
        <div class="product-list">
          <div class="prev" @click="go(-1)" id="prev" :class="{disabled:leftDisabled}"></div>
          <div id="imgId">
            <ul :style="ulStyle">
              <li v-for="(item,i) of list" :key="i">
                <router-link :to="item.href" class="fonts">
                  <img :src="'http://127.0.0.1:3000/'+item.img"><br>
                  <span>{{item.pname}}</span>
                </router-link>
              </li>
            </ul>
          </div>
          <div class="next" @click="go(1)" id="next" :class="{disabled:rightDisabled}"></div>
        </div>
      </div>
    </div>
    <my-footer></my-footer>
  </div>
</template>
<script>
export default {
  data(){
    return{
      product:{},
      jclass:{},
      list:[],
      cname:"",
      imgs:"type1_jiezhi.jpg",
      ulStyle:{//控制ul的样式
        "margin-left":0,  //绑定margin-left,控制移动的距离
        transition:""
      },
      times:0,  //计算左移的次数  ulStyle的margin-left=-times*62
    }
  },
  methods:{
    load(){
      var pid = this.$route.query.pid; //获得url地址栏中的参数
      this.axios.get("/product/details",{params:{pid,pid}}).then(result=>{
        this.product=result.data.product[0];
        this.jclass=result.data.jclass[0];
        this.list=result.data.list;
        this.imgs=this.product.img;
      })
    },
    go(i){
       if((i==-1 && this.leftDisabled==false)||(i==1 && this.rightDisabled==false))
        this.times+=i;
    }
  },
  computed:{
    leftDisabled(){//左边按钮的禁用
      return this.times==0;
    },  
    rightDisabled(){//右边按钮的禁用
      return this.list.length<=4 || this.times==this.list.length-4
    }
  },
  watch:{ //监控变化
    times(){//当times变化时,自动修改ul的margin-left
      this.ulStyle["margin-left"]=-this.times*8.75+"rem";
    },
  },
  created(){
    this.load();
  },
  updated() {
     this.load();
  },
};
</script>
<style scoped>

.container {
  background-color: #fff;
}
.type-bg{
  background-color: #cfe9e6;
}
.type {
  border-bottom: 1px solid #393939;
  font-size: 0.9rem;
  line-height: 1.75rem;
}
.buy{
  width: 100%;
  height: 100%;
  text-align:center;
  background:#e1e7a1;
}
.details {
  color: #909090;
  font-size: 0.8rem;
}
.buy p {
  color: #909090;
  height: 30px;
  line-height: 30px;
  padding-top:2rem;
}
.buy a {
  display: block;
  height: 3rem;
  background: url("../assets/img/buy.png") no-repeat center;
  background-size: contain;
  margin-top:2.5rem;
}
.relatives{
  display:flex;
  height: 1.75rem;
  position: relative;
  justify-content: flex-start;
}
.before,.after {
  width: 35%;
  border-bottom: 1px solid #393939;
  position:absolute;
  top:50%;
}
.after{
  left:65%
}
.titles{
  width: 30%;
  position:absolute;
  left:35%
}
.product-list{
  display: flex;
}
#imgId{
  width: 80%;
  overflow: hidden;
}
.prev{
  width: 10%;
  background: url("../assets/img/prev.png") no-repeat center;
}
.next{
  width: 10%;
  background: url("../assets/img/next.png") no-repeat center;
}
.product-list ul{
  display:flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}
.product-list ul li{
  width: 8.75rem;
}
.product-list ul li img{
  height: 180px;
  width: 140px;
}
.prev:hover,.next:hover{
  cursor: pointer;
}
.fonts{
  color:#929292;
  font-weight: bold;
  text-decoration: none;
}
</style>

