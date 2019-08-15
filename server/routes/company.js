//创建首页路由器
const express = require("express");
const pool = require("../pool.js");
var company = express.Router();
/*企业捐赠轮播图*/
company.get("/carousel",(req,res)=>{
	var sql=`SELECT carousel_id,left_img,right_img,title,bgcolor FROM whale_company_carousel`;
	pool.query(sql,(err,result)=>{
		if(err)throw err;
		res.send(result);
	})
})
module.exports = company;