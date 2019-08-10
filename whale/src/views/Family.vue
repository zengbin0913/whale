<template>
  <div>
    <my-header></my-header>
    <div class="container">
      <div class="subnav">商品>{{family.fname}}</div>
      <div class="row bg-family m-0">
        <div class="col-md-6 col-sm-12 p-0 py-2">
          <img :src="'http://127.0.0.1:3000/'+imgs" />
        </div>
        <div class="col-md-6 col-sm-12 p-0 py-5">
          <h3 class="title">{{family.fname}}</h3>
          <p class="detail font-small">{{family.fdetails}}</p>
        </div>
      </div>
      <div v-for="(item,i) of jclass" :key="i"> <!--经典彩宝-->
        <div class="row m-0 bg-color py-2 first">
          <div class="col-md-6 col-sm-12 p-0 py-4 text-center px-1">
            <h3 class="title">{{item.cname}}</h3>
            <p class="detail font-small">{{item.cdetails}}</p>
          </div>
          <div class="col-md-6 col-sm-12 p-0 py-2">
            <img :src="'http://127.0.0.1:3000/'+item.cimg" />
          </div>
        </div>
        <div class="row m-0 bg-white" >
          <div class="col-md-3 col-sm-6 p-0 py-2" v-for="(p,j) of product" :key="j" v-show="item.cid==p.cid"> 
            <router-link :to="p.href" class="de"><img :src="'http://127.0.0.1:3000/'+p.img" class="imgheight" />
            <p class="font-small">{{p.pname}}</p></router-link>
          </div>
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
      family:{},
      jclass:[],
      product:[],
      imgs:"caibao.png"
    }
  },
  methods:{
    load(){
      var fid = this.$route.query.fid; //获得url地址栏中的参数
      this.axios.get("/product/list",{params:{fid:fid}}).then(result=>{
         this.family=result.data.family;
         this.jclass=result.data.jclass;
         this.product=result.data.product;
         this.imgs=result.data.family.fimg;
      })
    }
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
.subnav {
  background-color: #929292;
  color: #fff;
  text-align: left;
  padding-left: 2rem;
  height:60px;
  line-height:60px;
}
.title {
  font-size: 1.5rem;
  color: #929292;
}
.first {
  border-top: 1px solid #393939;
}
.imgheight {
  height: 200px;
  width: 100%;
}
.bg-color{
  background-color:#e1e7a1
}
.bg-family{
  background-color:#cfe9e6;
}
.de{
  color:#2c3e50;
  text-decoration: none;
}
</style>

