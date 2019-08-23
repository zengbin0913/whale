<template>
  <div class="main">
    <my-header class="bg-color header"></my-header>
    <div class="container">
      <!-- 顶部用户须知 -->
      <div class="order">
        <h2 class="order-title">用户须知</h2>
        <ul class="order-nav" @click="handle">
          <li id="order-tab1" class="active">回收说明</li>
          <li id="order-tab2">包装说明</li>
          <li id="order-tab3">其它说明</li>
        </ul>
        <div class="order-box">
          <div class="order-content1" id="tab1">
            <div class="txt">
              <h3 class="content-title">回收说明</h3>
              <div class="content-txt">
                <p>1、应管理局快递实名制规定，请确认您的信息真实有效并配合小哥出示身份证信息；</p>
                <p>2、目前已经全面支持各类衣物、裤子、鞋子、内衣、袜子、皮带、毛绒玩具、包包、床单被套、棉被枕头等；</p>
                <p>3、快递小哥会在您预约的当天与您联系收取旧衣物，如果下午15:00仍无联系，可电话联系我们处理；</p>
                <p>4、快递小哥收取快件后，您可以通过个人中心查看物流情况。</p>
              </div>
              <!-- btn按钮  -->
              <a href="#order2" class="oder-btn">立即预约</a>
            </div>
            <!-- 右侧的图片区域 -->
            <ul class="Img">
              <li>
                <img src="../assets/img/leibie1.jpg" />
              </li>
              <li>
                <img src="../assets/img/leibie2.jpg" />
              </li>
              <li>
                <img src="../assets/img/leibie3.jpg" />
              </li>
              <li>
                <img src="../assets/img/leibie4.jpg" />
              </li>
              <li class="small">
                <img src="../assets/img/leibie5.jpg" />
              </li>
              <li class="small">
                <img src="../assets/img/leibie6.jpg" />
              </li>
            </ul>
          </div>
          <div class="order-content2 hide" id="tab2">
            <div class="txt">
              <h3 class="content-title">包装说明</h3>
              <div class="content-txt">
                <p>1、目前我们回收的最低支持重量为5kg，如果不足建议和邻里合捐或者等到满足5kg之后在预约；</p>
                <p>2、请尽量提前把所有物品需要装在一个大袋子里面，方便我们提高回收效率；</p>
                <p>3、白鲸鱼为了让所有的废旧衣物都可以得到最大限度的回收利用；</p>
                <p>4、在全国各地的贫困地区，都有白鲸鱼的身影；捐赠的所有衣物来源都是预约上门回收的旧衣服中分拣挑选所得。</p>
              </div>
              <a href="#order2" class="oder-btn">立即预约</a>
            </div>
            <ul class="Img">
              <li>
                <img src="../assets/img/baozhuang1.jpg" />
              </li>
              <li>
                <img src="../assets/img/baozhuang2.jpg" />
              </li>
              <li>
                <img src="../assets/img/baozhuang3.jpg" />
              </li>
              <li>
                <img src="../assets/img/baozhuang4.jpg" />
              </li>
              <li class="small">
                <img src="../assets/img/baozhuang5.jpg" />
              </li>
              <li class="small">
                <img src="../assets/img/baozhuang6.jpg" />
              </li>
            </ul>
          </div>
          <div class="order-content3 hide" id="tab3">
            <div class="txt">
              <h3 class="content-title">其它说明</h3>
              <div class="content-txt">
                <p>1、白鲸鱼上门回收为免运费回收，所有的费用都有我们来承担，如遇小哥索要运费，可以联系我们处理；</p>
                <p>2、成功回收的用户可以获得鲸鱼币作为奖励，同时会以0.1元/kg的费用作为公益金捐赠给慈善机构；</p>
                <p>3、白鲸鱼的所有衣物捐赠渠道由我们的求助窗口获得，满足求助需要的衣物都将被捐赠给各地的贫困地区的人们；</p>
                <p>4、成功回收的用户可以到个人中心查看自己的捐赠记录和获得鲸鱼币数目。</p>
              </div>
              <a href="#order2" class="oder-btn">立即预约</a>
            </div>
            <ul class="Img">
              <li>
                <img src="../assets/img/other1.png" />
              </li>
              <li>
                <img src="../assets/img/other2.png" />
              </li>
              <li>
                <img src="../assets/img/other3.png" />
              </li>
              <li>
                <img src="../assets/img/other4.png" />
              </li>
              <li class="small">
                <img src="../assets/img/other5.png" />
              </li>
              <li class="small">
                <img src="../assets/img/other6.png" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!--在线预约 input部分  -->
      <div class="order2" id="order2">
        <h2 class="order-title">在线预约</h2>
        <div class="alert" id="ordermsg"></div>
        <ul class="info">
          <li><p>预约姓名<span>*</span></p>
            <input type="text" id="uname" v-model="uname">
          </li>
          <li><p>手机号码<span>*</span></p>
            <input type="text" id="phone" v-model="uphone">
          </li>
          <li class="place"><p>所属地区<span>*</span></p>
            <div>
              <select id="province" @change="selpro" v-model="uprovince"><!--省-->
                <option value="0">请选择</option>
                <option value="1">北京市</option>
                <option value="2">天津市</option>
                <option value="3">上海市</option>
                <option value="4">浙江省</option>
                <option value="5">江苏省</option>
                <option value="6">广东省</option>
                <option value="7">福建省</option>
                <option value="8">安徽省</option>
                <option value="9">河北省</option>
                <option value="10">山东省</option>
                <option value="11">辽宁省</option>
                <option value="12">黑龙江省</option>
                <option value="13">四川省</option>
                <option value="14">江西省</option>
                <option value="15">陕西省</option>
                <option value="16">重庆市</option>
                <option value="17">湖北省</option>
                <option value="18">河南省</option>
                <option value="19">山西省</option>
                <option value="20">湖南省</option>
                <option value="21">云南省</option>
                <option value="22">贵州省</option>
                <option value="23">广西省</option>
                <option value="24">海南省</option>
                <option value="25">吉林省</option>
              </select>
              <select id="city" @change="selcity" v-model="ucity"><!--市-->
              </select>
              <select id="region" v-model="uregion"><!--区--> 
              </select>
            </div>
          </li>
          <li>
            <p>详细地址<span>*</span></p>
            <input type="text" v-model="uaddress">
          </li>
          <li><p>大约重量<span>*</span></p>
            <select id="kg" v-model="ukg">
              <option value="0">请选择</option>
              <option value="1">5-10kg</option>
              <option value="2">10-20kg</option>
              <option value="3">21-30kg</option>
              <option value="4">30kg以上</option>
            </select>
          </li>
          <li><p>上门日期<span>*</span></p>
            <input type="date" v-model="udate">
          </li>
        </ul>
        <button class="btn" @click="submit">提交</button>
      </div>
      <!-- 流程示意图 -->
      <div class="pro">
        <ul>
          <li>
            <div>
              <img src="../assets/img/progress1.jpg" />
            </div>
            <span>打包衣服</span>
          </li>
          <li>
            <img src="../assets/img/guodu.png" />
          </li>
          <li>
            <div>
              <img src="../assets/img/progress2.jpg" />
            </div>
            <span>预约回收</span>
          </li>
          <li>
            <img src="../assets/img/guodu.png" />
          </li>
          <li>
            <div>
              <img src="../assets/img/progress3.jpg" />
            </div>
            <span>耐心等待</span>
          </li>
          <li>
            <img src="../assets/img/guodu.png" />
          </li>
          <li>
            <div>
              <img src="../assets/img/progress4.jpg" />
            </div>
            <span>上门取件</span>
          </li>
          <li>
            <img src="../assets/img/guodu.png" />
          </li>
          <li>
            <div>
              <img src="../assets/img/progress5.jpg" />
            </div>
            <span>积分兑换</span>
          </li>
        </ul>
      </div>
      <!-- 底部程序扫码区域 -->
      <div class="order3">
        <h2 class="order-title">白鲸鱼移动端</h2>
        <p style="text-align:center;">更极致体验，更便捷操作</p>
        <ul>
          <li>
            <img src="../assets/img/asdas.png" />
            <span>手机APP客户端</span>
          </li>
          <li>
            <img src="../assets/img/alipay.jpg" />
            <span>支付宝扫一扫</span>
          </li>
          <li>
            <img src="../assets/img/wxgzh.jpg" />
            <span>微信扫一扫</span>
          </li>
          <li>
            <img src="../assets/img/dasas.jpg" />
            <span>微信小程序</span>
          </li>
        </ul>
      </div>
    </div>
    <my-footer></my-footer>
  </div>
</template>
<script>
import qs from "qs";
export default {
  data(){
    return{
      uname:"",
      uphone:"",
      uregion:"",
      uprovince:"",
      ucity:"",
      uaddress:"",
      ukg:"",
      udate:""
    }
  },
  methods:{
    handle(e) {
      var divs=document.querySelectorAll(".order-box>div");
      var lis=document.querySelectorAll(".order-nav>li");
      var targetid=e.target.id.substr(-4,4);
      for(var div of divs){ //内容显示
        if(div.id==targetid) div.style.display = "block";
        else div.style.display = "none";
      }
      for(var li of lis){ //导航样式
        if(li==e.target) {
          li.style.borderBottom = "0.15rem solid #ff6375";
          li.style.color = "#ff6375";
        }
        else {
          li.style.borderBottom = "0.15rem solid #fec9d1";
          li.style.color = "#666";
        }
      }
    },
    selpro(e){
      var cities=[
        [{"name":'北京市',"value":101}],
        [{"name":'天津市',"value":201}],
        [{"name":'上海市',"value":301}],
        [{"name":'杭州市',"value":401}],
        [{"name":'南京市',"value":501}],
        [{"name":'广州市',"value":601},
        {"name":'深圳市',"value":602},
        {"name":'东莞市',"value":603},
        {"name":'中山市',"value":604},
        {"name":'江门市',"value":605},
        {"name":'珠海市',"value":606},
        {"name":'佛山市',"value":607},
        {"name":'惠州市',"value":608},
        {"name":'韶关市',"value":609},
        {"name":'汕头市',"value":610},
        {"name":'湛江市',"value":611},
        {"name":'茂名市',"value":612},
        {"name":'肇庆市',"value":613},
        {"name":'梅州市',"value":614},
        {"name":'汕尾市',"value":615},
        {"name":'河源市',"value":616},
        {"name":'阳江市',"value":617},
        {"name":'清远市',"value":618},
        {"name":'潮州市',"value":619},
        {"name":'揭阳市',"value":620},
        {"name":'云浮市',"value":621}]
      ];
      var i=e.target.selectedIndex;
      if(i>0){
        var cts=cities[i-1]; //获得城市子数组
        var frag=document.createDocumentFragment(); //创建文档片段frag
        frag.appendChild(new Option("请选择"));
        for(var c of cts) frag.appendChild(new Option(c.name,c.value));
        city.innerHTML=""; //先清空旧内容
        city.appendChild(frag);//将frag整体追加到selCts中
      }
    },
    selcity(e){
      var regions=[
        [{"name":'越秀区',"value":60101},{"name":'荔湾区',"value":60101}], //广州
        [{"name":'罗湖区',"value":60201}, //深圳
        {"name":'福田区',"value":60202},
        {"name":'南山区',"value":60203},
        {"name":'宝安区',"value":60204},
        {"name":'龙岗区',"value":60205},
        {"name":'盐田区',"value":60206},
        {"name":'龙华区',"value":60207},
        {"name":'坪山区',"value":60208}],
        [{"name":'东城街道',"value":60301},{"name":'南城街道',"value":60302}], //东莞
        [{"name":'小榄镇',"value":60301},{"name":'黄圃镇',"value":60302}], //中山
      ];
      var i=e.target.selectedIndex;
      if(i>0){
        var reg=regions[i-1]; //获得城市子数组
        var frag=document.createDocumentFragment(); //创建文档片段frag
        frag.appendChild(new Option("请选择"));
        for(var r of reg) frag.appendChild(new Option(r.name,r.value));
        region.innerHTML=""; //先清空旧内容
        region.appendChild(frag);//将frag整体追加到selCts中
      }
    },
    submit(){ //预约提交
      if(this.uname!="" && this.uphone!="" && this.uregion!="" && this.uprovince!="" && this.ucity!="" && this.uaddress!="" && this.ukg!="" && this.udate!=""){
        this.axios.post("/user/appoint",qs.stringify({
          uname:this.uname,
          uphone:this.uphone,
          uregion:this.uregion,
          uprovince:this.uprovince,
          ucity:this.ucity,
          uaddress:this.uaddress,
          ukg:this.ukg,
          udate:this.udate
          }),{
            emulateJSON: true
          },{
            headers:{"Content-Type": "application/x-www-form-urlencoded;charset=utf-8",}
          }).then(result=>{
            ordermsg.style.display="block";
            ordermsg.innerHTML=result.data.msg;
        })
        /*一次预约成功后,界面清空*/
        this.uname="";
        this.uphone="";
        this.uregion="";
        this.uprovince="";
        this.ucity="";
        this.uaddress="";
        this.ukg="";
        this.udate="";
      }else {
        ordermsg.style.display="block";
        ordermsg.innerHTML="所有带*的为必填项";
      }
    }
  }
};
</script>
<style scoped>
.main{
  width: 100%;
}
.container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  padding-top:3.75rem;
}
@media (min-width: 576px) {
  .container {
    max-width: 540px;
  }
  .order{
    height: 52rem;
  }
}
@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
  .order{
    height: 41rem;
  }
}
@media (min-width: 992px) {
  .container {
    max-width: 960px;
  }
  .order{
    height: 41rem;
  }
}
@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
  .order{
    height: 32rem;
  }
}
.order {
  width: 100%;
}
.order-title {
  margin-top: 1.5rem;
  margin-bottom: 1.25rem;
  text-align: center;
}
.order-nav {
  display: flex;
  justify-content: center;
  align-items: center;
}
.order-nav li {
  padding: 0.5rem 2.5rem;
  font-size: 1rem;
  border-bottom: 1px solid #fec9d1;
  color: #666;
  cursor: pointer;
}
.order-nav li.active{
  border-bottom: 0.15rem solid #ff6375;
  color:#ff6375;
}
.order-box {
  width: 100%;
  margin: 0 auto;
}
.order-content1,
.order-content2,
.order-content3 {
  width: 100%;
  margin-top: 3rem;
}
.oder-btn {
  display: block;
  width: 50%;
  padding: 0.25rem 0;
  border: 2px solid #f07c87;
  border-radius: 0.25rem;
  font-size: 1rem;
  color: #f07c87;
  text-align: center;
  margin-left: 2rem;
  margin-top: 1rem;
}
.txt {
  width: 45%;
  padding-right: 4rem;
  line-height: 2rem;
  font-size: 1rem;
  float: left;
}
.Img {
  width: 55%;
  display: flex;
  flex-wrap: wrap;
  float: left;
}
.Img li {
  margin-left: 0.75rem;
  margin-bottom: 0.5rem;
}
.Img li img {
  width: 160px;
  height: 160px;
}
@media (min-width: 576px) {
  .order-nav li {
    padding: 0.5rem 2.5rem;
  }
  .small {
    display: none;
  }
  .info li {
    width: 100%;
  }
  .info li.place select + select {
    margin-left: 0.25rem;
  }
}
@media (min-width: 768px) {
  .small {
    display: inline;
  }
  .info li {
    width: 100%;
  }
  .info li.place select + select {
    margin-left: 0.5rem;
  }
}
@media (min-width: 992px) {
  .small {
    display: inline;
  }
  .info li {
    width: 50%;
  }
  .info li.place select + select {
    margin-left: 5px;
  }
}
.order2 {
  background-color: #fee7e7;
  width: 100%;
  margin: 2.5rem auto;
  padding-bottom: 1.5rem;
  padding-top: 0.5rem;
}
.alert{
  width: 100%;
  text-align: center;
  font-size:0.5rem;
  color:#f00;
  display:none;
  padding:0;
}
.info {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.info li {
  font-size: 1.25rem;
  color: #333;
  padding-left: 1rem;
  display: flex;
  margin-bottom: 2rem;
}
.info li p {
  height: 2.5rem;
  line-height: 2.5rem;
  text-align: left;
  font-weight: bold;
}
.info li span {
  color: #f00;
}
.info li input,
.info li #kg
 {
  margin-left: 0.25rem;
  width: 65%;
  height: 2.5rem;
  border-radius: 0.25rem;
  outline: 0;
  border:2px solid #ccc;
}

.info li div {
  margin-left: 0.25rem;
  width: 65%;
  height: 2.5rem;
  border-radius: 0.25rem;
  outline: 0;
}
.info li.place select {
  height: 2.5rem;
  width: 32%;
  border-radius: 0.25rem;
  border:2px solid #ccc;
}
.btn {
  display: block;
  width: 21rem;
  height: 3rem;
  border-radius: 0.25rem;
  background-color: #f07c89;
  outline: none;
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0 auto;
}
/* 流程示意图 */
.pro ul {
  padding-left: 1rem;
  width: 100%;
  display: flex;
}
.pro ul li {
  width: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.pro ul li div {
  width: 100%;
  margin-bottom: 0.25rem;
}
.pro ul li > img,
.pro ul li img {
  width: 100%;
}
.prog ul li span {
  font-size: 0.75rem;
}
.order3 {
  width: 100%;
  margin-top: 3rem;
}
.order3 ul {
  margin-top: 2rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.order3 ul li {
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.order3 ul li img {
  width: 100%;
}
.order3 ul li span {
  padding-top: 0.75rem;
  font-size: 1.25rem;
}
</style>