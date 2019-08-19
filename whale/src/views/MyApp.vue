<template>
  <div>
    <my-header class="header"></my-header>
    <div id="app-title">
      <div class="app_box">
        <div class="iphone"><img src="../assets/img/iphonex.png"/></div>
        <div class="app-box-r">
          <img src="../assets/img/bjyapplogo.png"/>
          <h3 style="color:#f0f0f0;">旧衣服上门回收领导品牌</h3>
        </div>
        <div class="div1">
          <img src="../assets/img/asdas.png" alt />
          <div class="banner-box">
            <div class="banner">
              <a href="https://apps.apple.com/cn/app/id1282314154">
                <img src="../assets/img/ios.png" alt />
              </a>
              <div class="banner-a">
                <a href="https://apps.apple.com/cn/app/id1282314154" target="blank">IOS下载</a>
              </div>
            </div>
            <div class="banner">
              <a href="https://sj.qq.com/myapp/detail.htm?apkName=com.fangxd.baijingyu">
                <img src="../assets/img/android.png" alt />
              </a>
              <div class="banner-a">
                <a
                  href="https://sj.qq.com/myapp/detail.htm?apkName=com.fangxd.baijingyu"
                  target="blank"
                >安卓下载</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="app_mode">
      <h1>丰富的渠道支持</h1>
      <div class="app_mode_m">
        <a href="https://sj.qq.com/myapp/detail.htm?apkName=com.fangxd.baijingyu">
          <img src="../assets/img/qudao-appstore.jpg" >
        </a>
        <a href="https://apps.apple.com/cn/app/id1282314154">
          <img src="../assets/img/qudao-huawei.jpg" >
        </a>
        <a href="https://appstore.huawei.com/app/C100092145">
          <img src="../assets/img/qudao-oppo.jpg">
        </a>
        <a href="http://app.mi.com/details?id=com.fangxd.baijingyu">
          <img src="../assets/img/qudao-xiaomi.jpg">
        </a>
        <a href="https://appstore.huawei.com/app/C100092145">
          <img src="../assets/img/qudao-yyb.jpg">
        </a>
      </div>
    </div>
    <div class="app_itr">
      <div class="app_itr_box">
        <img src="../assets/img/app1.png" alt />
      </div>
      <div class="app_itr_r">
        <h1>便捷的使用体验</h1>
        <p>GPS自动定位，节省输入时间</p>
        <p>毫秒级3秒完成注册登录</p>
        <p>订单状态实时同步更新</p>
      </div>
    </div>
    <div class="app_itr1">
      <div class="app_itr1_box">
        <h1>完善的积分系统</h1>
        <p>玩法多样的积分商城</p>
        <p>分享好友轻松赚鲸鱼币</p>
        <p>全自动化回收赚取鲸鱼币</p>
      </div>
      <div class="app_itr1_r">
        <img src="../assets/img/app2.png" alt />
      </div>
    </div>
    <div class="app_itr">
      <div class="app_itr_box">
        <img src="../assets/img/app3.png" alt />
      </div>
      <div class="app_itr_r">
        <h1>智能的订单管理</h1>
        <p>全自动下单系统无认为干预</p>
        <p>预约状态实时查看短信跟踪</p>
        <p>自助催单尽显人性化特色</p>
      </div>
    </div>
    <my-footer></my-footer>
  </div>
</template>
<script>
export default {
  data(){
    return{}
  },
  created(){},
  updated(){
     window.onscroll=function(){
      var header=document.getElementsByClassName("header")[0];
      var scoll=document.documentElement.scrollTop||document.body.scrollTop;
      console.log(scoll);
      if(scoll>=440)header.style.backgroundColor="#ff6375";
      else header.style.backgroundColor="transparent";
    }
  }
};
</script>
<style scoped>
#app-title {
  background: url(../assets/img/111.jpg) no-repeat;
  width: 100%;
  height: 33rem;
  box-sizing: border-box;
  padding-top:3.75rem;
}
.app_box {
  width: 75rem;
  height: 28.25rem;
  margin: 0 auto;
  position: relative;
}
.iphone {
  position: absolute;
  top: 3.75rem;
  left: 17rem;
}
.app-box-r {
  width: 23.125rem;
  height: 23.6875rem;
  position: absolute;
  top: 3.1875rem;
  left: 36.875rem;
}
.app-box-r h3{
  margin-top:1.5rem;
}
.div1 {
  width: 23.125rem;
  height: 9.375rem;
  display: flex;
  position: absolute;
  top: 13.6875rem;
  left: 36.8125rem;
}
.banner-box {
  width: 12.5rem;
  height: 9.375rem;
  margin-left:2rem;
}
.banner {
  width: 12.5rem;
  height: 4.0625rem;
  border: 1px solid pink;
  border-radius: 55px;
  box-sizing: border-box;
  margin-bottom: 10px;
  display: flex;
  font-size: 22px;
  background: #fff;
}
.banner img {
  margin: 12px 12px 0px 12px;
}
.banner-a {
  width: 88.47px;
  height: 65px;
  line-height: 4.0625rem;
}
.banner-a a {
  color: #ff6375;
}
.app_mode {
  width: 100%;
  height: 16rem;
  margin:0 auto;
}
.app_mode h1 {
  margin-top: 1rem;
  margin-bottom: 3rem;
  color: #666;
  text-align: center;
  font-size:1.5rem;
}
.app_mode_m{
  margin:0 auto;
  display:flex;
  justify-content: space-between;
  width: 62rem;
}
.app_mode img {
  border: 1px solid #666666;
  cursor: pointer;
  transition: all 0.6s;
}
.app_mode img:hover {
  transform: scale(1.05);
}
.app_itr,.app_itr1{
  width: 100%;
  height: 26.25rem;
  background: #f0f0f0;
  display: flex;
}
.app_itr_box{
  width: 50%;
  text-align: right;
}
.app_itr_box img {
  margin-top:0.625rem;
  transition: all 0.6s;
}
.app_itr_box img:hover {
  transform: scale3d(1.1, 1.1, 1.1);
}
.app_itr_r,.app_itr1_box {
  width: 50%;
  margin-left:10rem;
  margin-top:5rem;
}
.app_itr_r h1,.app_itr1_box h1{
  font-size:2.5rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
}
.app_itr_r p,.app_itr1_box p{
  font-size: 1rem;
  color: #000;
  margin-top: 1rem;
}
.app_itr1_box p,.app_itr1_box h1{
  margin-left:4rem;
}
.app_itr1 {
  background: #fff;
}
.app_itr1_r {
  width: 50%;
  text-align: left;
}
</style>>