<template>
  <div class="bg">
    <my-header class="header"></my-header>
    <div class="login">
      <div class="login-title">衣路有你，白鲸鱼在行动</div>
      <div class="hide" id="msg"></div>
      <div class="loginbjy">
        <h2>账号登录</h2>
        <div class="d1">
          <input type="text" class="input-uname" placeholder="请输入用户名/Email" v-model="uname">
        </div>
        <div class="d1">
          <input type="password" class="input-password" placeholder="请输入密码" v-model="upwd">
        </div>
        <div class="d1">
          <button @click="login">登录</button>
        </div>
        <div style="margin:0px 10px">
          <router-link to="/reg">会员注册</router-link>
          <span>|</span>
          <a href="javascript:;">记住密码</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import qs from "qs";
export default {
  data(){
    return{
      uname:"",
      upwd:""
    }
  },
  methods:{
    login(){
    var uname=this.uname;
    var upwd=this.upwd;
    this.axios.post("/user/login",qs.stringify({
      uname:uname,
      upwd:upwd
    }),{
      emulateJSON: true
    },{
      headers:{"Content-Type": "application/x-www-form-urlencoded;charset=utf-8",}
    }).then(result=>{
      if(result.data.code==200) {
        this.$router.push("/waybill");
      }
      else {
        msg.style.display="block";
        msg.innerHTML=result.data.msg;
      }
    })
  }
  }
};
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
#msg{ /*错误提示*/
  width: 30rem;
  height: 1rem;
  line-height: 1rem;
  position: absolute;
  top: 22%;
  left: 50%;
  margin-left:-15rem;
  color:#f00;
  font-size: 1rem;
  text-align: center;
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
  border:2px solid #ccc;
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
