<template>
  <div>
    <carousel :list="list"></carousel>
    <!-- 公益平台大区域 上-->
    <div class="co2">
      <div class="co2-h1">
        <h1>国内领先的旧衣物捐赠环保公益平台</h1>
        <p class="text-center">环保公益不是我们做了多少，而是所有人都做一点点</p>
      </div>
      <!-- 平台数据展示 下-->
      <div class="bjyju">
        <div class="bjyju-item">
          <div class="bjyju-item-span">
            <h4 class="bjyju-item-h4">回收衣物</h4>
            <div class="span-text">
              <span>{{numtext1}}KG</span>
            </div>
          </div>
          <div class="bjyju-item-span">
            <h4 class="bjyju-item-h4">回收书籍</h4>
            <div class="span-text">
              <span>{{numtext2}}KG</span>
            </div>
          </div>
          <div class="bjyju-item-span">
            <h4 class="bjyju-item-h4">回收鞋包</h4>
            <div class="span-text">
              <span>{{numtext3}}KG</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 底部切换现状背景和解决方案 -->
    <div class="d-flex statu mt-1" @click="getsolve">
      <div class="tab-nav-title" id="present">现状背景</div>
      <div class="tab-nav-title" id="reply">解决方案</div>
    </div>
    <div class="d-flex d3">
      <div class="triangle">
        <div class="tab-nav-icon"></div>
      </div>
      <div class="triangle">
        <div class="tab-nav-icon"></div>
      </div>
    </div>
    <!-- 现状背景主体内容区域-->
    <div class="tab-box_div" id="presentContent">
      <div class="tab-box_div1">
        <!-- 左侧的3个div-->
        <div class="tab-box-list" @click="getlist">
          <div class="tab-box-list-item" id="list1">
            <p class="p1">资源极度浪费</p>
            <p class="p2">有效利用率不到10%</p>
          </div>
          <div class="tab-box-list-item" id="list2">
            <p class="p1">产生远超需求</p>
            <p class="p2">单纯捐赠无法消化</p>
          </div>
          <div class="tab-box-list-item" id="list3">
            <p class="p1">法律法规限时</p>
            <p class="p2">捐赠衣物要求严格</p>
          </div>
        </div>
        <!-- 右侧的主体文字+img-->
        <div class="tbm-info" id="list1Content">
          <p class="tbm-title">年产超过5000万吨，相当于2个大庆油田</p>
          <p
            class="tbm-txt"
          >据不完全统计，国内每年产生的超过5000万吨的旧衣服中，真正被有效利用的不到10%，随着人们生活水平的提高，旧衣服造成的资源量费正在进一步增加中 。</p>
          <div class="tab-info-imgs d-flex">
            <img src="../assets/img/xianzhuang1-1.jpg" />
            <img src="../assets/img/xianzhuang1-2.jpg" />
          </div>
        </div>
        <div class="tbm-info hide" id="list2Content">
          <p class="tbm-title">贫困地区的衣物需求正在减弱，需求呈现多样化</p>
          <p
            class="tbm-txt"
          >而我们近5年的数据统计来看，需要大批量接受捐助的地方越来越少，基本都是短期小量，单纯的旧衣服以及无法解决山区的贫困问题，白鲸鱼励志从多个维度寻找平衡点。</p>
          <div class="tab-info-imgs d-flex">
            <img src="../assets/img/xianzhuang2-1.jpg" />
            <img src="../assets/img/xianzhuang2-2.jpg" />
          </div>
        </div>
        <div class="tbm-info hide" id="list3Content">
          <p class="tbm-title">捐赠所需衣物要求严格，70%以上无法满足</p>
          <p
            class="tbm-txt"
          >根据相关法律的规定,因考虑到卫生与安全问题,内衣裤或T恤等直接接触皮肤类旧衣服不能进行二次捐助，而此类衣物产生量超过60%，单纯捐助无法解决困局。</p>
          <div class="tab-info-imgs d-flex">
            <img src="../assets/img/xianzhuang3-1.jpg" />
            <img src="../assets/img/xianzhuang3-2.jpg" />
          </div>
        </div>
      </div>
    </div>
    <div class="tab-box_div hide" id="replyContent">
      <div class="tab-box_div1">
        <!-- 左侧的3个div-->
        <div class="tab-box-list">
          <div class="tab-box-list-item">
            <p class="p1">再生加工处理</p>
            <p class="p2">50%以上的品种可以加工利用</p>
          </div>
          <div class="tab-box-list-item">
            <p class="p1">公益捐赠山区</p>
            <p class="p2">很多地方还很贫困</p>
          </div>
          <div class="tab-box-list-item">
            <p class="p1">出口第三世界</p>
            <p class="p2">战乱和落后国家同样需要</p>
          </div>
        </div>
        <!-- 右侧的主体文字+img-->
        <div class="tbm-info">
          <p class="tbm-title">大部分的纺织品都可以被再生加工，发挥二次价值</p>
          <p
            class="tbm-txt"
          >一些脏、破、烂等不能被捐赠或者无法满足出口需求的衣物，通常我们会将它们纤维化或者开花成再生棉，用于制作农业大棚被，毛绒玩具填充物和地毯原材料，包括一些工业隔音棉材料等</p>
          <div class="tab-info-imgs d-flex">
            <img src="../assets/img/fangan1-1.jpg" />
            <img src="../assets/img/fangan1-2.jpg" />
          </div>
        </div>
      </div>
    </div>
    <!-- 活动资讯&news-->
    <div class="news">
      <div class="news-box">
        <div class="news-title">活动资讯推荐</div>
        <div class="news-txt">公益活动，新闻趣事，官方公告一目了然</div>
        <div class="news-first">
          <div class="news-second">
            <a href="javascript:;">
              <img src="../assets/img/025423911.jpg" />
            </a>
            <a href="javascript:;" class="news-name">四川苟哇村一松寨当地小学活动反馈</a>
          </div>
          <div class="news-second">
            <a href="javascript:;">
              <img src="../assets/img/01482874226381.jpg" />
            </a>
            <a href="javascript:;" class="news-name">白鲸鱼重聚青海玉树藏族自治州捐赠旧衣服</a>
          </div>
          <div class="news-second">
            <a href="javascript:;">
              <img src="../assets/img/014425411.jpg" />
            </a>
            <a href="javascript:;" class="news-name">开年第一波，您捐赠的衣物已经送达</a>
          </div>
        </div>
        <div class="news-first mt-4">
          <div class="news-second">
            <a href="javascript:;">
              <img src="../assets/img/191658741.jpg" />
            </a>
            <a href="javascript:;" class="news-name">四川苟哇村一松寨当地小学活动反馈</a>
          </div>
          <div class="news-second">
            <a href="javascript:;">
              <img src="../assets/img/023439201.jpg" />
            </a>
            <a href="javascript:;" class="news-name">旧衣服捐赠之四川攀枝花贫困区反馈</a>
          </div>
          <div class="news-second">
            <a href="javascript:;">
              <img src="../assets/img/1608261718003.png" />
            </a>
            <a href="javascript:;" class="news-name">旧衣公益新疆阿克苏白鲸鱼留下爱的足迹</a>
          </div>
        </div>
        <div class="news-third">
          <router-link class="news-more" to="/donate">查看更多</router-link>
        </div>
      </div>
    </div>
    <!--国内地图白鲸鱼的身影  -->
    <div class="Chinamap">
      <div class="map_title">
        <h1 class="map_title_h1">无处不在的身影</h1>
        <p>国内大部分地区都有白鲸鱼的身影</p>
      </div>
      <!--显示map上的不同颜色转态点  -->
      <div class="show_map">
        <div class="show_map1 a_red">
          <div class="kt_city pluse3"></div>
          <span>开通城市</span>
        </div>
        <div class="show_map2">
          <div class="help_city pluse4"></div>
          <span>帮助城市</span>
        </div>
      </div>
      <!--map上各省份的文字和定位点  -->
      <div class="map_ser">
        <div class="a1">
          <div class="pluse"></div>
          <span>黑龙江</span>
        </div>
        <div class="a2">
          <div class="pluse"></div>
          <span>吉林</span>
        </div>
        <div class="a3">
          <div class="pluse"></div>
          <span>辽宁</span>
        </div>
        <div class="a4">
          <div class="pluse"></div>
          <span>北京</span>
        </div>
        <div class="a5">
          <div class="pluse"></div>
          <span>天津</span>
        </div>
        <div class="a6">
          <div class="pluse"></div>
          <span>河北</span>
        </div>
        <div class="a7">
          <div class="pluse"></div>
          <span>山东</span>
        </div>
        <div class="a8">
          <div class="pluse"></div>
          <span>河南</span>
        </div>
        <div class="a9">
          <div class="pluse"></div>
          <span>陕西</span>
        </div>
        <div class="a10">
          <div class="pluse"></div>
          <span>安徽</span>
        </div>
        <div class="a11">
          <div class="pluse"></div>
          <span>江苏</span>
        </div>
        <div class="a12">
          <div class="pluse"></div>
          <span>浙江</span>
        </div>
        <div class="a13">
          <div class="pluse"></div>
          <span>湖北</span>
        </div>
        <div class="a14">
          <div class="pluse"></div>
          <span>湖南</span>
        </div>
        <div class="a15">
          <div class="pluse"></div>
          <span>江西</span>
        </div>
        <div class="a16">
          <div class="pluse"></div>
          <span>福建</span>
        </div>
        <div class="a17">
          <div class="pluse"></div>
          <span>广东</span>
        </div>
        <div class="a18">
          <div class="pluse1"></div>
          <span>四川大凉山地区</span>
        </div>
        <div class="a19">
          <div class="pluse"></div>
          <span>重庆</span>
        </div>
        <div class="a20">
          <div class="pluse"></div>
          <span>甘肃</span>
        </div>
        <div class="a21">
          <div class="pluse1"></div>
          <span>青海地区</span>
        </div>
        <div class="a22">
          <div class="pluse1"></div>
          <span>西藏地区</span>
        </div>
        <div class="a23">
          <div class="pluse1"></div>
          <span>云南</span>
        </div>
        <div class="a24">
          <div class="pluse"></div>
          <span>贵州</span>
        </div>
        <div class="a25">
          <div class="pluse1"></div>
          <span>广西</span>
        </div>
        <div class="a26">
          <div class="pluse"></div>
          <span>海南</span>
        </div>
        <div class="a27">
          <div class="pluse1"></div>
          <span>内蒙</span>
        </div>
        <div class="a28">
          <div class="pluse1"></div>
          <span>新疆</span>
        </div>
      </div>
    </div>
    <!-- 合作伙伴 -->
    <div class="friend">
      <div class="friend-box">
        <div class="friend-title">合作伙伴与媒体</div>
        <div class="friend-txt">Partners and media</div>
        <ul class="friend-ul">
          <li class="friend-li">
            <img src="../assets/img/18542191706172.jpg" alt="附近家政" />
          </li>
          <li class="friend-li">
            <img src="../assets/img/163045151.jpg" alt="爱回收" />
          </li>
          <li class="friend-li">
            <img src="../assets/img/155555871.jpg" alt="闪回收" />
          </li>
          <li class="friend-li">
            <img src="../assets/img/021157681.jpg" alt="尚德机构" />
          </li>
          <li class="friend-li" style="margin-right:0;">
            <img src="../assets/img/1905535956714.jpg" alt="蚂蚁金服" />
          </li>
        </ul>
        <ul class="friend-ul mt-3">
          <li class="friend-li">
            <img src="../assets/img/2157067856714.jpg" alt="陕西安踏" />
          </li>
          <li class="friend-li">
            <img src="../assets/img/2337164356714.jpg" alt="北京交通大学" />
          </li>
          <li class="friend-li">
            <img src="../assets/img/234346521.jpg" alt="德邦快递" />
          </li>
          <li class="friend-li">
            <img src="../assets/img/173623131.jpg" alt="新华爱心公益基金会" />
          </li>
          <li class="friend-li friend-li2">
            <router-link to="/corporation">更多</router-link>
          </li>
        </ul>
      </div>
    </div>
    <!-- 友情链接 -->
    <div class="friend-link">
      <div class="friend-box">
        <div class="friend-title">
          友情链接 :
          <a href="https://www.jiuyf.com/" target="_blank" title="中国旧衣服网">中国旧衣服网</a>
        </div>
        <div class="friend-link-txt">
          <a href="https://www.52bjy.com/link/index.php?action=reg">申请链接</a>【微信备注友情链接：344540847】
        </div>
      </div>
    </div>
    <my-footer></my-footer>
  </div>
</template>
<script>
import carousel from "../components/Carousel.vue";
export default {
  data() {
    return {
      list: [], //轮播图信息,父组件给子组件传值
      numtext1: 1205147,
      numtext2: 10122,
      numtext3: 62575
    };
  },
  components: { carousel },
  methods: {
    getnum() {
      var text1 = 1205900;
      var text2 = 10875;
      var text3 = 63328;
      var timer = setInterval(() => {
        if (
          this.numtext1 < text1 ||
          this.numtext2 < text2 ||
          this.numtext3 < text3
        ) {
          this.numtext1++;
          this.numtext2++;
          this.numtext3++;
        } else {
          clearInterval(timer);
        }
      }, 1);
    },
    getsolve(e) {
      var tabs = document.querySelectorAll(".tab-nav-title");
      var divs = document.querySelectorAll(".tab-box_div");
      var targetid = e.target.id;
      for (var div of divs) {
        //内容显示
        if (div.id.indexOf(targetid) != -1) div.style.display = "block";
        else div.style.display = "none";
      }
      for (var tab of tabs) {
        //导航样式
        if (tab == e.target) {
          tab.style.borderTop = "0.125rem solid #ff6375";
          tab.style.color = "#ff6375";
        } else {
          tab.style.borderTop = "0.125rem solid #ddd";
          tab.style.color = "#ddd";
        }
      }
    },
    getlist(e) {
      var tabs = document.querySelectorAll(".tab-box-list-item");
      var divs = document.querySelectorAll(".tbm-info");
      var targetid = e.target.id || e.target.parentElement.id;
      for (var div of divs) {
        //内容显示
        if (div.id.indexOf(targetid) != -1) div.style.display = "block";
        else div.style.display = "none";
      }
      for (var tab of tabs) {
        //导航样式
        if (tab == e.target || tab == e.target.parentElement) {
          tab.style.backgroundColor = "#ff6375";
        } else {
          tab.style.backgroundColor = "#ddd";
        }
      }
    }
  },
  created() {
    this.axios.get("/index/carousel").then(result => {
      this.list = result.data;
    });
    this.getnum();
  }
};
</script>
<style scoped>
/* <!-- 公益平台大区域平台数据展示--> */
.co2 {
  width: 100%;
}
.co2-h1 {
  width: 100%;
  margin-top: 1.5rem;
}
.co2-h1 h1 {
  text-align: center;
  font-size: 2rem;
  height: 2.125rem;
  color: #f17c81;
}
.co2-h1 p {
  font-size: 1rem;
  color: #666666;
  height: 1.3125rem;
  margin-top: 0.8rem;
}
.bjyju {
  width: 100%;
  display: flex;
  margin-top: 1.5rem;
}
.bjyju-item {
  width: 70%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.bjyju-item span {
  width: 100%;
  height: 2.5rem;
}
.bjyju-item-h4 {
  width: 100%;
  font-size: 1.375rem;
  color: #fe7e90;
  margin-bottom: 0.625rem;
  text-align: center;
}
.span-text {
  width: 100%;
  text-align: center; /*边框居中显示*/
}
.span-text span {
  font-size: 1.875rem;
  color: #fe7e90;
  /* margin: 0 18px;文字距离椭圆外边距 */
  border: 0.125rem solid #fe7e90;
  border-radius: 3.125rem;
  padding: 0.125rem 0;
  margin-top: 0.625rem;
  width: 15.5rem;
  display: inline-block;
}
/* <!-- 底部切换现状背景和解决方案--> */
.statu:hover {
  cursor: pointer;
}
.statu,
.d3 {
  width: 75rem;
}
.statu,
.d3,
.tab-nav-icon,
.tab-box_div,
.news-box,
.news-more {
  margin: 0 auto;
}
.statu .tab-nav-title {
  color: #ddd;
  width: 37.5rem;
  height: 2.5625rem;
  padding: 0.625rem 0 0;
  font-size: 1.5rem;
  text-align: center;
  border-top: 0.125rem solid #ddd;
  margin-top: 2rem;
}
.statu .tab-nav-title:first-child {
  border-top: 0.125rem solid #ff6375;
  color: #ff6375;
}
.triangle {
  width: 37.5rem;
  line-height: 1rem;
}
.tab-nav-icon {
  width: 0;
  height: 0.5rem;
  border: 0.5rem solid transparent;
  border-bottom: 0.9375rem solid #ff6375;
}
.tab-box_div {
  width: 75rem;
  height: 17.4375rem;
  margin-top: 1.25rem;
  margin-bottom: 2rem;
}
.tab-box_div1 {
  display: flex;
}
.tab-box-list {
  width: 16rem;
  height: 17.4375rem;
}
.tbm-info {
  width: 58rem;
  padding-left: 1rem;
}
.tab-box-list-item {
  width: 100%;
  padding: 0.625rem 0;
  margin-bottom: 1.25rem;
  color: #ffffff;
  background-color: #ff6375;
}
.tab-box-list-item:hover {
  background: #ff6375 !important;
}
.tab-box-list .tab-box-list-item:not(:first-child) {
  background: #cfcfcf;
}
.tab-box-list-item .p1 {
  font-size: 1.1125rem;
  font-weight: bold;
  margin-bottom: 0.625rem;
  text-align: center;
}
.tab-box-list-item .p2 {
  font-size: 0.875rem;
  margin-bottom: 0;
  text-align: center;
}
.tbm-title {
  font-size: 1.375rem;
  font-weight: bold;
  padding: 0.4375rem 0;
  color: #000000;
  margin-bottom: 0;
  height: 1.8125rem;
}
.tbm-txt {
  font-size: 1rem;
  color: #666;
  line-height: 1.75rem;
  margin-bottom: 1rem;
  justify-content: start;
}
.tab-info-imgs {
  width: 55rem;
  height: 9.375rem;
  justify-content: space-between;
}
/* ************ 活动资讯----news*****************/
.news {
  width: 100%;
  padding: 1.25rem 0;
  background: #fff5f6;
  min-width: 75rem;
}
.news-title,
.news-txt,
.news-second a,
.news-more {
  text-align: center;
}
.news-first .news-second a,
.news-more,
.friend-li2 a,
.friend-link a {
  text-decoration: none;
}
/* 内容区域文字和图片 */
.news-box {
  width: 75rem;
}
/* news标题 */
.news-title {
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.3125rem;
}
/* news文字 */
.news-txt {
  font-size: 1rem;
  color: #666;
  margin-bottom: 1.25rem;
}
.news-first,
.news-third {
  width: 75rem;
  justify-content: space-between;
  display: flex;
}
/* news文字+图片 */
.news-second {
  width: 24.125rem;
  height: 15.4375rem;
  background: #fff;
}
.news-first .news-second a {
  color: #666;
}
.news-second img {
  width: 24.125rem;
  height: 12.875rem;
  transition: all 0.5s;
}
/**图片悬停缩放 **/
.news-second img:hover {
  transform: scale(1.01, 1.05);
}
/* 图片下方的文字样式 */
.news-name {
  width: 24.125rem;
  height: 2.5625rem;
  padding: 0.625rem 0.625rem;
  font-size: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
/* 查看更多div */
.news-third {
  width: 75rem;
  height: 2.875rem;
  margin-top: 1rem;
}
/* 查看更多文字 */
.news-more {
  width: 12.5rem;
  padding: 0.625rem 0;
  color: #fff;
  background: #f07c89;
  border-radius: 3.125rem;
  font-size: 1.25rem;
}
/** 悬停时背景颜色(有变化不是很明显)**/
.news-more:hover {
  background: #ff6375;
}
/* ???????????????????????*/
*,
*::before,
*::after {
  box-sizing: content-box !important;
}
/************** <!--国内地图----白鲸鱼的身影  -->************* */
.Chinamap {
  width: 100%;
  height: 47rem;
  overflow: hidden;
  position: relative;
}
/*父级div*/
.map_title {
  width: 75rem;
  text-align: center;
  margin: 0 auto;
  font-weight: 100;
  padding: 2.5rem 0 0;
}
/*地图的文字标题*/
.map_title_h1 {
  width: 75rem;
  text-align: center;
  font-weight: 100;
  display: block;
  font-size: 2em;
}

/**标题下的文字段落 */
.map_title p {
  font-size: 0.875rem;
  width: 75rem;
  text-align: center;
  margin-top: 0.5rem;
  display: block;
  margin-inline-end: 1rem;
}
/* 开通城市的定位点*/
.kt_city {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: red;
  top: 23%;
  left: 43%;
}
/* 开通城市的定位点 右侧的文字*/
.show_map1 span {
  position: absolute;
  color: #000;
  font-size: 16px;
  left: 45%;
  top: 22.6%;
}
/* 帮助区域的定位点*/
.help_city {
  background: #00f;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  left: 52%;
  top: 23%;
}
/* 帮助区域的定位点 右侧的文字*/
.show_map2 span {
  position: absolute;
  color: #000;
  font-size: 16px;
  left: 54%;
  top: 22.6%;
}
/*map上各省份的文字和定位点  */
.map_ser {
  width: 46.875rem;
  height: 38.75rem;
  background-image: url("../assets/img/map_black_bg.png");
  margin: 0 auto;
  position: relative;
}
/*各省份文字样式*/
span {
  font-size: 0.75rem;
  color: #000000;
}
/*******************公共样式 所有省份绝对定位******************** */

.map_ser > div {
  position: absolute;
}
.a1 {
  top: 5.5rem;
  left: 40rem;
}
.a2 {
  top: 8.75rem;
  left: 40rem;
}
.a3 {
  top: 11.8rem;
  left: 39.3rem;
}
.a4 {
  top: 13.75rem;
  left: 34.3rem;
}
.a5 {
  top: 14.43rem;
  left: 35.62rem;
}
.a6 {
  top: 15.18rem;
  left: 33rem;
}
.a7 {
  top: 17.75rem;
  left: 35.31rem;
}
.a8 {
  top: 20.31rem;
  left: 33.12rem;
}
.a9 {
  top: 17.31rem;
  left: 31.25rem;
}
.a10 {
  top: 22.5rem;
  left: 35.81rem;
}
.a11 {
  top: 21.62rem;
  left: 38.62rem;
}
.a12 {
  top: 25.43rem;
  left: 33.87rem;
}
.a13 {
  top: 24.06rem;
  left: 31.43rem;
}
.a14 {
  top: 21.37rem;
  left: 31.18rem;
}
.a15 {
  top: 27.5rem;
  left: 34.93rem;
}
.a16 {
  top: 29.68rem;
  left: 36.93rem;
}
.a17 {
  top: 32rem;
  left: 33.25rem;
}
.a18 {
  top: 23.81rem;
  left: 23.25rem;
}
.a19 {
  top: 25.68rem;
  left: 27.62rem;
}
.a20 {
  top: 19.5rem;
  left: 24.12rem;
}
.a21 {
  top: 18.81rem;
  left: 15.93rem;
}
.a22 {
  top: 24.06rem;
  left: 9.81rem;
}
.a23 {
  top: 31.56rem;
  left: 21.75rem;
}
.a24 {
  top: 29.25rem;
  left: 26.68rem;
}
.a25 {
  top: 32.68rem;
  left: 28.5rem;
}
.a26 {
  top: 36.8rem;
  left: 30rem;
}
.a27 {
  top: 14.5rem;
  left: 22.93rem;
}
.a28 {
  top: 210rem;
  left: 125rem;
}

/************pluse点的公共样式 *************/
.pluse,
.pluse1,
.pluse3,
.pluse4 {
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  animation: mymove 1s infinite;
  -webkit-animation: mymove 5s infinite; /*Safari and Chrome*/
}
/************开通城市在地图中显示红色 *************/
.pluse {
  background: red;
  position: relative;
}
/*动画展示原点的扩大和消散*/
@keyframes mymove {
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(1.7);
    opacity: 0;
  }
}
/**************** 需要帮助区域地图中显示蓝色 *************/
.pluse1 {
  background: #00f;
  position: relative;
}
/*动画展示原点的扩大和消散*/
@keyframes mymove {
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(1.7);
    opacity: 0;
  }
}

/**************** 开通城市地图中显示红色 *************/
.pluse3 {
  background: #f00;
  position: absolute;
}
/*动画展示原点的扩大和消散*/
@keyframes mymove {
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(1.7);
    opacity: 0;
  }
}
/**************** 开通城市地图中显示蓝色 *************/
.pluse4 {
  background: #00f;
  position: absolute;
}
/*动画展示原点的扩大和消散*/
@keyframes mymove {
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(1.7);
    opacity: 0;
  }
}
/* <!-- 合作伙伴部分 --> */
.friend {
  width: 100%;
  padding: 1.25rem 0;
  background: #fff6f7;
}
/* <!--宽1200 位置居中 --> */
.friend-box {
  width: 75rem;
  margin: 0 auto;
}
/* <!-- 合作伙伴和友情连接的公共文字样式 --> */
.friend-title,
.friend-txt,
.friend-li2,
.friend-link-txt,
.friend-link-title {
  text-align: center;
}
/** 字体加粗*/
.friend-title,
.friend-li2 {
  font-weight: bold;
}
/* 标题 */
.friend-title {
  font-size: 1.25rem;
  margin-bottom: 1.625rem;
}
/* 文字 */
.friend-txt {
  font-size: 1rem;
  color: #666666;
  margin-bottom: 1.25rem;
}
/* ul列表 横向排列5个合作伙伴 */
.friend-ul {
  width: 75rem;
  display: flex;
  justify-content: space-between;
}
/* ul li 的宽度和布局方式 */
.friend-ul li {
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
  font-size: 1.875rem;
  line-height: 6.625rem;
}
.friend-li2 a {
  color: #666666;
}
/* <!-- 底部友情链接 --> */
.friend-link {
  width: 100%;
  height: 100px;
  padding: 1rem 0;
  background: #fff;
}
/** 标题后的文字样式*/
.friend-link a {
  color: #666666;
  font-size: 1rem;
}
.friend-link-txt {
  font-size: 1rem;
}
</style>

