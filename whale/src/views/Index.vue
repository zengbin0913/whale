<template>
  <div>
    <my-header></my-header>
    <carousel></carousel>
    <div class="container">
      <div class="row mt-3">
        <div class="col-md-6 col-sm-12 pb-sm-3 pb-md-0">
          <router-link to="/family?fid=3">
            <div class="collection">
              <img src="../assets/img/omar.jpg" class="w-100" />
              <div class="text pt-sm-5 pt-md-4 pt-lg-5">
                <h3 class="text-white">OMAR 设计师系列</h3>
                <h5 class="text-white">Omar Torres</h5>
                <p class="text-white">大师级别珠宝设计师</p>
              </div>
            </div>
          </router-link>
        </div>
        <div class="col-md-6 col-sm-12">
          <router-link to="family?fid=2">
            <div class="collection">
              <img src="../assets/img/caihong.png" class="w-100" />
              <div class="text pt-sm-5 pt-md-4 pt-lg-5">
                <h3 class="text-white">天意系列</h3>
                <h5 class="text-white">Destiny</h5>
                <p class="text-white">以大自然为灵感，演绎生如夏花的璀璨绽放</p>
              </div>
            </div>
          </router-link>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-md-5 col-sm-12">
          <div
            class="collection text-center w-100 h-100"
            style="background-color:rgba(0, 0, 0, 0.24);"
          >
            <div class="pt-sm-2 pt-md-4 pt-lg-5 hover" @click="jump">
              <h3 class="text-white">多彩婚礼主义</h3>
              <h6 class="text-white">
                <span>COLORFUL WEDDING</span>
              </h6>
              <p class="text-white m-0 pt-1 font-small">首创多彩婚礼概念</p>
              <p class="text-white font-small">颠覆传统婚礼理念</p>
            </div>
          </div>
        </div>
        <div class="col-md-7 col-sm-12">
          <div class="collection">
            <img src="../assets/img/hunlidemo.jpg" class="w-100" />
          </div>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-md-7 col-sm-12 yinhe">
          <div class="collection">
            <img src="../assets/img/yinhe.png" class="w-100" />
          </div>
        </div>
        <div class="col-md-5 col-sm-12 yinhe2">
          <div class="collection w-100 h-100 bg-img">
            <div class="pt-sm-2 pt-md-4 pt-lg-5 text-center hover" @click="jump">
              <h3 class="text-white">银河之眸系列</h3>
              <h6 class="text-white">
                <span>GALAXY COLLECTION</span>
              </h6>
              <p class="text-white m-0 pt-1 font-small">耀动浩瀚星河的璀璨</p>
              <p class="text-white font-small">率先引入GemEx钻石美丽度标准</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-md-5 col-sm-12">
          <div class="collection text-center w-100 h-100 bg-img2">
            <div class="py-sm-2 pt-md-4 pt-lg-5 hover" @click="jump">
              <h3 class="text-white">丝带系列</h3>
              <h6 class="text-white">
                <span>RIBBON COLLECTION</span>
              </h6>
              <p class="text-white m-0 pt-1 font-small">爱如丝带 缠绵永恒</p>
            </div>
          </div>
        </div>
        <div class="col-md-7 col-sm-12">
          <div class="collection w-100 h-100">
            <img src="../assets/img/sidai.png" class="w-100" />
          </div>
        </div>
      </div>
    </div>
    <my-footer></my-footer>
  </div>
</template>
<script>
import Carousel from "../components/Carousel";
export default {
  data() {
    return {};
  },
  components: { Carousel },
  methods:{
    jump(){
      this.$router.push("/family?fid=3");
    }
  }
};
</script>
<style scoped>
.collection {
  position: relative;
}
.text {
  display: none;
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  text-align: center;
}
.collection:hover .text {
  display: block;
}
.collection span {
  border-bottom: 1px solid #fff;
  padding-bottom: 0.5rem;
}

@media (min-width: 768px) {
  /*中屏时*/
  .bg-img {
    background-image: url(../assets/img/yinhebg.png);
    background-position: 10% 10%;
  }
  .bg-img2 {
    background-image: url(../assets/img/sidai.jpg);
    background-position: 80% 0%;
  }
}
@media (max-width: 768px) {
  /*屏时*/
  .bg-img,
  .bg-img2 {
    background-color: rgba(0, 0, 0, 0.24);
    background-repeat: no-repeat;
  }
  .yinhe2 {
    position: relative;
    top: -240px;
  }
  .yinhe {
    position: relative;
    top: 130px;
  }
}
.hover {
  cursor: pointer;
}
</style>


