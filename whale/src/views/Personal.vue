<template>
  <div>
    <my-header class="bg-color header"></my-header>
    <div class="main_td">
      <div class="left-nav">
        <div>
          <img src="../assets/img/side-user.png" />会员服务
        </div>
        <ul @click="handleNav">
          <li id="one">账户详情</li>
          <li id="two">修改资料</li>
          <li id="four">我的关注</li>
          <li id="six">我的订单</li>
          <li id="seven">我的预约</li>
          <li id="eight">鲸鱼币记录</li>
        </ul>
      </div>
      <div class="right-content">
        <div id="content">
          <div class="user">
            <div class="user-avart">
                <img :src="'http://127.0.0.1:3000/'+list.img" width="100" height="100" />
            </div>
            <ul class="user-detail">
              <li>
                <span class="title">欢迎,</span>&nbsp;&nbsp;&nbsp;&nbsp;({{list.uname}})
              </li>
              <li class="detail">
                (个人)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="javascript:;">账户未认证&gt;&gt;</a>
              </li>
              <li class="time">注册时间：{{new Date(list.regtime).toLocaleString()}}</li>
            </ul>
            <div class="user-money">
              <p class="title">当前鲸鱼币</p>
              <span class="my_money">{{list.money_count}}</span> &nbsp;|&nbsp;
              <a href="javascript:;">记录</a>
            </div>
          </div>
          <ul class="message">
            <li>
              <p>站内信</p>
              <p>1</p>
            </li>
            <li>
              <p>鲸鱼币</p>
              <p>{{list.money_count}}</p>
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
          <h1 class="content-title">
            <span>账户详情</span>
          </h1>
          <div>
            <h3>
              <span>基本资料</span>
            </h3>
            <table>
              <tr>
                <td>会员名</td>
                <td>{{list.uname}}</td>
              </tr>
              <tr>
                <td>昵称</td>
                <td>{{list.uname}}</td>
              </tr>
              <tr>
                <td>会员组</td>
                <td>{{list.status==1?"个人":"企业"}}</td>
              </tr>
              <tr>
                <td>登录次数</td>
                <td>{{list.login_count}}</td>
              </tr>
              <tr>
                <td>登录时间</td>
                <td>{{new Date(list.logintime).toLocaleString()}}</td>
              </tr>
              <tr>
                <td>注册时间</td>
                <td>{{new Date(list.regtime).toLocaleString()}}</td>
              </tr>
            </table>
            <h3>
              <span>身份认证</span>
            </h3>
            <table>
              <tr>
                <td>银行认证</td>
                <td>未通过</td>
              </tr>
              <tr>
                <td>实名认证</td>
                <td>未通过</td>
              </tr>
              <tr>
                <td>公司认证</td>
                <td>未通过</td>
              </tr>
            </table>
          </div>
        </div>
        <div id="twocontent">
          <h1 class="content-title" @click="selinfo">
            <span id="basicinfo" class="active">个人资料</span>
            <span id="infoupwd">密码管理</span>
          </h1>
          <div class="infonav">
            <table id="info" @click="hanleUpdateInfo">
              <tr>
                <td>昵称</td>
                <td>
                  {{list.uname}}
                  <a href="javascript:;" id="nichen-content">[修改]</a>
                </td>
              </tr>
              <tr>
                <td>头像</td>
                <td>
                  <a href="javascript:;">
                    <img :src="'http://127.0.0.1:3000/'+list.img" id="avart-content">
                  </a>
                </td>
              </tr>
              <tr>
                <td>邮件</td>
                <td>
                  {{list.email}}
                  <a href="javascript:;" id="email-content">[修改]</a>
                </td>
              </tr>
              <tr>
                <td>手机</td>
                <td>
                  {{list.phone}}
                  <a href="javascript:;" id="phone-content">[修改]</a>
                </td>
              </tr>
            </table>
            <table id="upwd" class="hide">
              <tr>
                <td>旧密码</td>
                <td>
                  <input type="password" v-model="upwd" @focus="focusUpwd" @blur="blurUpwd">
                </td>
                <td></td>
              </tr>
              <tr>
                <td>新密码</td>
                <td>
                  <input type="password" v-model="newupwd" @focus="focusUpwd" @blur="blurNewupwd">
                </td>
                <td></td>
              </tr>
              <tr>
                <td>重复新密码</td>
                <td>
                  <input type="password" v-model="reupwd" @focus="focusUpwd" @blur="blurRewupwd">
                </td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td style="text-align:center;">
                  <button @click="updateupwd" class="save">保存</button>
                  <button @click="cancels">返回</button>
                </td>
                <td></td>
              </tr>
            </table>
          </div>
          <div id="basicupdate">
            <div id="nichen" class="hide">
              <h1 class="content-title">
                <span class="active">修改昵称</span>
              </h1>
              <div>
                <table>
                  <tr>
                    <td>当前昵称</td>
                    <td>{{list.uname}}</td>
                  </tr>
                  <tr>
                    <td>新昵称</td>
                    <td style="text-align:left;">
                      <input type="text" placeholder="只支持字母和数字" v-model="uname" @focus="focusUname" @blur="blurUname">
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>
                      <button class="update" @click="updateuname">修改</button>
                      <button @click="cancel">返回</button>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
            <div id="avart" class="hide">
              <h1 class="content-title">
                <span class="active">管理头像</span>
              </h1> 
              <div class="avart-detail" style="display:flex;">
                <img :src="'http://127.0.0.1:3000/'+list.img">
                <div>
                  <input type="file" id="file" @change="changeImg" accept="image/*" >
                </div>
              </div>
            </div>
            <div id="email" class="hide">
              <h1 class="content-title">
                <span class="active">修改邮箱</span>
              </h1>
              <div>
                <table>
                  <tr>
                    <td>当前邮箱</td>
                    <td>{{list.email}}</td>
                  </tr>
                  <tr>
                    <td>新邮箱</td>
                    <td style="text-align:left;">
                      <input type="text" placeholder="请输入正确格式的邮箱" v-model="email" @focus="focusEmail" @blur="blurEmail">
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>
                      <button class="update" @click="updateemail">修改</button>
                      <button @click="cancel">返回</button>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
            <div id="phone" class="hide">
              <h1 class="content-title">
                <span class="active">修改手机号</span>
              </h1>
              <div>
                <table>
                  <tr>
                    <td>当前手机号</td>
                    <td>{{list.phone}}</td>
                  </tr>
                  <tr>
                    <td>新手机号</td>
                    <td style="text-align:left;">
                      <input type="text" placeholder="请输入11位正确手机号码" v-model="phone" @focus="focusPhone" @blur="blurPhone">
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>
                      <button class="update" @click="updatephone">修改</button>
                      <button @click="cancel">返回</button>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div id="fourcontent">
          <h1 class="content-title">
            <span id="basicinfo" class="active">我的关注</span>
          </h1>
          <div class="item" v-for="(item,i) of focus" :key="i">
            <img :src="'http://127.0.0.1:3000/'+item.img" />
            <div class="item-right">
              <p>{{item.title}}</p>
            </div>
            <div class="item_info">
              <span>{{item.author}}</span>
              <span>{{new Date(item.pushlish).toLocaleDateString()}}</span>
            </div>
          </div>
        </div>
        <div id="sixcontent">
            <h1 class="content-title">
              <span id="basicinfo" class="active">订单详情</span>
            </h1>
            <table>
              <thead>
                <tr>
                  <th>物品名称</th>
                  <th>物品重量</th>
                  <th>发货时间</th>
                  <th>物流号码</th>
                  <th>捐赠地区</th>
                  <th>物流状态</th>
                  <th>成功时间</th>
                </tr>
              </thead>
              <tbody id="ordercontent">
                <tr v-for="(item,i) of order" :key="i">
                  <td>{{item.fname}}</td>
                  <td>{{item.kg==1?"5到10kg":item.kg==2?"10到20kg":item.kg==3?"21到30kg":"30kg以上"}}</td>
                  <td>{{item.deliver_time?new Date(item.deliver_time).toLocaleString():""}}</td>
                  <td>{{item.express}}</td>
                  <td>{{item.oaddress}}</td>
                  <td>{{item.status}}</td>
                  <td>{{item.success_time?new Date(item.success_time).toLocaleString():""}}</td>
                </tr>
              </tbody>
            </table>
        </div>
        <div id="sevencontent">
          <h1 class="content-title">
            <span id="basicinfo" class="active">预约记录</span>
          </h1>
          <table>
            <thead>
              <tr>
                <th>姓名</th>
                <th>手机号码</th>
                <th>重量</th>
                <th>地址</th>
                <th>预约日期</th>
              </tr>
            </thead>
            <tbody id="appoinment">
              <tr v-for="(r,i) of record" :key="i">
                <td>{{r.donator}}</td>
                <td>{{r.cellphone}}</td>
                <td>{{r.kg==1?"5到10kg":r.kg==2?"10到20kg":r.kg==3?"21到30kg":"30kg以上"}}</td>
                <td>{{r.province}}{{r.city}}{{r.region}}{{r.address}}</td>
                <td>{{new Date(r.order_time).toLocaleString()}}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div id="eightcontent">
          <h1 class="content-title">
            <span id="basicinfo" class="active">鲸鱼币</span>
          </h1>
          <table>
            <thead>
              <tr>
                <th>流水号</th>
                <th>数量</th>
                <th>事由</th>
                <th>发生时间</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(ms,i) of money" :key="i">
                <td>{{ms.mid}}</td>
                <td>{{ms.money}}</td>
                <td>{{ms.reason}}</td>
                <td>{{new Date(ms.time).toLocaleString()}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <my-footer></my-footer>
  </div>
</template>
<script>
import qs from "qs";
export default {
  data() {
    return {
      list:{}, //个人信息
      focus:[], //关注
      record:[], //预约记录
      money:[], //鲸鱼币
      order:[], //捐赠订单
      uname:"",  //修改用户名
      email:"", //修改邮箱
      phone:"", //修改手机号码
      upwd:"",  //旧密码
      newupwd:"",  //新密码
      reupwd:"",  //二次输入新密码
      num:0, //可以更新密码的条件
    };
  },
  methods: {
    selinfo(e) {
      var spans = document.querySelectorAll(".content-title>span");
      var tables = document.querySelectorAll("#twocontent .infonav table");
      var targetid = e.target.id.substr(-4, 4);
      if(e.target.id=="basicinfo")basicupdate.style.display="block";
      else basicupdate.style.display="none";
      for (var table of tables) {
        //内容显示
        if (table.id == targetid) table.style.display = "table";
        else table.style.display = "none";
      }
      for (var span of spans) {
        //导航样式
        if (span == e.target) {
          span.style.background = "#3D95E5";
          span.style.color = "#fff";
        } else {
          span.style.background = "#fff";
          span.style.color = "#666";
        }
      }
    },
    handleNav(e) {
      var lis = document.querySelectorAll(".left-nav li");
      var divs = document.querySelectorAll(".right-content>div");
      var targetid = e.target.id;
      for (var div of divs) {
        //内容显示
        if (div.id.indexOf(targetid) != -1) div.style.display = "block";
        else div.style.display = "none";
      }
      for (var li of lis) {
        //导航样式
        if (li == e.target) li.style.background = "#ccc";
        else li.style.background = "#fff";
      }
    },
    hanleUpdateInfo(e){
      var divs = document.querySelectorAll("#basicupdate>div");
      var targetid = e.target.id;
      for (var div of divs) {
        //内容显示
        if (targetid.indexOf(div.id) != -1) div.style.display = "block";
        else div.style.display = "none";
      }
    },
    load2(){//预约记录
       this.axios.get("/user/donate").then(result=>{ 
        if(result.data=="") appoinment.innerHTML="暂无预约记录";
        else this.record=result.data;
      });
    },
    load3(){//鲸鱼币记录
      this.axios.get("/user/money").then(result=>{ 
         this.money=result.data;
      });
    },
    load4(){//关注信息
      this.axios.get("/user/focus").then(result=>{ 
        if(result.data=="") {
          var div=document.createElement("div");
          div.innerHTML="暂无关注信息";
          fourcontent.appendChild(div);
        }
        else this.focus=result.data;
      })
    },
    load5(){//捐赠订单信息
       this.axios.get("/user/order").then(result=>{  
        if(result.data=="") ordercontent.innerHTML="暂无订单记录";
        else {
          for(var i=0;i<result.data.length;i++){
            if(result.data[i].status==1) result.data[i].status="等待处理";
            else if(result.data[i].status==2) result.data[i].status="运输中";
            else if(result.data[i].status==3) result.data[i].status="回收成功";
            else if(result.data[i].status==2) result.data[i].status="已取消";
          }
          console.log(result.data);
          this.order=result.data;
        }
      })
    },
    load(){//加载个人信息
      this.axios.get("/user/select").then(result=>{ 
        this.list=result.data[0];
      });
    },
    focusUname(e){ //用户名文本聚焦
      this.style(e);
      e.target.parentElement.nextElementSibling.innerHTML="会员名称,3-12位字母或数组的组合";
    },
    blurUname(e){ //用户名失去焦点
        var uname=this.uname;       
        var reg=/^[0-9a-z]{3,12}$/i;
        if(reg.test(uname)==false) { 
          e.target.parentElement.nextElementSibling.innerHTML="用户名格式不正确";
          e.target.parentElement.nextElementSibling.style.color="#f00";
        }
        else {//用户名唯一判断
          this.axios.get("/user/selectuname",{params:{uname:uname}}).then(result=>{
            if(result.data.code==-1){
              e.target.parentElement.nextElementSibling.innerHTML=result.data.msg;
              e.target.parentElement.nextElementSibling.style.color="#f00";
            }
            else{
              e.target.parentElement.nextElementSibling.innerHTML="用户名可用";
              e.target.parentElement.nextElementSibling.style.color="#0d0";
            }
          })
        }
    },
    focusEmail(e){ //邮箱文本聚焦
      this.style(e);
      e.target.parentElement.nextElementSibling.innerHTML="合法的电子邮箱";
    },
    blurEmail(e){ //邮箱文本失去焦点
      var email=this.email;
        var reg=/^\w+@\w+\.\w+(\.cn)?$/;
        if(reg.test(email)==false) {
          e.target.parentElement.nextElementSibling.innerHTML="邮箱格式不正确";
          e.target.parentElement.nextElementSibling.style.color="#f00";
          }
        else {
          e.target.parentElement.nextElementSibling.innerHTML="邮箱可用";
          e.target.parentElement.nextElementSibling.style.color="#0d0";
        }
    },
    focusPhone(e){ //手机文本聚焦
      this.style(e);
      e.target.parentElement.nextElementSibling.innerHTML="输入11位手机号码";
    },
    blurPhone(e){ //手机号文本失去焦点
      var phone=this.phone;
        var reg=/^1[3456789]\d{9}$/;
        if(reg.test(phone)==false) {
          e.target.parentElement.nextElementSibling.innerHTML="手机号码格式不正确";
          e.target.parentElement.nextElementSibling.style.color="#f00";
          }
        else {
          e.target.parentElement.nextElementSibling.innerHTML="手机号码可用";
          e.target.parentElement.nextElementSibling.style.color="#0d0";
        }
    },
    focusUpwd(e){ //旧密码聚焦//新密码聚焦
      this.style(e);
      e.target.parentElement.nextElementSibling.innerHTML="请输入6-12位包含大写字母和数字的密码";
    },
    blurUpwd(e){ //旧密码失去焦点
      var upwd=this.upwd;
      this.axios.post("/user/selupwd",qs.stringify({
      upwd:upwd,
      }),{
        emulateJSON: true
      },{headers:{"Content-Type": "application/x-www-form-urlencoded;charset=utf-8",}
      }).then(result=>{
        e.target.parentElement.nextElementSibling.innerHTML=result.data.msg;
        if(result.data.code==-1) 
          e.target.parentElement.nextElementSibling.style.color="#f00";
        else 
          {e.target.parentElement.nextElementSibling.style.color="#0d0";
            this.num++;
          }
      })
    },
    blurNewupwd(e){ //新密码失去焦点
      var newupwd=this.newupwd;
        var reg=/^(?=.*[A-Z])(?=.*[0-9])\w{6,12}$/;
        if(reg.test(newupwd)==false) {
          e.target.parentElement.nextElementSibling.innerHTML="密码格式不正确";
          e.target.parentElement.nextElementSibling.style.color="#f00";
        }
        else {
          if(newupwd.length>=6 &&newupwd.length<=8){
            e.target.parentElement.nextElementSibling.innerHTML="密码强度弱";
            e.target.parentElement.nextElementSibling.style.color="#f0f";
          }else if(newupwd.length>=8 &&newupwd.length<=10){
            e.target.parentElement.nextElementSibling.innerHTML="密码强度较强";
            e.target.parentElement.nextElementSibling.style.color="#0ef";
          }
          else{
            e.target.parentElement.nextElementSibling.innerHTML="密码强度强";
            e.target.parentElement.nextElementSibling.style.color="#0d0";
          }
          this.num++;
        }
    },
    blurRewupwd(e){//重复密码失去焦点
      var newupwd=this.newupwd;
      var reupwd=this.reupwd;
      var reg=/^(?=.*[A-Z])(?=.*[0-9])\w{6,12}$/;
      if(reg.test(reupwd)==false) {
        e.target.parentElement.nextElementSibling.innerHTML="密码格式不正确";
        e.target.parentElement.nextElementSibling.style.color="#f00";
      }
      else {
        if(newupwd==reupwd){
          e.target.parentElement.nextElementSibling.innerHTML="密码正确";
          e.target.parentElement.nextElementSibling.style.color="#0d0";
          this.num++;
        }else{
        e.target.parentElement.nextElementSibling.innerHTML="两次输入的密码不一致";
        e.target.parentElement.nextElementSibling.style.color="#f00";
        }
      }
    },
    updateuname(){ //修改用户名
      var uname=this.uname;
      this.updateinfo("/user/uname",uname);
    },
    updateemail(){ //修改邮箱
      var email=this.email;
      this.updateinfo("/user/email",email);
    },
    updatephone(){ //修改手机
      var phone=this.phone;
      this.updateinfo("/user/phone",phone);
    },
    updateupwd(){ //密码更新
      var newupwd=this.newupwd;
      if(this.num==3) this.updateinfo("/user/upwd",newupwd);
    },
    updateinfo(url,p){ //修改个人信息请求通用函数
      var p=p;
      this.axios.post(url,qs.stringify({
      p:p,
      }),{
        emulateJSON: true
      },{headers:{"Content-Type": "application/x-www-form-urlencoded;charset=utf-8",}
      }).then(result=>{
        this.load();
      })
    },
    cancel(e){ //返回按钮
       e.target.parentElement.parentElement.previousElementSibling.children[1].children[0].value="";
       e.target.parentElement.parentElement.previousElementSibling.children[2].innerHTML="";
       e.target.parentElement.parentElement.previousElementSibling.children[2].style.backgroundColor="#fff";
    },
    cancels(){
      var tds=document.querySelectorAll("#upwd tr td:last-child");
      console.log(tds);
      for(var td of tds) td.innerHTML="";
    },
    style(e){ //聚焦样式
      e.target.parentElement.nextElementSibling.style.color="skyblue";
    },
    changeImg(){//修改图片
      var eleFile = document.querySelector('#file');
      var file = eleFile.files[0];
      var img=file.name;
      this.updateinfo("/user/img",img);
    }
  },
  created(){
    this.load();
    this.load2();
    this.load3();
    this.load4();
    this.load5();
  },
};
</script>
<style scoped>
.main_td {
  width: 100%;
  display: flex;
  padding-left: 3rem;
  height: 41.5rem;
  padding-top: 3.75rem;
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
  background-color: #fff;
  margin-left: 2rem;
  position: absolute;
  top: 0;
  left: 0;
}
#content {
  z-index: 10;
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
  padding-left: 0.25rem;
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
ul.message {
  width: 100%;
  display: flex;
  margin-top: 2rem;
  border: 1px solid #ddd;
  border-top: 2px solid #ddd;
}
ul.message li {
  height: 6.25rem;
  width: 6.25rem;
  border-right: 1px solid #ddd;
  padding: 1rem 1.25rem;
  text-align: center;
  cursor: pointer;
}
ul.message li p {
  width: 100%;
  text-align: center;
  font-size: 0.75rem;
  height: 2.5rem;
}
ul.message li img + p {
  margin-top: 0.75rem;
}
div.ihead,
div.note {
  height: 4.5rem;
  width: 100%;
  margin-top: 1rem;
}
div.ihead div {
  border-top: #e8e8e8 1px solid;
  padding-top: 0.25rem;
  padding-left: 1.25rem;
  color: #0240a3;
  font-size: 0.75rem;
  background: url(../assets/img/message_sys.gif) no-repeat 0 5px;
}
.note p {
  border-bottom: 1px solid #ddd;
}
.note textarea {
  margin-top: 0.5rem;
  width: 90%;
  border: #9cb8cc 1px dotted;
  padding: 0.25rem;
  height: 2.25rem;
  word-break: break-all;
  color: #444444;
  font-size: 0.75rem;
}
.content-title {
  display: flex;
  height: 2.25rem;
  overflow: hidden;
  border-bottom: #3d95e5 2px solid;
  border-left: #ededed 1px solid;
  margin: 1rem 0 1rem 0;
}
.content-title span {
  font-size: 0.875rem;
  width: 6rem;
  text-align: center;
  display: block;
  height: 2.25rem;
  line-height: 2.25rem;
  padding: 0 1rem;
  background: #fff;
  cursor: pointer;
  border-right: #ededed 1px solid;
  border-top: #ededed 1px solid;
}
span.active {
  background-color: #3d95e5;
  color: #fff;
}
#onecontent h3 {
  padding: 0.5rem 1rem 0.5rem 1.5rem;
  background: #f3f3f3;
  border-left: #3d95e5 2px solid;
  font-weight: bold;
  color: #555555;
  font-size: 0.75rem;
  margin-top: 1rem;
}
#avart-content{
  width: 8rem;
  height: 8rem;;
}
#onecontent table td,
#twocontent table td {
  width: 14rem;
  height: 2rem;
  text-align: right;
  padding-right: 1.875rem;
  font-size: 0.875rem;
}
#twocontent table tr td:nth-child(2){
  width: 12rem;
}
#twocontent #upwd td{
  padding-right: 0.5rem;
}
#twocontent #upwd td:last-child{
  width: 16rem;
  padding-right: 0;
}
#twocontent table tr > td:last-child {
  text-align: left;
}
#upwd button{
  width: 3rem;
  height: 1.5rem;
  text-align: center;
  outline: 0;
  border: 0;
  cursor: pointer;
  margin-right: 1rem;
}
.save{
  background: #1aad19;
  color: #fff;
}
.item {
  display: flex;
  border: 1px solid #ddd;
  padding: 0.25rem;
  cursor: pointer;
}
.item+.item{
  border-top: 0;
}
.item > img {
  width: 7.5rem;
  height: 4rem;
}
.item-right {
  width: 20rem;
  margin-left: 1rem;
  font-size: 0.75rem;
  line-height: 4rem;
}
.item_info {
  width: 20rem;
  display: flex;
  line-height: 4rem;
  font-size: 0.75rem;
  justify-content: flex-end;
  color: #3d95e5;
}
.item_info span {
  padding-right: 0.5rem;
}
.order-select {
  height: 2rem;
}
#nichen input,#email input,#phone input {
  font-size: 0.75rem;
}
#nichen table td,#email table td{
  width: 15rem;
  font-size: 0.75rem;
}
#nichen button,#email button,#phone button{
  width: 4rem;
  height: 1.5rem;
  text-align: center;
  outline: 0;
  border: 0;
  cursor: pointer;
  margin-right: 1rem;
}
#nichen button.update,#email button.update,#phone button.update {
  background: #1aad19;
  color: #fff;
}
.avart-detail img{
  width: 8rem;
  height: 8rem;
}
.avart-detail div{
  width: 8rem;
  height: 8rem;
  border:1px solid #ccc;
  margin-left:2rem;
  background:url(../assets/img/avatar_upload.gif) no-repeat center;
}
.avart-detail div input{
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
#sixcontent table,
#sevencontent table,
#eightcontent table {
  width: 90%;
  margin-top: 1rem;
}
#sixcontent table td,
#sixcontent table th {
  width: 20rem;
  height: 2rem;
  border: 1px solid #666;
  text-align: center;
}
#sixcontent table th {
  background: #ddd;
}
#sevencontent table th{
  background: #e16599;
  color: #fff;
  height: 3rem;
  font-size: 1rem;
  text-align: center;
  border: 1px solid #777;
}
#appoinment td{
  background: #fff;
  color: #333;
  font-size: 1rem;
  text-align: center;
  border: 1px solid #777;
}
#eightcontent table th,
#eightcontent table td {
  border: #e8e8e8 1px solid;
  background: #f1f1f1;
  text-align: center;
  height: 2rem;
  font-size: 0.75rem;
}
#eightcontent table td {
  background: #fff;
}
</style>>