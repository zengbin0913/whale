<template>
  <div class="container">
    <div class="back">
      <router-link to="/index" class="back-home"></router-link>
      <a href="#" class="back-top"></a>
    </div>
    <p class="text-center pt-5">关注我们</p>
    <ul class="d-flex friend">
      <li>
        <a href="https://weibo.com/enzojewelry">
          <img src="../assets/img/weibo.png" alt />
        </a>
      </li>
      <li>
        <a href="http://www.enzo-jewelry.com/wechat">
          <img src="../assets/img/wechat.png" alt />
        </a>
      </li>
      <li>
        <a href="http://www.youku.com/enzojewelry">
          <img src="../assets/img/youku.png" alt />
        </a>
      </li>
      <li>
        <a href="http://www.enzo-jewelry.com/zhihu">
          <img src="../assets/img/zhihu.png" alt />
        </a>
      </li>
    </ul>
    <hr />
    <ul class="d-flex">
      <li class="font-small">
        <a href="https://enzo.tmall.com/">网上购买</a>
      </li>                                                                     
      <li class="font-small">版权所有@2018 ENNO珠宝</li>
      <li class="font-small">粤ICP备06082070号</li>
      <li class="font-small">客服热线：4008200544</li>
      <li class="font-small">加盟热线：4008213601</li>
    </ul>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.friend {
  justify-content: center;
}
.friend li + li {
  margin-left: 3rem;
}
a {
  color: #393939;
}
ul:last-child {
  justify-content: center;
  flex-wrap: wrap;
}
ul:last-child li:first-child {
  padding-right: 1rem;
}
ul:last-child li + li {
  border-left: 1px solid #393939;
  padding: 0 1rem;
}
.back-home,
.back-top {
  z-index: 9999;
  position: fixed;
  width: 54px;
  height: 54px;
  background: url(../assets/img/back_home.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  bottom: 94px;
  right: 16%;
  border-radius: 50%;
}
.back-top {
  background: url(../assets/img/back_top.png);
  bottom: 20px;
}
@media (max-width: 768px) {
  .back-home,
  .back-top {
    display: none;
  }
}
</style>

