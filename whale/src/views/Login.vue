<template>
  <div class="bg">
    <my-header></my-header>
    <div class="login">
      <div class="login-title">衣路有你，白鲸鱼在行动</div>
      <div class="loginbjy">
        <h2>账号登录</h2>
        <div class="d1">
          <input type="text" class="input-uname" placeholder="请输入用户名/Email/手机号码" />
        </div>
        <div class="d1">
          <input type="password" class="input-password" placeholder="请输入密码" />
        </div>
        <div class="d1">
          <button>登录</button>
        </div>
        <div style="margin:0px 10px">
          <a href>会员注册</a>
          <span>|</span>
          <a href>忘记密码</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.bg{
  width: 100%;
  height: 100%;
  background: url("../assets/img/bjyloginbg.jpg")
}
.bg-color{
  background:transparent !important;
}
.login {
  width: 100%;
  height: 45rem;
  position: relative;
}
.login-title{
  width: 30.25rem;
  height: 3.75rem;
  position: absolute;
  top: 10%;
  left: 50%;
  margin-left:-15rem;
  color:#fff;
  font-size: 2.75rem;
}
.loginbjy {
  width: 21.375rem;
  height: 19rem;
  position: absolute;
  top:0;bottom:0;left:0;right:0;
  margin:auto;
  background: #fff;
  border-radius: 0.25rem;
  padding-left:0.5rem;
  padding-right:0.5rem;
}
.loginbjy h2 {
  height: 2.5rem;
  text-align: center;
  color: #666;
  margin-top: 0.75rem;
  padding-bottom:0.75rem;
  border-bottom:2px solid #E5E5E5  ;
}
.d1 {
  width: 100%;
  height: 4rem;
  text-align: center;
}
.input-uname{
  background:url("../assets/img/input-username.png") no-repeat 0.25rem;
}
.input-password{
  background:url("../assets/img/input-password.png") no-repeat 0.25rem;
}
input {
  width: 20rem;
  height: 1.875rem;
  padding-left: 1.5rem;
  margin-top: 1.125rem;
  font-size: 0.75rem;
  outline:none;
  border-radius: 0.25rem;
}
button {
  width: 20rem;
  height: 2.5rem;
  background: #0569d5;
  font-size: 1.125rem;
  color: #fff;
  text-align: center;
  border-radius: 0.25rem;
  outline:none;
}
a {
  color: #225588;
  margin: 0 0.625rem;
}
</style>>
