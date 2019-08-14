//1加载第三方模块
const express=require("express");
const cors=require("cors");
const session=require("express-session");

//3创建web服务器
var server=express();

//4配置跨域模块
server.use(cors({
  //允许跨域访问程序地址列表
  origin:["http://127.0.0.1:8080","http://localhost:8080"],
  credentials:true  //请求验证
}));
//5配置session
server.use(session({
  secret:"123",   //安全字符串,用于加密
  resave:true,  //请求时更新数据
  saveUninitialized:true  //保存初始的数据
}));
//6创建监听
server.listen(3000);
console.log("服务器启动成功");
//7配置静态目录
server.use(express.static("public"));

//引入第三方模块
const bodyParser = require('body-parser');
server.use(bodyParser.urlencoded({extended:false}));

//引入自定义首页模块
const userRouter=require("./routes/user.js");
server.use("/user",userRouter); //挂载路由

//引入自定义首页模块
const indexRouter=require("./routes/index.js");
server.use("/index",indexRouter); //挂载路由
