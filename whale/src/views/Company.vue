<template>
  <div>
    <carousel :list="list"></carousel>
    <div class="md-blue">
      <div class="md-box">
        <div class="title">多种活动参与方式</div>
        <div class="subtitle">轻松工艺 简单环保</div>
      </div>
      <div class="md-tab" @click="handle">
        <div class="md-tab1 active" id="tab1Title">联名活动</div>
        <div class="md-tab1" id="tab2Title">互补物资</div>
        <div class="md-tab1" id="tab3Title">更多可能</div>
      </div>
      <div class="content">
        <div class="md-text" id="tab1">
          <div class="md-text-l">
            <div class="md-text-title">联名企业活动</div>
            <div
              class="md-text-txt"
            >白鲸鱼会不定期开展旧衣捐赠到山区的活动，80%的活动都能得到精确反馈，通过横幅的形式展现品牌信息，为企业做品牌露出同时企业可以获得活动素材</div>
          </div>
          <div class="md-text-r">
            <img src="../assets/img/1608261718003.png" />
          </div>
        </div>
        <div class="md-text hide" id="tab2">
          <div class="md-text-l">
            <div class="md-text-title">互补物资活动</div>
            <div
              class="md-text-txt"
            >白鲸鱼会不定期开展旧衣捐赠到山区的活动，80%的活动都能得到精确反馈，通过横幅的形式展现品牌信息，为企业做品牌露出同时企业可以获得活动素材</div>
          </div>
          <div class="md-text-r">
            <img src="../assets/img/huibu.jpg" />
          </div>
        </div>
        <div class="md-text hide" id="tab3">
          <div class="md-text-l">
            <div class="md-text-title">更多可能</div>
            <div
              class="md-text-txt"
            >白鲸鱼会不定期开展旧衣捐赠到山区的活动，80%的活动都能得到精确反馈，通过横幅的形式展现品牌信息，为企业做品牌露出同时企业可以获得活动素材</div>
          </div>
          <div class="md-text-r">
            <img src="../assets/img/more.jpg" />
          </div>
        </div>
      </div>
    </div>
    <div class="md-md">
      <div class="md-box">
        <div class="title">白鲸鱼优势</div>
        <div class="subtitle">轻松工艺 简单环保</div>
      </div>
      <div class="md-main">
        <div class="md-arc" style="margin-right:150px;">
          <canvas id="myCanvas1" height="300" width="300"></canvas>
          <div class="md-arcm">
            <div class="md-arcm1">400000+</div>
            <div class="md-arcm2">注册用户</div>
          </div>
        </div>
        <div class="md-arc" style="margin-right:150px;">
          <canvas id="myCanvas2" height="300" width="300"></canvas>
          <div class="md-arcm">
            <div class="md-arcm1">25000+</div>
            <div class="md-arcm2">每日活跃用户</div>
          </div>
        </div>
        <div class="md-arc">
          <canvas id="myCanvas3" height="300" width="300"></canvas>
          <div class="md-arcm">
            <div class="md-arcm1">95%</div>
            <div class="md-arcm2">城市覆盖率</div>
          </div>
        </div>
      </div>
    </div>
    <div class="friend">
      <div class="friend-box">
        <div class="friend-title">合作伙伴与媒体</div>
        <div class="friend-txt">Partners and media</div>
        <ul class="friend-ul firstul">
          <li class="friend-li">
            <img src="../assets/img/023615601.jpg" alt="芝麻信用" />
          </li>
          <li class="friend-li">
            <img src="../assets/img/173047781.jpg" alt="新华爱心公益基金会" />
          </li>
          <li class="friend-li">
            <img src="../assets/img/171620491.jpg" alt="德邦快递" />
          </li>
          <li class="friend-li">
            <img src="../assets/img/171050161.jpg" alt="北京交通大学" />
          </li>
          <li class="friend-li" style="margin-right:0;">
            <img src="../assets/img/170751961.jpg" alt="火彩爱心公益" />
          </li>
        </ul>
        <ul class="friend-ul">
          <li class="friend-li">
            <img src="../assets/img/170342371.jpg" alt="新瑞公益" />
          </li>
          <li class="friend-li">
            <img src="../assets/img/165000411.jpg" alt="尚德机构" />
          </li>
          <li class="friend-li">
            <img src="../assets/img/163921621.jpg" alt="闪回收" />
          </li>
          <li class="friend-li">
            <img src="../assets/img/164847231.jpg" alt="有闲有品" />
          </li>
          <li class="friend-li friend-li2">
            <a href="list-104.html" target="_blank">更多</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="foot-copy">
      <span class="foot-style">
        &copy; 2013-2018 52bjy.com 版权所有 ICP证：
        <a
          href="javascript:;"
          target="_blank"
        >浙ICP备14000186号-10</a>
      </span>
    </div>
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
  methods: {
    handle(e) {
      var divs = document.querySelectorAll(".content>div");
      var ids = document.querySelectorAll(".md-tab>div");
      var targetid = e.target.id.substr(0, 4);
      for (var div of divs) {
        //内容显示
        if (div.id == targetid) div.style.display = "block";
        else div.style.display = "none";
      }
      for (var id of ids) {
        //导航样式
        if (id == e.target) {
          id.style.borderBottom = "0.25rem solid #ff6375";
          id.style.color = "#ff6375";
        } else {
          id.style.borderBottom = "0.25rem solid #bde1ff";
          id.style.color = "#4b91cf";
        }
      }
    },
    load() { //加载canvas绘图
      var rander = function(id) {
        var c = document.getElementById(id);
        var ctx = c.getContext("2d");
        var mW = c.width;
        var mH = c.height;
        var lineWidth = 10;
        var r = mW / 2; //中间位置
        var cR = r - 4 * lineWidth; //圆半径
        var startAngle = 0.75 * Math.PI; //开始角度--135
        var endAngle = startAngle + 1.5 * Math.PI; //结束角度
        var xAngle = 1 * (Math.PI / 180); //偏移角度量
        var fontSize = 35; //字号大小
        var tmpAngle = startAngle; //临时角度变量
        var timer = setInterval(function() {
          if (tmpAngle >= endAngle) return;
          else if (tmpAngle + xAngle > endAngle) tmpAngle = endAngle;
          else tmpAngle += xAngle;
          ctx.clearRect(0, 0, mW, mH); //清除画布
          ctx.beginPath();
          ctx.lineWidth = lineWidth;
          ctx.strokeStyle = "#ff6375";
          ctx.arc(r, r, cR, startAngle, tmpAngle);
          ctx.stroke();
          ctx.closePath();
        }, 10);
      };
      rander("myCanvas1");
      rander("myCanvas2");
      rander("myCanvas3");
    }
  },
  components: { carousel },
  created() {
    this.axios.get("/company/carousel").then(result => {
      this.list = result.data;
    }); 
  },
  mounted() {
    this.load();
  },
};
</script>
<style scoped>
.md-blue {
  background: #f1f8fe;
  padding: 1.25rem 0 3rem;
}
.title {
  font-size: 1.75rem;
  text-align: center;
  font-weight: bold;
  margin-bottom: 0.25rem;
}
.subtitle {
  font-size: 1rem;
  color: #999;
  text-align: center;
}
.md-tab {
  display: flex;
  width: 75rem;
  margin: 0 auto 2.5rem;
  margin-top: 1.25rem;
}
.md-tab1 {
  border-bottom: 0.25rem solid #bde1ff;
  width: 25rem;
  padding: 0.625rem 0;
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: #4b91cf;
  cursor: pointer;
}
.md-tab1.active {
  border-bottom: 0.25rem solid #ff6375;
  color: #ff6375;
}
.md-text {
  width: 75rem;
  margin: 0 auto;
}
.md-text-l {
  float: left;
  width: 32.5rem;
  padding-top: 3.125rem;
}
.md-text-title {
  font-size: 1.75rem;
  font-weight: bold;
  color: #3f678a;
  margin-bottom: 0.625rem;
}
.md-text-txt {
  font-size: 1.25rem;
  color: #3f678a;
  font-weight: bold;
  line-height: 2.25rem;
}
.md-text-r {
  float: right;
  width: 37.5rem;
}
.md-text-r img {
  width: 100%;
  border-radius: 0.625rem;
  border: none;
  display: block;
}
.md-text:after {
  content: ".";
  display: block;
  clear: both;
  height: 0;
  overflow: hidden;
  visibility: hidden;
}
.md-md .md-box {
  margin-top: 20px;
}
.md-main {
  width: 75rem;
  display: flex;
  margin: 0 auto;
}
.md-arc {
  width: 300px;
  position: relative;
}
#myCanvas1,
#myCanvas2,
#myCanvas3 {
  width: 300px;
  height: 300px;
}
.md-arcm {
  width: 300px;
  height: 300px;
  position: absolute;
  left: 0;
  top: 0;
}
.md-arcm1 {
  font-size: 38px;
  color: #ff6375;
  margin-bottom: 10px;
  text-align: center;
  margin-top: 110px;
}
.md-arcm2 {
  font-size: 16px;
  color: #ff6375;
  text-align: center;
}
.friend {
  width: 100%;
  padding: 1.25rem 0;
  background: #fff6f7;
  min-width: 75rem;
  margin-top: 3rem;
}
.friend-box {
  width: 75rem;
  margin: 0 auto;
}
/* 标题 */
.friend-title {
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.3125rem;
  text-align: center;
}
/* 文字 */
.friend-txt {
  font-size: 1rem;
  color: #666;
  text-align: center;
  margin-bottom: 1.25rem;
}
/* ul列表 */
.friend-ul {
  width: 75rem;
  display: flex;
  justify-content: space-between;
}
/* 合作伙伴上下图片间隔 */
.firstul {
  margin-bottom: 0.75rem;
}
/* ul li 的宽度和布局方式 */
.friend-ul li {
  list-style: none;
  width: 14.25rem;
  background: #fff;
  justify-content: space-around;
}

/* 设置图片大小 */
.friend-li img {
  width: 100%;
  border-radius: 0.125rem;
}

/* 加载更多 */
.friend-li2 {
  margin-right: 0;
  width: 14.25rem;
  height: 6.625rem;
  background: #fff;
  text-align: center;
}
.friend-li2 a {
  font-size: 1.875rem;
  font-weight: bold;
  line-height: 6.625rem;
  color: #666666;
}
/* 以下是版权信息设置 */
.foot-copy {
  width: 100%;
  background: #000;
  text-align: center;
  height: 4rem;
  line-height: 4rem;
}
/* 版权信息 */
.foot-copy .foot-style a {
  color: #666666;
}
/* 版权信息 */
.foot-copy span {
  color: #d0d0d0 !important;
}
</style>