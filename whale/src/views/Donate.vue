<template>
<div>
  <my-header class="bg-color header"></my-header>
  <div class="main">
    <div class="mian-l">
      <div class="mian-l-banner">
        <img src="../assets/img/head-l.jpg"  />
      </div>
      <div class="mian-l-list">
        <ul>
          <li class="list-li" v-for="(item,i) of list" :key="i">
            <div class="list-li-tu">
                <img :src="'http://127.0.0.1:3000/'+item.img"  />
            </div>
            <div class="list-li-data">
              <div class="list-li-title">
                <a href="javascript:;">{{item.title}}</a>
              </div>
              <div class="list-li-more">
                <img
                  src="https://www.52bjy.com/api/avatar/show.php?username=admin&amp;size=large"
                  alt
                />
                <span>{{item.author}}</span>
                <span>{{new Date(item.pushlish).toLocaleString()}}</span>
                <span @click="like(i)" class="star"><img src="../assets/img/wuxing.png"></span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="mian-r">
      <div class="mian-r-num">
        <div class="mian-r-num1">捐赠物资</div>
        <div class="mian-r-num2">
          <span id="num3">{{ Materials}}</span>KG
        </div>
      </div>
      <div class="main-r-help">
        <div class="main-r-help1">帮助申领</div>
        <a href="javascript:;">
          <div class="main-r-help2">我要帮助</div>
        </a>
      </div>
      <div class="main-r-gy">
        <div class="main-r-gy1">捡回珍珠计划</div>
        <div class="main-r-gy2">让每一个孩子都可以爱上读书</div>
        <a href="javascript:;">
          <div class="main-r-gy3">去支持</div>
        </a>
        <div class="main-r-gy4">执行机构新华爱心基金会</div>
      </div>
      <div class="main-r-tv">
        <div class="main-r-tv1">关注我们</div>
        <div class="main-r-tv2">新浪微博@白鲸鱼官方</div>
        <div class="main-r-tv2">客服电话：400-003-0226</div>
        <div class="main-r-tv2">客服微信：baijingyukf</div>
        <div class="main-r-tv3">
          <div class="main-r-ewm" >
            <img src="https://www.52bjy.com/ad/asdas.png" alt />
            <p>手机APP</p>
          </div>
          <div class="main-r-ewm">
            <img src="https://www.52bjy.com/ad/dasas.jpg" alt />
            <p>微信小程序</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="hide" id="msginfo">
    <span @click="closeinfo">×</span>
    <span id="msgcontent"></span>
  </div>
  <my-footer></my-footer>
</div>
</template>
<script>
export default {
  data(){
    return {
      list:[], 
      likei:"",
      likeimg:"../assets/img/wuxing.png",
      Materials:38800
    }
  },
  methods:{
    load(){
      this.axios.get("/company/list").then(result=>{
        this.list=result.data;
      })
    },
    like(i){
      var did=this.list[i].did;
      var spans=document.querySelectorAll(".star");
      this.axios.get("/user/addlike",{params:{did:did}}).then(result=>{
        if(result.data.code==200) {
          for(var j=0;j<spans.length;j++)
            if(i==j) spans[j].children[0].src=require("../assets/img/xingactive.png")
        }
        if(result.data.code==201) {
          for(var j=0;j<spans.length;j++)
            if(i==j) spans[j].children[0].src=require("../assets/img/wuxing.png")
        }
        msginfo.style.display="block";
        msgcontent.innerHTML=result.data.msg;
      })
    },
    getnum(){
      var text1=39160;   
      var timer=setInterval( ()=>{
        if(this.Materials<text1){
          this.Materials++;
        }else{
          clearInterval(timer)
        }
      },1);
    },
    closeinfo(){
      msginfo.style.display="none";
    }
  },
  created() {
    this.load();
    this.getnum();
  },
};
</script>
<style scoped>
#msginfo{
  position:fixed;
  width: 10rem;
  height: 10rem;
  text-align: center;
  top:0;
  left:0;
  bottom:0;
  right:0;
  margin:auto;
  background-color:rgba(255,0,0,0.3);
}
#msginfo span:first-child{
  position:absolute;
  width: 2rem;
  height: 2rem;
  top:0;
  left:8rem;
  color:#333;
  font-size:2rem;
  cursor: pointer;
}
#msginfo #msgcontent{
  width: 10rem;
  height: 8rem;
  line-height: 6rem;
  position:absolute;
  color:#fff;
  left:0;
  top:2rem;
}
.main {
  display: flex;
  width: 75rem;
  margin: 0 auto;
  padding-top:4rem;
}
.mian-l {
  width: 50rem;
}
.mian-l-banner img {
  width:  50rem;
  height: 18.75rem;
}
.list-li {
  display: flex;
  padding: 1rem 0;
  border-bottom: 1px solid #e1e1e1;
}
.list-li-tu {
  width: 15.625rem;
}
.list-li-tu img {
  width: 15.625rem;
}
.list-li-title {
  padding: 1.875rem 0;
}
.list-li-title a {
  font-size: 1.125rem;
  color: #333;
}
.list-li-data {
  display: block;
  width: 34.375rem;
  margin-left: 0.625rem;
}
.list-li-more {
  height: 1.5625rem;
}
.list-li-more > span {
  margin-right: 0.625rem;
  font-size: 0.875rem;
  color: #aaa;
  line-height: 1.5625rem;
}
.list-li-more span:last-child{
  float:right;
}
.list-li-more img {
  width: 1.5625rem;
  height: 1.5625rem;
  border-radius: 50%;
  margin-right: 0.625rem;
}
.mian-more a {
  width: 6.25rem;
  height: 1.875rem;
  font-size: 1.125rem;
  color: #fff;
  background: #ff6375;
  margin: 1.25rem auto;
  border-radius: 3.125rem;
  text-align: center;
  line-height: 1.875rem;
  display: block;
}
.mian-r {
  width: 24rem;
  margin-left: 0.625rem;
}
.mian-r-num {
  width: 100%;
  height: 18.75rem;
  border: 1px solid #e1e1e1;
  box-sizing: border-box;
  padding-top: 3.125rem;
  margin-bottom: 0.625rem;
  background: url(https://www.52bjy.com/ad/crowd/crowd-bg.jpg) no-repeat;
  background-size: cover;
}
.mian-r-num1 {
  margin-left: 8.125rem;
  font-size: 1.125rem;
  color: #aaa;
  margin-bottom: 5px;
}
.mian-r-num2 {
  margin-left: 8.125rem;
  font-size: 1.875rem;
  margin-bottom: 0.625rem;
  color: #aaa;
}
#num3,
#num4 {
  color: #ff6375;
}
.main-r-help {
  width: 100%;
  margin-bottom: 0.625rem;
  background: #fd9b9a;
  padding-bottom: 0.625rem;
}
.main-r-help1 {
  font-size: 1.875rem;
  color: #fff;
  padding: 0.625rem;
  text-align: center;
}
.main-r-help2 {
  width: 80%;
  margin: 0.625rem auto;
  background: #f05e5e;
  text-align: center;
  padding: 0.625rem 0;
  color: #fff;
  font-size: 1.125rem;
  border-radius: 2px;
}
.main-r-gy {
  width: 100%;
  margin-bottom: 0.625rem;
  height: 8.125rem;
  background: url(https://www.52bjy.com/ad/crowd/zzjh.jpg) no-repeat;
  background-size: cover;
  padding: 1.875rem 0 1rem;
}
.main-r-gy1 {
  color: #fff;
  font-size: 1.25rem;
  margin: 0 0 0.3125rem 0.625rem;
}
.main-r-gy2 {
  color: #fff;
  font-size: 0.75rem;
  margin: 0 0 0.625rem 0.625rem;
}
.main-r-gy3 {
  padding: 0.3125rem 0;
  background: #ff6375;
  color: #fff;
  font-size: 1rem;
  margin: 0 0 1.25rem 0.625rem;
  width: 6.25rem;
  text-align: center;
}
.main-r-gy4 {
  font-size: 0.875rem;
  color: #fff;
  margin: 0 0 0 0.625rem;
}
.main-r-tv {
  width: 100%;
  padding: 0.625rem;
  background: #f4f4f4;
}
.main-r-tv1 {
  font-size: 1.125rem;
  color: #666;
  margin-bottom: 0.3125rem;
}
.main-r-tv2 {
  font-size: 1rem;
  color: #666;
  margin-bottom: 0.625rem;
}
.main-r-tv3 {
  display:flex;
  justify-content: space-between;
}
.main-r-ewm {
  /* float: left; */
  width: 10rem;
}
.main-r-ewm img {
  width: 100%;
  margin-bottom: 0.625rem;
}
.main-r-ewm p {
  color: #000;
  font-size: 1rem;
  text-align: center;
}
.main-r-tv3:after {
  content: ".";
  display: block;
  clear: both;
  height: 0;
  overflow: hidden;
  visibility: hidden;
}
</style>