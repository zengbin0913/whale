//创建首页路由器
const express = require("express");
const pool = require("../pool.js");
var user = express.Router();
//1用户登录--个人
user.post("/login",(req,res)=>{
	var obj=req.body;
	var sql=`SELECT uid,uname,upwd FROM whale_user WHERE uname=? AND  binary upwd=?`;
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
	var cuname=req.query.cuname;
	if(uname!==undefined){ //个人
		var sql=`SELECT uid FROM whale_user WHERE uname=?`; //在 whale_user表中不存在
		pool.query(sql,[uname],(err,result)=>{
			if(err)throw err;
			if(result.length>0) res.send({code:-1,msg:"用户名已存在"});
			else {
				var sql=`SELECT cuid FROM whale_company_user WHERE cuname=?`;//在 whale_company_user表中不存在
				pool.query(sql,[uname],(err,result)=>{
					if(err)throw err;
					if(result.length>0) res.send({code:-1,msg:"用户名已存在"});
					else res.send({code:200,msg:"用户名可用"});
				})
			}
		});
	}
	if(cuname!==undefined){ //企业
		var sql=`SELECT uid FROM whale_user WHERE uname=?`; //在 whale_user表中不存在
		pool.query(sql,[cuname],(err,result)=>{
			if(err)throw err;
			if(result.length>0) res.send({code:-1,msg:"用户名已存在"});
			else {
				var sql=`SELECT cuid FROM whale_company_user WHERE cuname=?`;//在 whale_company_user表中不存在
				pool.query(sql,[cuname],(err,result)=>{
					if(err)throw err;
					if(result.length>0) res.send({code:-1,msg:"用户名已存在"});
					else res.send({code:200,msg:"用户名可用"});
				})
			}
		});
	}
});
//3用户注册--个人
user.post("/reg",(req,res)=>{
	var obj=req.body;
	var sql=`INSERT INTO whale_user SET ?`;
	pool.query(sql,[obj],(err,result)=>{
		if(err)throw err;
		if(result.affectedRows>0)
			res.send({code:200,msg:"注册成功"})
		else
			res.send({code:-1,msg:"注册失败"})
	});
});
//3用户注册--企业
user.post("/companyreg",(req,res)=>{
	var obj=req.body;
	var sql=`INSERT INTO whale_company_user SET ?`;
	pool.query(sql,[obj],(err,result)=>{
		if(err)throw err;
		if(result.affectedRows>0)
			res.send({code:200,msg:"注册成功"})
		else
			res.send({code:-1,msg:"注册失败"})
	});
});
module.exports = user;