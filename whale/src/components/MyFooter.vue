<template>
  <div class="foot">
    <div class="footer">
      <div class="foot1">
        <div class="foot1-h1">联系我们</div>
        <div class="foot1-h2">客服电话</div>
        <div class="foot1-main1">400-003-0226</div>
        <div class="foot1-main2">(工作日9：00-20：00)</div>
        <div class="foot1-h2">公益合作</div>
        <div class="foot1-main2">186-6719-6721</div>
        <div class="foot1-h2">市场合作</div>
        <div class="foot1-main2">159-6810-1640</div>
      </div>
      <div class="foot2">
        <ul class="foot2-ul">
          <li class="foot2-li1">用户服务</li>
          <li class="foot2-li2">
            <a href="#" target="_blank">账号密码</a>
          </li>
          <li class="foot2-li2">
            <a href="#" target="_blank">预约流程</a>
          </li>
          <li class="foot2-li2">
            <a href="#" target="_blank">常见问题</a>
          </li>
        </ul>
        <ul class="foot2-ul">
          <li class="foot2-li1">开发者服务</li>
          <li class="foot2-li2">
            <a href="#" target="_blank">开放平台</a>
          </li>
          <li class="foot2-li2">
            <a href="#" target="_blank">开发文档</a>
          </li>
          <li class="foot2-li2">
            <a href="#" target="_blank">用户须知</a>
          </li>
        </ul>
        <ul class="foot2-ul">
          <li class="foot2-li1">关于我们</li>
          <li class="foot2-li2">
            <a href="#" target="_blank">关于我们</a>
          </li>
          <li class="foot2-li2">
            <a href="#" target="_blank">合作伙伴</a>
          </li>
          <li class="foot2-li2">
            <a href="#" target="_blank">用户须知</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="foot-copy">
      <span class="foot-style">
        &copy; 2013-2018 52bjy.com 版权所有 ICP证：
        <a href="#" target="_blank">浙ICP备14000186号-10</a>
      </span>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.foot {
  width: 100%;
  background: #000;
  padding: 20px 0 10px;
  /* margin-top:3rem;*/
}
/* 内层div footer */
.footer {
  width: 100%;
  margin: 0 auto 2.25rem;
  justify-content: space-around;
}
.footer:after,
.foot2:after{
  content: ".";
  display: block;
  clear: both;
  height: 0;
  overflow: hidden;
  visibility: hidden;
}
/* 主体内容布局 */
.footer,
.foot2 {
  display: flex;
}
.foot a{
  text-decoration:none;
}
/* 联系我们 */
.footer .foot1 {
  color: #fff;
  width: 8.95rem;
  height: 14rem;
  text-align: center;
  font-size: 0.875rem !important;
}
.foot1 .foot1-h1,
.foot1-main1 {
  font-size: 1.25rem;
}
.foot1-main1 {
  font-weight: bold;
}
.foot1 .foot1-h2 {
  font-size: 0.875rem;
  margin-top: 0.75rem;
}
/* foot2 ul去点 */
.footer .foot2-ul {
  width:4.5rem;
  margin-right: 5rem;
  padding-left: 0;
}
.foot2 :nth-child(2) .foot2-li1 {
  width: 5.625rem !important;
}
.foot2 {
  float: left;
  width: 29.625rem;
  height: 7.5rem;
}
.foot2 a {
  color: #666;
}
/* foot2字体样式 */
.footer .foot2-ul .foot2-li1 {
  color: #fff;
  font-size: 1.125rem;
  margin-bottom:0.625rem; 
}
.footer .foot2-ul .foot2-li2 {
  font-size: 0.875rem;
  margin-bottom: 0.625rem;
  color: #d0d0d0;
}
/* 以下是版权信息设置 */
.foot-copy {
  text-align: center;
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

