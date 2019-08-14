//创建首页路由器
const express = require("express");
const pool = require("../pool.js");
var user = express.Router();
//1用户登录
user.post("/login",(req,res)=>{
	var obj=req.body;
	var sql=`SELECT uid,uname,upwd FROM WHALE_USER WHERE uname=? AND  binary upwd=?`;
	pool.query(sql,[obj.uname,obj.upwd],(err,result)=>{
		if(err)throw err;
		if(result.length>0){
			req.session.uid=result[0].uid;  //session对象中保存数据
			res.send({code:200,msg:"登录成功"})
		}
		else{
			res.send({code:-1,msg:"用户名密码错误"})
		}
	});
});
//2用户名查询
user.get("/selectuname",(req,res)=>{
	var uname=req.query.uname;
	var sql=`SELECT uid FROM WHALE_USER WHERE uname=?`
	pool.query(sql,[uname],(err,result)=>{
		if(err)throw err;
		if(result.length>0) res.send({code:-1,msg:"用户名已存在"});
		else res.send({code:200,msg:"用户名可用"});
	})
})
//3用户注册
module.exports = user;