<template>
  <div>
    <my-header class="bg-color header"></my-header>
    <div class="partner">
      <ul class="partner-ul">
        <li class="partner-li">
          <img src="../assets/img/18542191706172.jpg" alt="附近家政" class="partner-tu" />
          <div class="partner-title">附近家政</div>
        </li>
        <li class="partner-li">
          <img src="../assets/img/163045151.jpg" alt="爱回收" class="partner-tu" />
          <div class="partner-title">爱回收</div>
        </li>
        <li class="partner-li">
          <img src="../assets/img/192944641.jpg" alt="芭蒂娜" class="partner-tu" />
          <div class="partner-title">芭蒂娜</div>
        </li>
        <li class="partner-li" style="margin-right:0;">
          <img src="../assets/img/155304941.jpg" alt="卡拉佛" class="partner-tu" />
          <div class="partner-title">卡拉佛</div>
        </li>
        <li class="partner-li">
          <img src="../assets/img/155555871.jpg" alt="闪回收" class="partner-tu" />
          <div class="partner-title">闪回收</div>
        </li>
        <li class="partner-li">
          <img src="../assets/img/021157681.jpg" alt="尚德机构" class="partner-tu" />
          <div class="partner-title">尚德机构</div>
        </li>
        <li class="partner-li">
          <img src="../assets/img/173246311.jpg" alt="兰州交通大学" class="partner-tu" />
          <div class="partner-title">兰州交通大学</div>
        </li>
        <li class="partner-li" style="margin-right:0;">
          <img src="../assets/img/1905535956714.jpg" alt="蚂蚁金服" class="partner-tu" />
          <div class="partner-title">蚂蚁金服</div>
        </li>
        <li class="partner-li">
          <img src="../assets/img/1902114756714.jpg" alt="科大讯飞" class="partner-tu" />
          <div class="partner-title">科大讯飞</div>
        </li>
        <li class="partner-li">
          <img src="../assets/img/2157067856714.jpg" alt="陕西安踏" class="partner-tu" />
          <div class="partner-title">陕西安踏</div>
        </li>
        <li class="partner-li">
          <img src="../assets/img/010309651.jpg" alt="广州链家" class="partner-tu" />
          <div class="partner-title">广州链家</div>
        </li>
        <li class="partner-li" style="margin-right:0;">
          <img src="../assets/img/2337164356714.jpg" alt="北京交通大学" class="partner-tu" />
          <div class="partner-title">北京交通大学</div>
        </li>
        <li class="partner-li">
          <img src="../assets/img/233943471.jpg" alt="芝麻信用" class="partner-tu" />
          <div class="partner-title">芝麻信用</div>
        </li>
        <li class="partner-li">
          <img src="../assets/img/234346521.jpg" alt="德邦快递" class="partner-tu" />
          <div class="partner-title">德邦快递</div>
        </li>
        <li class="partner-li">
          <img src="../assets/img/2201453256714.jpg" alt="火柴爱心公益" class="partner-tu" />
          <div class="partner-title">火柴爱心公益</div>
        </li>
        <li class="partner-li" style="margin-right:0;">
          <img src="../assets/img/173818631.jpg" alt="新瑞公益" class="partner-tu" />
          <div class="partner-title">新瑞公益</div>
        </li>
        <li class="partner-li">
          <img src="../assets/img/173623131.jpg" alt="新华爱心公益基金会" class="partner-tu" />
          <div class="partner-title">新华爱心公益基金会</div>
        </li>
      </ul>
    </div>
    <my-footer></my-footer>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
 /* 父元素  */
.partner {
  width: 75rem;
  margin: 0 auto;
  padding: 20px 0;
}
ul {
  display: block;
  margin-block-start: 1em; /*相对父元素乘以的倍数 等效margin-top:1rem*/
  margin-block-end: 1em; /*下外边距1rem*/
  margin-inline-start: 0px;
  margin-inline-end: 0px; /*固定不可变 会换行*/
  padding-inline-start: 0; /*同上*/
}
.partner-ul:after {
  content: " ";
  display: block;
  clear: both;
  height: 0;
  overflow: hidden;
  visibility: hidden;
}
.partner-li {
  width: 285px;
  margin-right: 20px;
  background: #fff;
  padding: 10px 0;
  margin-bottom: 15px;
  float: left;
  border-radius: 3px;
}
img {
  border: none;
  display: block;
  width: 285px;
  height: 132.69px;
}
.partner-tu {
  width: 100%;
  margin-bottom: 5px;
}
.partner-title {
  width: 95%;
  margin: 0 auto;
  text-align: center;
  font-size: 18px;
}
</style>