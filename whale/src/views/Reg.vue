<template>
  <div>
     <my-header class="header bg-color"></my-header>
    <div class="main">
      <div class="reg-title">
        <ul class="reg-progress">
          <li>
            <span class="icon1">&nbsp;&nbsp;注册验证</span>
          </li>
          <li>
            <span class="icon2">&nbsp;&nbsp;注册成功</span>
          </li>
        </ul>
      </div>
      <div class="reg-main">
        <div class="reg-content">
          <div class="types">
            <b class="title">
              <span class="star">*</span> 会员类型
            </b>
            <label>
              <input id="comp-tab" type="radio" name="tab" value="comp" @click="tab">企业
            </label>
            <label>
              <input id="pers-tab" type="radio" name="tab" value="pers" checked @click="tab">个人
            </label>
          </div>
          <ul class="reg-details hide" id="comp">
            <li>
              <b class="title">
                <span class="star">*</span> 公司名称
              </b>
              <input type="text" placeholder="公司全称" id="company" v-model="company_name" @focus="msg_vail"  @blur="msg2_vail">
              <span class="msg"></span>
            </li>
            <li>
              <b class="title">
                <span class="star">*</span> 会员名称
              </b>
              <input type="text" placeholder="会员名称" id="cu" v-model="cuname" @focus="msg_vail"  @blur="msg2_vail">
              <span class="msg">会员名称，不支持中文</span>
            </li>
            <li>
              <b class="title">
                <span class="star">*</span> 登录密码
              </b>
              <input type="password" placeholder="登录密码" id="cp" v-model="cupwd" @focus="msg_vail"  @blur="msg2_vail">
              <span class="msg"></span>
            </li>
            <li>
              <b class="title">
                <span class="star">*</span> 重复输入
              </b>
              <input type="password" placeholder="再输入一遍登录密码" id="rcp" v-model="rcupwd" @focus="msg_vail"  @blur="msg2_vail">
              <span class="msg"></span>
            </li>
          </ul>
          <ul class="reg-details" id="pers">
            <li>
              <b class="title">
                <span class="star">*</span> 会员名称
              </b>
              <input type="text" placeholder="会员名称" id="u" v-model="uname" @focus="msg_vail"  @blur="msg2_vail">
              <span class="msg"></span>
            </li>
            <li>
              <b class="title">
                <span class="star">*</span> 登录密码
              </b>
              <input type="password" placeholder="登录密码" id="p" v-model="upwd" @focus="msg_vail"  @blur="msg2_vail">
              <span class="msg"></span>
            </li>
            <li>
              <b class="title">
                <span class="star">*</span> 重复输入
              </b>
              <input type="password" placeholder="再输入一遍登录密码" id="rp" v-model="rupwd" @focus="msg_vail"  @blur="msg2_vail">
              <span class="msg"></span>
            </li>
            <li>
              <b class="title">
                <span class="star">*</span> 手机号码
              </b>
              <input type="text" placeholder="请输入手机号码" id="ph" v-model="phone" @focus="msg_vail" @blur="msg2_vail">
              <span class="msg"></span>
            </li>
            <li>
              <b class="title">
                <span class="star">*</span> 电子邮箱
              </b>
              <input type="text" placeholder="请输入合法的电子邮箱" id="em" v-model="email" @focus="msg_vail"  @blur="msg2_vail">
              <span class="msg"></span>
            </li>
            <li>
              <b class="title">
                <span class="star">*</span> 验证码
              </b>
              <input type="text" class="text-vali" id="vali" v-model="vailnum" @blur="msg2_vail">
              <div class="vali_num" id="valicode" @click="createCode(4)"></div>
              <span class="renum" @click="createCode(4)">看不清换一张</span>
              <span class="msg"></span>
            </li>
          </ul>
        </div>
        <div class="btns"><button class="reg-btn" @click="register">立即注册</button></div>
      </div>
      <div class="reg-success hide">
          <div class="reg-notice">恭喜您！会员注册成功</div>
          <div class="reg-msg" id="dec"></div>
          <button class="reg-login" @click="ends">立即登录</button>
      </div>
    </div>
    <my-footer></my-footer>
  </div>
</template>
<script>
import qs from "qs";
export default {
  data(){
    return{ /*个人*/
      uname:"",
      upwd:"",
      rupwd:"",
      phone:"",
      email:"",
      vailnum:"",
      cupwd:"",/*企业*/
      rcupwd:"",
      cuname:"",
      company_name:"",
      num:0,   //注册选项填的数目
      status:0, /*企业个人之间切换0-个人默认 1-企业*/
      timer:"", //定时器
    }
  },
  methods:{
    tab(e){ /*企业个人之间切换*/
      var tabid=e.target.id;
      if(tabid=="comp-tab"){
          comp.style.display="block";
          pers.style.display="none";
          this.status=1;
      } else{
        comp.style.display="none";
        pers.style.display="block";
        this.status=0;
      } 
    },
    msg_vail(e){ /*文本框聚焦*/
      e.target.nextElementSibling.style.display="block";e.target.nextElementSibling.style.backgroundColor="#000";
      if(e.target.id=="u" ||e.target.id=="cu")/*用户名*/
        e.target.nextElementSibling.innerHTML="会员名称,3-12位字母或数组的组合";
        /*密码*/
      if(e.target.id=="p" || e.target.id=="cp" || e.target.id=="rp" || e.target.id=="rcp") 
        e.target.nextElementSibling.innerHTML="6-12字母数字下划线组合,包含大写字母和数字";
      if(e.target.id=="ph") /*手机号码*/
        e.target.nextElementSibling.innerHTML="11位合法的手机号码";  
      if(e.target.id=="em") /*电子邮箱*/  
        e.target.nextElementSibling.innerHTML="合法的电子邮箱"; 
      if(e.target.id=="company") /*企业名称*/  
        e.target.nextElementSibling.innerHTML="公司中文全称，注册后不可更改";   
    },
    msg2_vail(e){ /*文本框失去焦点*/
      e.target.nextElementSibling.style.display="block";
      if(e.target.id=="u"){/*用户名*/
        var uname=this.uname;       
        var reg=/^[0-9a-z]{3,12}$/i;
        if(reg.test(uname)==false) { 
          e.target.nextElementSibling.innerHTML="用户名格式不正确";
          e.target.nextElementSibling.style.backgroundColor="#f00";
        }
        else {//用户名唯一判断
          this.axios.get("/user/selectuname",{params:{uname:uname}}).then(result=>{
            if(result.data.code==-1){
              e.target.nextElementSibling.innerHTML=result.data.msg;
              e.target.nextElementSibling.style.backgroundColor="#f00";
            }
            else{
              e.target.nextElementSibling.innerHTML="用户名可用";
              e.target.nextElementSibling.style.backgroundColor="#0d0";
              this.num++;
            }
          })
        }
      }
      if(e.target.id=="p"){/*密码*/
        var upwd=this.upwd;
        var reg=/^(?=.*[A-Z])(?=.*[0-9])\w{6,12}$/;
        if(reg.test(upwd)==false) {
          e.target.nextElementSibling.innerHTML="密码格式不正确";
          e.target.nextElementSibling.style.backgroundColor="#f00";
        }
        else {
          if(upwd.length>=6 &&upwd.length<=8){
            e.target.nextElementSibling.innerHTML="密码强度弱";
            e.target.nextElementSibling.style.backgroundColor="#f0f";
          }else if(upwd.length>=8 &&upwd.length<=10){
            e.target.nextElementSibling.innerHTML="密码强度较强";
            e.target.nextElementSibling.style.backgroundColor="#0ef";
          }
          else{
            e.target.nextElementSibling.innerHTML="密码强度强";
            e.target.nextElementSibling.style.backgroundColor="#0d0";
          }
          this.num++;
        }
      }
      if(e.target.id=="rp"){/*确认密码*/
        var upwd=this.upwd;
        var rupwd=this.rupwd;
        var reg=/^(?=.*[A-Z])(?=.*[0-9])\w{6,12}$/;
        if(reg.test(rupwd)==false) {
          e.target.nextElementSibling.innerHTML="密码格式不正确";
          e.target.nextElementSibling.style.backgroundColor="#f00";
        }
        else {
          if(upwd==rupwd){
            e.target.nextElementSibling.innerHTML="密码正确";
            e.target.nextElementSibling.style.backgroundColor="#0d0";
            this.num++;
          }else{
            e.target.nextElementSibling.innerHTML="两次输入的密码不一致";
            e.target.nextElementSibling.style.backgroundColor="#f00";
          }
        }
      }
      if(e.target.id=="ph"){/*手机号码*/
        var phone=this.phone;
        var reg=/^1[3456789]\d{9}$/;
        if(reg.test(phone)==false) {
          e.target.nextElementSibling.innerHTML="手机号码格式不正确";
          e.target.nextElementSibling.style.backgroundColor="#f00";
          }
        else {
          e.target.nextElementSibling.innerHTML="手机号码可用";
          e.target.nextElementSibling.style.backgroundColor="#0d0";
          this.num++;
        }
      }
       if(e.target.id=="em"){/*电子邮箱*/
        var email=this.email;
        var reg=/^\w+@\w+\.\w+(\.cn)?$/;
        if(reg.test(email)==false) {
          e.target.nextElementSibling.innerHTML="邮箱格式不正确";
          e.target.nextElementSibling.style.backgroundColor="#f00";
          }
        else {
          e.target.nextElementSibling.innerHTML="邮箱可用";
          e.target.nextElementSibling.style.backgroundColor="#0d0";
          this.num++;
        }
      }
      if(e.target.id=="vali"){ /*验证码判断*/
        var vailnum=this.vailnum;
        var checkCode=valicode.innerHTML;
        var msg=e.target.parentElement.lastElementChild;
        msg.style.display="block";
        if(vailnum.length <= 0) { /*未输入*/
          msg.innerHTML="请输入验证码";
          msg.style.backgroundColor="#f00";
        }
        else if(vailnum.toUpperCase() != checkCode.toUpperCase()){
          msg.innerHTML="验证码输入有误,请重新输入";
          msg.style.backgroundColor="#f00";
          this.createCode(4);
        }
        else{
          msg.innerHTML="验证码正确";
          msg.style.backgroundColor="#0d0";
          this.num++;
        }
      }
      if(e.target.id=="cp"){/*企业密码*/
        var cupwd=this.cupwd;
        var reg=/^(?=.*[A-Z])(?=.*[0-9])\w{6,12}$/;
        if(reg.test(cupwd)==false) {
          e.target.nextElementSibling.innerHTML="密码格式不正确";
          e.target.nextElementSibling.style.backgroundColor="#f00";
        }
        else {
          if(cupwd.length>=6 &&cupwd.length<=8){
            e.target.nextElementSibling.innerHTML="密码强度弱";
            e.target.nextElementSibling.style.backgroundColor="#f0f";
          }else if(cupwd.length>=8 &&cupwd.length<=10){
            e.target.nextElementSibling.innerHTML="密码强度较强";
            e.target.nextElementSibling.style.backgroundColor="#0ef";
          }
          else{
            e.target.nextElementSibling.innerHTML="密码强度强";
            e.target.nextElementSibling.style.backgroundColor="#0d0";
          }
          this.num++;
        }
      }
      if(e.target.id=="rcp"){/*确认密码*/
        var cupwd=this.cupwd;
        var rcupwd=this.rcupwd;
        var reg=/^(?=.*[A-Z])(?=.*[0-9])\w{6,12}$/;
        if(reg.test(rcupwd)==false) {
          e.target.nextElementSibling.innerHTML="密码格式不正确";
          e.target.nextElementSibling.style.backgroundColor="#f00";
        }
        else {
          if(cupwd==rcupwd){
            e.target.nextElementSibling.innerHTML="密码正确";
            e.target.nextElementSibling.style.backgroundColor="#0d0";
            this.num++;
          }else{
            e.target.nextElementSibling.innerHTML="两次输入的密码不一致";
            e.target.nextElementSibling.style.backgroundColor="#f00";
          }
        }
      }
      if(e.target.id=="cu"){/*用户名*/
        var cuname=this.cuname;       
        var reg=/^[0-9a-z]{3,12}$/i;
        if(reg.test(cuname)==false) { 
          e.target.nextElementSibling.innerHTML="用户名格式不正确";
          e.target.nextElementSibling.style.backgroundColor="#f00";
        }
        else {//用户名唯一判断
          this.axios.get("/user/selectuname",{params:{uname:cuname}}).then(result=>{
            if(result.data.code==-1){
              e.target.nextElementSibling.innerHTML=result.data.msg;
              e.target.nextElementSibling.style.backgroundColor="#f00";
            }
            else{
              e.target.nextElementSibling.innerHTML="用户名可用";
              e.target.nextElementSibling.style.backgroundColor="#0d0";
              this.num++;
            }
          })
        }
      }
      if(e.target.id=="company"){ /*公司名称*/
        var company_name=this.company_name; 
        var reg=/^[\u4e00-\u9fa5]+$/
        if(!company_name){
          e.target.nextElementSibling.innerHTML="公司名称不能为空";
          e.target.nextElementSibling.style.backgroundColor="#f00";
        }
        else if(reg.test(company_name)==false){
          e.target.nextElementSibling.innerHTML="公司名称格式错误";
          e.target.nextElementSibling.style.backgroundColor="#f00";
        }
        else{
          e.target.nextElementSibling.innerHTML="公司名称可用";
          e.target.nextElementSibling.style.backgroundColor="#0d0";
          this.num++;
        }
      }
    },
    createCode(length){/*随机验证码的生成 */
      var code="";
      var length=parseInt(length); //验证码的长度
        //所有候选组成验证码的字符
      var codeChars =[0, 1, 2, 3, 4, 5, 6, 7, 8, 9,'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I','J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']; 
      for (var i=0; i<length; i++)//循环组成验证码的字符串
      {
        var index=Math.floor(Math.random()*62);//获取随机验证码下标
        code+=codeChars[index];//组合成指定字符验证码
      }
        valicode.innerHTML = code;//将生成验证码赋值到显示区
    },
    register(e){ //注册按钮  
      if(this.num==6 && this.status==0){ //个人
        var uname=this.uname;
        var upwd=this.upwd;
        var email=this.email;
        var phone=this.phone;
        this.axios.post("/user/reg",qs.stringify({
          uname:uname,
          upwd:upwd,
          phone:phone,
          email:email
        }),{emulateJSON: true},{
           headers:{"Content-Type": "application/x-www-form-urlencoded;charset=utf-8",}
        }).then(result=>{
          console.log(result);
          if(result.data.code==-1) alert(`${result.data.msg}`);
          else{
            var reg_main=e.target.parentElement.parentElement;
            var reg_success=e.target.parentElement.parentElement.nextElementSibling;
            reg_main.style.display="none";
            reg_success.style.display="block";
            var n=5; //倒计时
            this.timer=setInterval(()=>{	
              dec.innerHTML=`${n}秒后自动登录系统...`;
              n--;
              if(n==0){
                this.$router.push("/login");
                clearInterval(this.timer);
              }
            },1000);
          }
        })
      }
      if(this.num==4 && this.status==1){ //企业
        var cuname=this.cuname;
        var cupwd=this.cupwd;
        var company_name=this.company_name;
        this.axios.post("/user/companyreg",qs.stringify({
          cuname:cuname,
          company_name:company_name,
          upwd:cupwd
        }),{emulateJSON: true},{
           headers:{"Content-Type": "application/x-www-form-urlencoded;charset=utf-8",}
        }).then(result=>{
          if(result.data.code==-1) alert(`${result.data.msg}`);
          else{
            var reg_main=e.target.parentElement.parentElement;
            var reg_success=e.target.parentElement.parentElement.nextElementSibling;
            reg_main.style.display="none";
            reg_success.style.display="block";
            var n=5; //倒计时
            this.timer=setInterval(()=>{	
              dec.innerHTML=`${n}秒后自动登录系统...`;
              n--;
              if(n==0){
                this.$router.push("/login");
                clearInterval(this.timer);
              }
            },1000);
          }
        })
      }
    },
    ends(){ //手动干预进入登录页面
      clearInterval(this.timer);
      this.$router.push("/login");
    },
  },
  computed: {
  },
  mounted(){
    this.createCode(4);
  },
};
</script>
<style scoped>
.main{
  width: 100%;
  padding-top:3.75rem;
}
.reg-title,
.reg-main {
  width: 100%;
  margin-top: 3.75rem;
}
.reg-title .reg-progress {
  width: 43.75rem;
  display: flex;
  margin: 0 auto;
  border-bottom: 2px solid #ccc;
}
.reg-title .reg-progress li {
  margin: 0 auto;
  font-weight: bold;
  padding: 0 3.125rem;
}
.star {
  color: red;
}
.icon1,
.icon2 {
  width: 1rem;
  height: 1rem;
  background: url(../assets/img/reg-step.png) no-repeat 0px -72px;
  padding: 0.25rem 1rem;
}
.icon2 {
  background: url(../assets/img/reg-step.png) no-repeat 0px -48px;
}
.reg-content ,.btns{
  width: 40rem;
  margin: 0 auto;
}
.reg-content .types,
.reg-content .reg-details {
  width: 100%;
  margin: 1rem auto;
}
.reg-content .types input {
  margin-left: 1rem;
}
.reg-details li {
  width: 100%;
  height: 3rem;
  line-height: 3rem;
  display: flex;
  margin-bottom: 2rem;
}
.reg-details li .title {
  display: block;
  width: 6rem;
}
.reg-details li input {
  width: 18rem;
  outline: none;
  border-radius: 0.25rem;
  padding-left: 0.25rem;
  font-size: 0.875rem;
}
.reg-details li .msg {
  display: none;
  padding-left: 0.25rem;
  padding-right: 0.15rem;
  font-size: 0.5rem;
  color:#fff;
  height: 1.5rem;
  line-height: 1.5rem;
  margin-top:0.5rem;
  margin-left:0.3rem;
  border-radius: 1px;
}
.vali_num {
  margin-left: 0.5rem;
  width: 5rem;
  height: 3rem;
  background-color: #D8B7E3;
  border: 0.25rem;
  text-align: center;
  font-style:italic;
  color:blue;
  font-size:1.5rem;
  font-weight:bolder;                    
  cursor:pointer;
}
.renum{
  font-size:0.75rem;
  color:#288bc4;
  padding-left:0.5rem;
}
.renum:hover {
  cursor:pointer;
}
.reg-details li .text-vali {
  width: 8rem;
}
.reg-btn {
  display: block;
  width: 18rem;
  height: 2.5rem;
  margin-top:3rem;
  margin-bottom:6rem;
  margin-left:6rem;
  background: #ff6375;
  font-size: 1rem;
  color: #fff;
  border-radius: 0.25rem;
  text-align: center;
  outline: 0;
  border: 0;
}
.reg-btn:hover{
  background: #0569D5;
}
.hide{
  display:none;
}
.reg-success{
  width: 20rem;
  margin:6rem auto;
  text-align: center;
  padding:1rem 0;
}
.reg-notice{
  width: 100%;
  color:#4fa800;
  text-align: center;
  margin-bottom:3rem;
}
.reg-msg{
  font-size:0.875rem;
  text-align: center;
  margin-bottom:2rem;
  color:#f00;
}
.reg-login{
  display: block;
  width: 16rem;
  height: 2.5rem;
  line-height: 2.5rem;
  background: #4fa800;
  font-size: 1rem;
  color: #fff;
  border-radius: 0.25rem;
  text-align: center;
  outline: 0;
  border: 0;
  margin:0 auto;
}
.reg-login:hover{text-decoration: none;}
</style>