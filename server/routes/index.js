//创建首页路由器
const express = require("express");
const pool = require("../pool.js");
var index = express.Router();
/*导航条*/
index.get("/nav",(req,res)=>{
	var sql=`SELECT nid,article,nhref FROM whale_nav`;
	pool.query(sql,(err,result)=>{
		if(err)throw err;
		res.send(result);
	})
});
/*首页轮播图*/
index.get("/carousel",(req,res)=>{
	var sql=`SELECT carousel_id,left_img,right_img,title,bgcolor FROM whale_index_carousel`;
	pool.query(sql,(err,result)=>{
		if(err)throw err;
		res.send(result);
	})
})
module.exports = index;
