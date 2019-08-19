<template>
  <div>
    <my-header class="bg-color"></my-header>
    <div class="main_td">
      <div class="left-nav">
        <div>
          <img src="../assets/img/side-user.png" />会员服务
        </div>
        <ul>
          <li id="one">账户详情</li>
          <li id="two">修改资料</li>
          <li id="three">我的收藏</li>
          <li id="four">我的关注</li>
          <li id="five">我的公益</li>
          <li id="six">我的订单</li>
          <li id="seven">收货地址</li>
          <li id="eight">鲸鱼币记录</li>
        </ul>
      </div>
      <div class="right-content">
        <div id="content" style="z-index:999;">
          <div class="user">
            <div class="user-avart">
              <a href="#">
                <img src="../assets/img/default.jpg" width="100" height="100" />
              </a>
            </div>
            <ul class="user-detail">
              <li>
                <span class="title">欢迎,</span>&nbsp;&nbsp;&nbsp;&nbsp;(liujinwanghui)
              </li>
              <li class="detail">
                (个人)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href>账户详情&gt;&gt;</a>
              </li>
              <li class="time">上次登录：2019-08-09 19:35</li>
            </ul>
            <div class="user-money">
              <p class="title">当前鲸鱼币</p>
              <span class="my_money">20</span> &nbsp;|&nbsp;
              <a href="#">记录</a>
            </div>
          </div>
          <ul class="message">
            <li>
              <p>站内信</p>
              <p>1</p>
            </li>
            <li>
              <p>鲸鱼币</p>
              <p>20</p>
            </li>
            <li>
              <img src="../assets/img/icon_add.png" width="32" height="32" />
              <p>发布信息</p>
            </li>
            <li>
              <img src="../assets/img/icon_order.png" width="32" height="32" />
              <p>兑换订单</p>
            </li>
            <li>
              <img src="../assets/img/icon_favorite.png" width="32" height="32" />
              <p>我的收藏</p>
            </li>
          </ul>
          <div class="ihead">
            <p class="title">系统消息</p>
            <div>鲸鱼币获取规则变更通知</div>
          </div>
          <div class="note">
             <p class="title">鲸鱼便笺</p>
             <textarea>小白为您提供了方便的备忘录，赶紧试试吧！</textarea>
          </div>
        </div>
        <div id="onecontent">
          
        </div>
        <div id="twocontent"></div>
        <div id="threecontent"></div>
        <div id="fourcontent"></div>
        <div id="fivecontent"></div>
        <div id="sixcontent"></div>
        <div id="sevencontent"></div>
        <div id="eightcontent"></div>
      </div>
    </div>个人中心
    <button @click="logout">退出</button>
    <my-footer></my-footer>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    logout() {
      this.axios.get("/user/logout").then(result => {
        alert("退出成功");
      });
    }
  }
};
</script>
<style scoped>
.main_td {
  width: 100%;
  display: flex;
  padding-left: 3rem;
  height: 35rem;
}
.left-nav {
  width: 10%;
  padding-left: 0.5rem;
  border-right: 1px solid #ddd;
}
.left-nav div {
  font-weight: bold;
  font-size: 1rem;
  color: #444444;
  height: 3rem;
  line-height: 3rem;
  background: #f5f5f5;
  border-top: #ddd 1px solid;
  border-bottom: #ddd 1px solid;
}
.left-nav ul li {
  padding: 0.5rem 1rem;
  cursor: pointer;
}
.right-content {
  width: 90%;
  position: relative;
}
.right-content > div {
  height: 37.5rem;
  width: 100%;
  margin-left: 2rem;
  position: absolute;
  top: 0;
  left: 0;
}
/*默认*/
#content .user {
  width: 100%;
  margin-top: 2rem;
  height: 7rem;
  display: flex;
}
.user-avart {
  width: 10%;
}
#content .user-detail {
  width: 30%;
}
.user-detail li {
  font-size: 0.75rem;
  height: 2rem;
  padding: 0.5rem 0 0.5rem 1.25rem;
}
.title {
  font-size: 0.875rem;
  font-weight: bold;
  padding-left:0.25rem;
}
.user a {
  color: #0240a3;
}
.user-money {
  width: 60%;
  padding-left: 1.25rem;
  border-left: 1px solid #ddd;
}
.user-money p {
  padding: 1rem 0;
}
.my_money {
  font-size: 1.25rem;
  font-weight: bold;
}
.my_money + a {
  font-size: 0.75rem;
}
ul.message{
  width: 100%;
  display:flex;
  margin-top:2rem;
  border:1px solid #ddd;
  border-top:2px solid #ddd;
}
ul.message li{
  height:6.25rem ;
  width: 6.25rem;
  border-right:1px solid #ddd;
  padding: 1rem 1.25rem;
  text-align: center;
  cursor: pointer;
}
ul.message li p{
  width: 100%;
  text-align: center;
  font-size:0.75rem;
  height: 2.5rem;
}
ul.message li img+p{
  margin-top:0.75rem;
}
div.ihead,div.note{
  height: 4.5rem;
  width: 100%;
  margin-top:1rem;
}
div.ihead div{
  border-top: #E8E8E8 1px solid;
  padding-top:0.25rem;
  padding-left:1.25rem;
  color: #0240A3;
  font-size:0.75rem;
  background: url(../assets/img/message_sys.gif) no-repeat 0 5px;
}
.note p{
  border-bottom:1px solid #ddd;
}
.note textarea{
  margin-top:0.5rem;
  width: 90%;
  border: #9CB8CC 1px dotted;
  padding: 0.25rem;
  height: 2.25rem;
  word-break: break-all;
  color: #444444;
  font-size:0.75rem;
}
</style>>