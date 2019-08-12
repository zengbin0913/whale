<template>
  <div>
    <my-header></my-header>
    <div class="container">
      <div class="order">
        <h2 class="order-title">用户须知</h2>
        <ul class="order-nav">
          <li id="order-tab1">回收说明</li>
          <li id="order-tab2">包装说明</li>
          <li id="order-tab3">其它说明</li>
        </ul>
        <div class="order-box">
          <div class="order-content1">
            <div class="txt">
              <h3 class="content-title">回收说明</h3>
              <div class="content-txt">
                <p>1、应管理局快递实名制规定，请确认您的信息真实有效并配合小哥出示身份证信息；</p>
                <p>2、目前已经全面支持各类衣物、裤子、鞋子、内衣、袜子、皮带、毛绒玩具、包包、床单被套、棉被枕头等；</p>
                <p>3、快递小哥会在您预约的当天与您联系收取旧衣物，如果下午15:00仍无联系，可电话联系我们处理；</p>
                <p>4、快递小哥收取快件后，您可以通过个人中心查看物流情况。</p>
              </div>
              <a href="#order2" class="oder-btn">立即预约</a>
            </div>
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
          <div class="order-content2 hide">
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
          <div class="order-content3 hide">
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
      <div class="order2" id="order2">
        <h2 class="order-title">在线预约</h2>
        <ul class="info">
          <li>
            <p>
              预约姓名
              <span>*</span>
            </p>
            <input type="text" id="uname" />
          </li>
          <li>
            <p>
              手机号码
              <span>*</span>
            </p>
            <input type="text" id="phone" />
          </li>
          <li class="place">
            <p>
              所属地区
              <span>*</span>
            </p>
            <div>
              <select id="province">
                <!--省-->
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
              <select id="city">
                <!--市-->
                <option value="0">请选择</option>
                <option value="1">北京市</option>
              </select>
              <select id="region">
                <!--区-->
                <option value="0">请选择</option>
                <option value="1">东城区</option>
                <option value="2">西城区</option>
                <option value="3">朝阳区</option>
                <option value="4">丰台区</option>
                <option value="5">海淀区</option>
                <option value="6">房山区</option>
                <option value="7">通州区</option>
                <option value="8">顺义区</option>
                <option value="9">昌平区</option>
                <option value="10">大兴区</option>
                <option value="11">怀柔区</option>
                <option value="12">密云区</option>
                <option value="13">延庆区</option>
                <option value="14">平谷区</option>
                <option value="15">石景山区</option>
                <option value="16">门头沟区</option>
              </select>
            </div>
          </li>
          <li>
            <p>
              详细地址
              <span>*</span>
            </p>
            <input type="text" />
          </li>
          <li>
            <p>
              大约重量
              <span>*</span>
            </p>
            <select id="kg">
              <option value="0">请选择</option>
              <option value="1">5-10kg</option>
              <option value="2">10-20kg</option>
              <option value="3">21-30kg</option>
              <option value="4">30kg以上</option>
            </select>
          </li>
          <li>
            <p>
              上门日期
              <span>*</span>
            </p>
            <input type="date" />
          </li>
        </ul>
        <button class="btn">提交</button>
      </div>
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
export default {};
</script>
<style scoped>
.font-small {
  font-size: 1rem;
}
.container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
@media (min-width: 576px) {
  .container {
    max-width: 540px;
  }
}
@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}
@media (min-width: 992px) {
  .container {
    max-width: 960px;
  }
}
@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
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
.order-box {
  width: 100%;
  position: relative;
  margin: 0 auto;
}
.order-content1,
.order-content2,
.order-content3 {
  width: 100%;
  margin-top: 3rem;
  display: flex;
}
.oder-btn {
  display: block;
  width: 50%;
  padding: 0.25rem 0;
  border: 2px solid #f07c87;
  border-radius: 0.25rem;
  font-size: 1.25rem;
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
}
.Img {
  width: 55%;
  display: flex;
  flex-wrap: wrap;
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
    margin-left: 0.85rem;
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
    margin-left: 0.5rem;
  }
}
.hide {
  display: none;
}
.order2 {
  background-color: #fee7e7;
  width: 100%;
  margin: 2.5rem auto;
  padding-bottom: 1.5rem;
  padding-top: 1.5rem;
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
.info li #kg,
.info li div {
  margin-left: 0.25rem;
  width: 65%;
  height: 2.5rem;
  border-radius: 0.25rem;
  outline: 0;
}
.info li.place select {
  height: 2.5rem;
  width: 30%;
  border-radius: 0.25rem;
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