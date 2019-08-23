<template>
  <div>
    <my-header class="bg-color header"></my-header>
    <div calss="content">
      <div class="open-banner">
        <div class="open-banner-title">文档检索</div>
        <div class="open-banner-txt">Document search</div>
        <div class="open-banner-search">
          <form
            id="destoon_search"
            action="https://www.52bjy.com/doc/search.php"
            onSubmit="return Dsearch();"
          >
            <input type="hidden" name="moduleid" value="13" id="destoon_moduleid" />
            <input type="hidden" name="spread" value="0" id="destoon_spread" />
            <div class="input_btn">
              <div class="f_l">
                <input
                  name="kw"
                  id="destoon_kw"
                  type="text"
                  class="empty input"
                  maxlength="50"
                  placeholder="试试输入您要了解的内容，然后ENTER一下"
                  onFocus="if(this.value=='请输入关键词') this.value='';"
                  onKeyUp="STip(this.value);"
                  autocomplete="off"
                />
              </div>
              <div class="f_r">
                <button type="submit" class="but">ENTER</button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div class="open-md">
        <div class="open-md-title">
          常见问题
          <a href="https://www.52bjy.com/doc/list-404.html" title target="_block">更多</a>
        </div>
        <ul class="open-md-list">
          <li class="open-md-li">
            <div class="open-md-rand"></div>
            <div class="open-md-txt">
              <a href="https://www.52bjy.com/doc/show-108.html">成功回收后何时可以获得蚂蚁森林能量？</a>
            </div>
          </li>
          <li class="open-md-li">
            <div class="open-md-rand"></div>
            <div class="open-md-txt">
              <a href="https://www.52bjy.com/doc/show-103.html">加盟网点无法月结怎么办？</a>
            </div>
          </li>
          <li class="open-md-li">
            <div class="open-md-rand"></div>
            <div class="open-md-txt">
              <a href="https://www.52bjy.com/doc/show-100.html">当天可以预约当天来上门回收吗？</a>
            </div>
          </li>
          <li class="open-md-li">
            <div class="open-md-rand"></div>
            <div class="open-md-txt">
              <a href="https://www.52bjy.com/doc/show-87.html">获得鲸鱼币的方式和途径有哪些？</a>
            </div>
          </li>
          <li class="open-md-li">
            <div class="open-md-rand"></div>
            <div class="open-md-txt">
              <a href="https://www.52bjy.com/doc/show-86.html">快递师傅不知道地址怎么办？</a>
            </div>
          </li>
        </ul>
      </div>
      <div class="open-md">
        <div class="open-md-title">
          产品使用
          <a href="Document.html">更多</a>
        </div>
        <ul class="open-md-list">
          <li class="open-md-li">
            <div class="open-md-rand"></div>
            <div class="open-md-txt">
              <a href="https://www.52bjy.com/doc/show-110.html">如何预约准确具体的上门时间</a>
            </div>
          </li>
          <li class="open-md-li">
            <div class="open-md-rand"></div>
            <div class="open-md-txt">
              <a href="https://www.52bjy.com/doc/show-107.html">如何修改自己资料中的姓名</a>
            </div>
          </li>
          <li class="open-md-li">
            <div class="open-md-rand"></div>
            <div class="open-md-txt">
              <a href="https://www.52bjy.com/doc/show-98.html">预约时提示我的账户被禁止了怎么办？</a>
            </div>
          </li>
          <li class="open-md-li">
            <div class="open-md-rand"></div>
            <div class="open-md-txt">
              <a href="https://www.52bjy.com/doc/show-97.html">支付宝门店扫码下单后无法领取优惠券</a>
            </div>
          </li>
          <li class="open-md-li">
            <div class="open-md-rand"></div>
            <div class="open-md-txt">
              <a href="https://www.52bjy.com/doc/show-88.html">在支付宝使用白鲸鱼的预约服务</a>
            </div>
          </li>
        </ul>
      </div>
      <div class="open-md" style="margin-bottom:3.125rem;">
        <div class="open-md-title">
          开放平台
          <a href="https://www.52bjy.com/doc/list-424.html">更多</a>
        </div>
        <ul class="open-md-list">
          <li class="open-md-li">
            <div class="open-md-rand"></div>
            <div class="open-md-txt">
              <a href="https://www.52bjy.com/doc/show-113.html">白鲸鱼回收订单回调说明</a>
            </div>
          </li>
          <li class="open-md-li">
            <div class="open-md-rand"></div>
            <div class="open-md-txt">
              <a href="https://www.52bjy.com/doc/show-112.html" >白鲸鱼回收订单取消接口</a>
            </div>
          </li>
          <li class="open-md-li">
            <div class="open-md-rand"></div>
            <div class="open-md-txt">
              <a href="https://www.52bjy.com/doc/show-109.html">通过appkey查询对应key下的订单列表和状态</a>
            </div>
          </li>
          <li class="open-md-li">
            <div class="open-md-rand"></div>
            <div class="open-md-txt">
              <a href="https://www.52bjy.com/doc/show-77.html" >白鲸鱼系统鲸鱼币设计原理</a>
            </div>
          </li>
          <li class="open-md-li">
            <div class="open-md-rand"></div>
            <div class="open-md-txt">
              <a href="https://www.52bjy.com/doc/show-76.html">第三方平台接入验证自己的会员系统</a>
            </div>
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
.content {
  margin: 0;
  padding-top: 4rem;
  box-sizing: border-box;
  background: #fff;
  width: 100%;
}
.open-banner {
  width: 100%;
  min-width: 75rem;
  margin: 0 auto;
  background: url(../assets/img/docbg.jpg);
  padding: 3.75rem 0;
  height: 22rem;
  background-size: cover;
}
.open-banner-title {
  font-size: 1.875rem;
  color: #fff;
  text-align: center;
  margin-top:2rem;
}
.open-banner-txt {
  font-size: 0.875rem;
  color: #fff;
  text-align: center;
  margin-bottom: 3.125rem;
}
.input_btn {
  width: 62.5rem;
  height: 2.75rem;
  background: #fff;
  margin: 0 auto;
  justify-content: space-between;
}
.f_l {
  float: left;
  width: 90%;
  height: 100%;
}
.f_r{
   width: 10%;
   float:right;
   height: 100%;
}
.open-banner-search .input {
  width: 53.125rem;
  border: 0;
  font-size: 1rem;
  color: #666;
  height: 2.75rem;
  line-height: 2.75rem;
  padding-left: 0.625rem;
  outline: none;
}
.open-banner-search .but {
  width: 6.25rem;
  background: #ff6375;
  color: #fff;
  font-size: 1.1125rem;
  text-align: center;
  border-radius: 0.125rem;
  border: 0;
  height: 2.75rem;
  line-height: 2.75rem;
}
.open-md {
  width: 75rem;
  margin: 0 auto;
  padding-top: 3.125rem;
}

.open-md-title {
  font-size: 1.125rem;
  padding-bottom: 0.3125rem;
  border-bottom: 1px solid #ddd;
}
.open-md-title a {
  float: right;
  font-size: 0.875rem;
  color: #aaa;
}
.open-md-rand {
  float: left;
  border-radius: 50%;
  background: #ff6375;
  width: 0.625rem;
  height: 0.625rem;
  margin-right: 0.625rem;
  margin-top: 0.3125rem;
}
.open-md-li {
  margin-top: 0.625rem;
}
.open-md-txt a {
  font-size: 1rem;
  color: #666;
  line-height: 1.25rem;
}
.open-md-txt a:hover {
  color: #ff6375;
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
</style>>
