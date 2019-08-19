//创建首页路由器
const express = require("express");
const pool = require("../pool.js");
var user = express.Router();
//1用户登录
/*
user.post("/login",(req,res)=>{
	var obj=req.body;
	var sql=`SELECT uid,uname,upwd FROM whale_user WHERE uname=? AND  binary upwd=?`;
	pool.query(sql,[obj.uname,obj.upwd],(err,result)=>{  //个人表
		if(err)throw err;
		if(result.length>0){
			req.session.uid=result[0].uid;  //session对象中保存数据
			res.send({code:200,msg:"登录成功"})
		}
		else{
			var sql=`SELECT uid,email,upwd FROM whale_user WHERE email=? AND  binary upwd=?`;
			pool.query(sql,[obj.uname,obj.upwd],(err,result)=>{
				if(err)throw err;
				if(result.length>0){
					req.session.uid=result[0].uid;  //session对象中保存数据
					res.send({code:200,msg:"登录成功"})
				}
				else{
					var sql=`SELECT cuid,cuname,upwd FROM whale_company_user WHERE cuname=? AND  binary upwd=?`;
					pool.query(sql,[obj.uname,obj.upwd],(err,result)=>{ //企业表
						if(err)throw err;
						if(result.length>0){
							req.session.uid=result[0].cuid;  //session对象中保存数据
							res.send({code:200,msg:"登录成功"})
						}
						else res.send({code:-1,msg:"用户名密码错误"})
					})
				}
			})
		}
	});
});
*/
user.post("/login",(req,res)=>{
	var obj=req.body;
	var sql=`SELECT uid,uname,upwd FROM whale_user WHERE uname=? OR email=?  AND  binary upwd=?`;
	pool.query(sql,[obj.uname,obj.uname,obj.upwd],(err,result)=>{  //个人表
		if(err)throw err;
		if(result.length>0){
			req.session.uid=result[0].uid;  //session对象中保存数据
			var sql=`UPDATE whale_nav SET article="个人中心",nhref="/personal" WHERE nid=6`;//导航条项目变更
			pool.query(sql,(err,resul)=>{
				if(err)throw err;
				res.send({code:200,msg:"登录成功"})
			})
		}
		else{
			var sql=`SELECT cuid,cuname,upwd FROM whale_company_user WHERE cuname=? AND  binary upwd=?`;
			pool.query(sql,[obj.uname,obj.upwd],(err,result)=>{ //企业表
				if(err)throw err;
				if(result.length>0){
					req.session.uid=result[0].cuid;  //session对象中保存数据

					var sql=`UPDATE whale_nav SET article='个人中心',nhref='/presonal' WHERE nid=6`;//导航条项目变更
					pool.query(sql,(err,resul)=>{
						if(err)throw err;
						res.send({code:200,msg:"登录成功"})
					})
				}
				else res.send({code:-1,msg:"用户名密码错误"})
			})
		}
	});
});
//2用户名查询
/*
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
*/
user.get("/selectuname",(req,res)=>{
	var obj;
	if(req.query.uname!==undefined) obj=req.query.uname; //个人
	if(req.query.cuname!==undefined) obj=req.query.cuname; //企业
	var sql=`SELECT uid FROM whale_user WHERE uname=?`; //在 whale_user表中不存在
	pool.query(sql,[obj],(err,result)=>{
		if(err)throw err;
		if(result.length>0) res.send({code:-1,msg:"用户名已存在"});
		else {
			var sql=`SELECT cuid FROM whale_company_user WHERE cuname=?`;//在 whale_company_user表中不存在
			pool.query(sql,[obj],(err,result)=>{
				if(err)throw err;
				if(result.length>0) res.send({code:-1,msg:"用户名已存在"});
				else res.send({code:200,msg:"用户名可用"});
			})
		}
	});
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
//4捐赠预约
user.post("/appoint",(req,res)=>{
	var uid=req.session.uid;
	if(!uid){
		res.send({code:-1,msg:"请登录"});
		return;
	}
	var donator=req.body.uname;
	var cellphone=req.body.uphone;
	var region=req.body.uregion;
	var province=req.body.uprovince;
	var city=req.body.ucity;
	var address=req.body.uaddress;
	var kg=req.body.ukg;
	var order_time=req.body.udate;

	var obj={uid,donator,province,city,region,address,cellphone,kg,order_time};

	var sql=`INSERT INTO  whale_appointments SET ?`;
	pool.query(sql,[obj],(err,result)=>{
		if(err)throw err;
		if(result.affectedRows>0) res.send({code:200,msg:"预约成功"});
		else res.send({code:-1,msg:"预约失败"});
	})
});
//5用户登录退出
user.get("/logout",(req,res)=>{
	req.session.uid="";
	var sql=`UPDATE whale_nav SET article="登录/注册",nhref="/login" WHERE nid=6`;//导航条项目变更
	pool.query(sql,(err,resul)=>{
		if(err)throw err;
		res.send({code:200,msg:"退出成功"})
	})
});
module.exports = user;