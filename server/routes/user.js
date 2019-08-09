//创建首页路由器
const express = require("express");
const pool = require("../pool.js");
var user = express.Router();
user.get("/",(req,res)=>{
	console.log("1");
	res.send({code:200});
})
module.exports = user;