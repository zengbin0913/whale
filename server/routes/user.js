//创建首页路由器
const express = require("express");
const pool = require("../pool.js");
var user = express.Router();
//1用户登录
user.post("/login",(req,res)=>{
	var obj=req.body;
	var sql=`SELECT uid,uname,upwd FROM whale_user WHERE uname=? OR email=?  AND  binary upwd=?`;
	pool.query(sql,[obj.uname,obj.uname,obj.upwd],(err,result)=>{  //个人表
		if(err)throw err;
		if(result.length>0){
			req.session.uid=result[0].uid;  //session对象中保存数据
			res.send({code:200,msg:"登录成功"});
			var sql=`UPDATE whale_nav SET article="个人中心",nhref="/personal" WHERE nid=6`;//导航条项目变更
			pool.query(sql,(err,result)=>{
				if(err)throw err;
			});
			var sql=`UPDATE whale_nav SET article="退出",nhref="/index" WHERE nid=7`;//导航条项目变更
			pool.query(sql,(err,result)=>{
				if(err)throw err;
			});
			var logintime=new Date().getTime(); /*登录时间更新*/
			var sql1=`UPDATE whale_user SET login_count=login_count+1,logintime=? WHERE uid=?`;
			pool.query(sql1,[logintime,result[0].uid],(err,result)=>{
				if(err)throw err;
			})
		}
		else{
			var sql=`SELECT cuid,cuname,upwd FROM whale_company_user WHERE cuname=? AND  binary upwd=?`;
			pool.query(sql,[obj.uname,obj.upwd],(err,result)=>{ //企业表
				if(err)throw err;
				if(result.length>0){
					req.session.uid=result[0].cuid;  //session对象中保存数据
					res.send({code:200,msg:"登录成功"});
					var sql=`UPDATE whale_nav SET article='个人中心',nhref='/personal' WHERE nid=6`;//导航条项目变更
					pool.query(sql,(err,resul)=>{
						if(err)throw err;
					})	
					var sql=`UPDATE whale_nav SET article="退出",nhref="/index" WHERE nid=7`;//导航条项目变更
					pool.query(sql,(err,result)=>{
						if(err)throw err;
					});
					var logintime=new Date().getTime(); /*登录时间更新*/
					var sql1=`UPDATE whale_company_user SET logintime=? WHERE cuid=?`;
					pool.query(sql1,[logintime,result[0].cuid],(err,result)=>{
						if(err)throw err;
					})
				}
				else res.send({code:-1,msg:"用户名密码错误"})
			})
		}
	});
});
//2用户名查询
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
	var regtime=new Date().getTime();
	obj.regtime=regtime;
	var sql=`INSERT INTO whale_user SET ?`;
	pool.query(sql,[obj],(err,result)=>{
		if(err)throw err;
		if(result.affectedRows>0){
			res.send({code:200,msg:"注册成功"});

			sql=`SELECT uid FROM whale_user WHERE uname=?`;
			pool.query(sql,[obj.uname],(err,result)=>{ //查询当前注册的用户id
				if(err)throw err;

				var uid=result[0].uid;
				var reason="注册账号获得";
				var money=20;
				var time=regtime;
				var obj1={reason,money,uid,time};
				sql=`INSERT INTO whale_money SET ?`;
				pool.query(sql,[obj1],(err,result)=>{ //增加当前用户的鲸鱼币记录
					if(err)throw err;
				})
			})
		}	
		else
			res.send({code:-1,msg:"注册失败"})
	});
});
//3用户注册--企业
user.post("/companyreg",(req,res)=>{
	var obj=req.body;
	var regtime=new Date().getTime();
	obj.regtime=regtime;
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
	});
	var sql=`UPDATE whale_nav SET article="",nhref="" WHERE nid=7`;//导航条项目变更
	pool.query(sql,(err,result)=>{
		if(err)throw err;
	});
	res.send({code:200,msg:"退出成功"});
});
//6查询用户个人信息
user.get("/select",(req,res)=>{
	var uid=req.session.uid;
	var sql=`SELECT uid,uname,phone,email,regtime,logintime,img,status,money_count,login_count FROM whale_user WHERE uid=?`;
	pool.query(sql,[uid],(err,result)=>{
		if(err)throw err;
		res.send(result);
	})
});
//7查询用户捐赠订单详情
user.get("/order",(req,res)=>{
	var uid=req.session.uid;
	var sql=`SELECT whale_family.fname,whale_family.kg,whale_order.oaddress,whale_order.status,whale_order.deliver_time,whale_order.success_time,whale_order.express FROM whale_order,whale_family WHERE uid=? AND whale_order.fid=whale_family.fid`;
	pool.query(sql,[uid],(err,result)=>{
		if(err)throw err;
		res.send(result);
	})
});
//8查询用户预约记录
user.get("/donate",(req,res)=>{
	var uid=req.session.uid;
	var sql=`SELECT aid,donator,kg,province,city,region,address,order_time,cellphone FROM whale_appointments WHERE uid=?`;
	pool.query(sql,[uid],(err,result)=>{
		if(err)throw err;
		res.send(result);
	});
});
//9查询用户鲸鱼币记录
user.get("/money",(req,res)=>{
	var uid=req.session.uid;
	var sql=`SELECT mid,reason,money,time FROM whale_money WHERE uid=?`;
	pool.query(sql,[uid],(err,result)=>{
		if(err)throw err;
		res.send(result);
	})
});
//10查询用户公益关注记录
user.get("/focus",(req,res)=>{
	var uid=req.session.uid;
	var sql=`SELECT whale_detail.title,whale_detail.pushlish,whale_detail.author,whale_detail.img FROM whale_detail,whale_detail_focus WHERE whale_detail_focus.uid=? AND whale_detail.did=whale_detail_focus.did`;
	pool.query(sql,[uid],(err,result)=>{
		if(err)throw err;
		res.send(result);
	})
});
//11修改用户昵称
user.post("/uname",(req,res)=>{
	var uid=req.session.uid;
	var uname=req.body.p;
	var sql=`UPDATE whale_user SET uname=? WHERE uid=?`;
	pool.query(sql,[uname,uid],(err,result)=>{
		if(err) throw err;
		if(result.affectedRows>0) res.send({code:200,msg:"用户名修改成功"});
		else res.send({code:-1,msg:"用户名修改失败"})
	})
});
//12修改用户邮箱
user.post("/email",(req,res)=>{
	var uid=req.session.uid;
	var email=req.body.p;
	var sql=`UPDATE whale_user SET email=? WHERE uid=?`;
	pool.query(sql,[email,uid],(err,result)=>{
		if(err) throw err;
		if(result.affectedRows>0) res.send({code:200,msg:"邮箱修改成功"});
		else res.send({code:-1,msg:"邮箱修改失败"})
	})
});
//13修改手机号码
user.post("/phone",(req,res)=>{
	var uid=req.session.uid;
	var phone=req.body.p;
	var sql=`UPDATE whale_user SET phone=? WHERE uid=?`;
	pool.query(sql,[phone,uid],(err,result)=>{
		if(err) throw err;
		if(result.affectedRows>0) res.send({code:200,msg:"手机号码修改成功"});
		else res.send({code:-1,msg:"手机号码修改失败"})
	})
});
//14修改用户密码--先判断旧密码是否正确
user.post("/selupwd",(req,res)=>{
	var uid=req.session.uid;
	var upwd=req.body.upwd; /*旧密码*/
	var sql=`SELECT uid FROM whale_user WHERE uid=?  AND  binary upwd=?`;
	pool.query(sql,[uid,upwd],(err,result)=>{
		if(err) throw err;
		if(result.length>0) res.send({code:200,msg:"旧密码正确"});
		else res.send({code:-1,msg:"旧密码不正确"});
	})
})
//15修改用户密码
user.post("/upwd",(req,res)=>{
	var uid=req.session.uid;
	var newupwd=req.body.p; /*新密码*/
	var sql=`UPDATE whale_user SET upwd=? WHERE uid=?`;
	pool.query(sql,[newupwd,uid],(err,result)=>{
		if(err) throw err;
		if(result.affectedRows>0) res.send({code:200,msg:"密码修改成功"});
		else res.send({code:-1,msg:"密码修改失败"});
	})
});
//16添加用户收藏
user.get("/addlike",(req,res)=>{
	var uid=req.session.uid;
	if(!uid){
		res.send({code:-1,msg:"尚未登录,请先登录 "});
		return;
	}
	var did=req.query.did;
	//先查询该用户是否已经添加过
	var sql=`SELECT dfid FROM whale_detail_focus WHERE did=? AND uid=?`; 
	pool.query(sql,[did,uid],(err,result)=>{
		if(err) throw err;
		if(result.length>0){  //已添加,取消收藏
			var dfid=result[0].dfid;
			var sql=`DELETE FROM whale_detail_focus WHERE dfid=?`;
			pool.query(sql,[dfid],(err,result)=>{
				if(err)throw err;
				if(result.affectedRows>0) res.send({code:201,msg:"取消关注成功"});
				else res.send({code:-1,msg:"取消关注失败"});
			})
		}
		else {   //未添加,进行添加
			var obj={uid,did};
			var sql=`INSERT INTO whale_detail_focus SET ?`;
			pool.query(sql,[obj],(err,result)=>{
				if(err) throw err;
				if(result.affectedRows>0) res.send({code:200,msg:"关注成功"});
				else res.send({code:-1,msg:"关注失败"});
			})		
		}
	})
})
module.exports = user;