<template>
  <div>
    <!-- 最外层父元素 -->
    <my-header class="bg-color header"></my-header>
    <div class="container">
      <!-- 页面h1标题 -->
      <h1 class="title">关于我们</h1>
      <!-- 文字内容大的div    -->
      <div class="content" id="content">
        <!-- 第一段落  -->
        <p id="p1">白鲸鱼是一个倡导闲置零抛弃、旧衣循环利用的综合性 环保公益平台，平台以「旧衣新生活」为理念。让大家能够轻松环保，简单公益。白鲸鱼是国内领先的免费上门收衣服务平台，通过建 立可循环的旧衣处理渠道，维护生态环境。一键预约，快递免费上门收衣。</p>
        <!-- 第二段落 ldquo表示引号-->
        <p id="p2">白鲸鱼团队以旧衣处理问题为切入点，搭建起倡导人们践行低碳生活理念的互联网平台。2015年2月白鲸鱼平台上线，通过平台预 约、免 费上门回收、兑换商城代金券以及鲸鱼币的方式鼓励全社会一起参与到旧衣新生活的行动中来，以&ldquo;环保+公益&rdquo;的方式处理旧衣物，让有限资源，无限循环。同时运营绿色低碳环保商城，全方位的带动居民参与到环保中来。</p>
        <!-- 第三段 三个p标签 -->
        <p class="paragraph">联系我们：</p>
        <p class="paragraph">全国统一客服服务电话：400-003-0226</p>
        <p class="paragraph">办公地点：浙江省杭州市江干区经济技术开发区学林街1712号克亚时代大厦1411号</p>
      </div>
      <!-- 底部的ul列表 -->
      <div class="related_links">
        <ul class="related_links_ul">
          <li>
            <a href="https://www.52bjy.com/about/zhenzhu.html">珍珠计划</a>
          </li>
          <li>
            <a href="https://www.52bjy.com/about/index.html">关于我们</a>
          </li>
          <li>
            <a href="https://www.52bjy.com/about/contact.html">联系我们</a>
          </li>
          <li>
            <a href="https://www.52bjy.com/about/czzn.html">操作指南</a>
          </li>
          <li>
            <a href="https://www.52bjy.com/about/copyright.html">版权隐私</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="foot-copy">
      <span class="foot-style">
        &copy; 2013-2018 52bjy.com 版权所有 ICP证：
        <a href="javascript:;" target="_blank">浙ICP备14000186号-10</a>
      </span>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
/* 最外层父元素div */
.container {
  width: 100%;
  background: #fff;
  padding-top: 4rem;
}
/* 页面h1标题 */
.title {
  height: 3rem;
  line-height: 3rem;
  text-align: center;
  font-weight: bold;
  font-size: 1.625rem;
  padding: 0;
  margin: 0;
}
/* 文字内容区域 */
#content {
  width: 75rem;
  margin: 0 auto;
  padding: 1rem;
  text-align: left;
  line-height: 200%;
}
/* 段落1 */
#p1,#p2 {
  margin-bottom: 1rem;
}
/* 关于我们 p标签 */
.paragraph {
  display: block;
  margin-top: 0;
  margin-bottom: 0;
  margin-inline-start: 0;
  margin-inline-end: 0;
}
/* 相关链接 底部的ul列表*/
.related_links {
  width: 100%;
}
/* 底部的ul */
.related_links_ul {
  width: 75rem;
  text-align: left;
  margin: 0 auto;
  padding-left: 0;
}
/*ul 下的li */
.related_links li {
  list-style: none;
  padding: 0 1rem;
}
.related_links li a {
  text-decoration: none;
  color: #666;
  font-size: 0.75rem;
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