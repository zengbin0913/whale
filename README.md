
白鲸鱼
数据库设计说明书

文档编号 whale-2019-08
 

1.	概述	3
1.1.	数据库概述	3
1.2.	数据表清单	3
1.3.	E-R模型图	4
1.4.	数据表定义	4
1.4.1.	用户信息表（whale_user）	4
1.4.2.	企业信息表（whale_company_user）	5
1.4.3.	在线预约信息表（whale_appointments）	5
1.4.4.	捐赠物品信息表（whale_family）	6
1.4.5.	用户公益订单表（whale_order）	6
1.4.6.	鲸鱼币详情表（whale_money）	7
1.4.7.	公益活动信息表（whale_detail）	7
1.4.8.	用户关注公益表（whale_detail_focus）	8
1.4.9.	首页轮播图表 （whale_index_carousel）	8
1.4.10.	鲸鱼导航栏表（whale_nav）	8
1.4.11企业捐赠轮播图表 （whale_index_carousel）	9

 

1.	概述
1.1.	数据库概述
数据库名：whale;
适用数据库环境：MySQL
1.2.	数据表清单
表名	描述	所属模块
whale_user	用户信息表，记录注册后的个人信息	基础信息个人中心
whale_company_user	企业信息表，记录注册后的企业信息	企业中心
whale_appointments	用户在线预约信息表，记载捐赠者的个人信息，地址，日期 	在线预约
whale_family	捐赠物品信息表，记录捐赠的种类，重量	捐赠信息
whale_order	用户公益订单表，记载订单的详细信息，订单状态	公益订单
whale_money	鲸鱼币详情表，记载鲸鱼币额度，及活动事由	鲸鱼额度
whale_detail	公益活动信息表，记载所有活动相关信息	公益活动
whale_detail_focus	用户关注公益表	用户关注
whale_index_carousel	首页轮播图表，商品展示列表，关联到商品表	首页轮播
whale_nav	鲸鱼header导航栏表	鲸鱼导航
whale_company_carousel	企业捐赠轮播图表	企业轮播


1.3.	E-R模型图
 
图表 1
1.4.	数据表定义
1.4.1.	用户信息表（whale_user）
字段名称	类型	备注	字段描述
uid	INT	PRIMARY KEY  
NOT NULL
AUTO_INCREMENT	用户的ID，为用户的唯一标识，由系统自动生成
uname	VARCHAR(16)		#用户名
upwd	VARCHAR(32)		
phone	VARCHAR(11)		#手机号码
email	VARCHAR(32)		
regtime	BIGINT		#注册时间
logintime	BIGINT		#登录的时间/时长
img	VARCHAR(32) 		#性别  0-女  1-男
status	TINYINT		#身份
money_count	INT		#鲸鱼币数量
login_count	INT		#登录次数统计
1.4.2.	企业信息表（whale_company_user）
字段名称	类型	备注	字段描述
cuid	INT 	PRIMARY KEY AUTO_INCREMENT	
cuname	VARCHAR(16)		
company_name	VARCHAR(64) 		#公司名称
upwd	VARCHAR(32) 	长度在6~12之间	#正则验证
regtime	BIGINT        		#注册时间
logintime	BIGINT		#登录的时间/时长
img 	VARCHAR(32)	DEFAULT	#头像
status 	TINYINT		#身份
money_count	CHAR(6)		#鲸鱼币数量
did	VARCHAR(16)		#关注的公益活动信息ID
1.4.3.	在线预约信息表（whale_appointments）
字段名称	类型	备注	字段描述
aid	INT 	PRIMARY KEY AUTO_INCREMENT,	
user_id 	INT 	foreign key (uid) references  whale_user(uid)	#用户编号
关联用户信息表
donator 	VARCHAR(16)		#捐赠人姓名
province	VARCHAR(16)		#省
city	VARCHAR(16)		#市
region	VARCHAR(16)		#区
address	VARCHAR(128)		#详细地址
cellphone	VARCHAR(16)		#手机
kg	TINYINT		#旧衣物的重量
order_time	BIGINT		#预约时间
1.4.4.	捐赠物品信息表（whale_family）
字段名称	类型	备注	字段描述
fid	INT 	PRIMARY KEY AUTO_INCREMENT	
fname 	VARCHAR(32)		#物品名称
kg 	

TINYINT		#旧衣物的重量
1-->5到10kg
2-->10到20kg
3-->21到30kg
4-->30kg以上
user_id 	INT,             	foreign key (user_id) references  whale_user(uid)	#用户id
1.4.5.	用户公益订单表（whale_order）
字段名称	类型	备注	字段描述
oid	INT	PRIMARY KEY AUTO_INCREMENT	
uid	INT	foreign key (uid) references  whale_user(uid),	#用户编号 
关联用户信息表
fid	INT	foreign key (fid) references whale_family(fid)	#捐赠物品 关联捐赠商品信息表
oaddress	
VARCHAR(128)		#捐赠的地区 
青海-西藏-
贵州-甘肃-云南
status	
TINYINT		#订单状态   1-等待发货  2-运输中  3-已签收  4-已取消
deliver_time	BIGINT		#发货时间
received_time	BIGINT		#签收时间
success_time	BIGINT		#成功时间
express	VARCHAR(24)		#物流单号
1.4.6.	鲸鱼币详情表（whale_money）
字段名称	类型	备注	字段描述
mid	INT		
reason	VARCHAR(64)		#获得鲸鱼币事由
money	INT		#每次鲸鱼币数量
uid	INT	foreign key (uid) references  whale_user(uid)	#用户编号 
关联用户信息表
time	BIGINT		#发生时间
1.4.7.	公益活动信息表（whale_detail）
字段名称	类型	备注	字段描述
did	INT 	PRIMARY KEY AUTO_INCREMENT	
title	VARCHAR(32)		#主题
pushlish			#发布时间
author	VARCHAR(32)		#作者
detail	VARCHAR(2056)		#详情
img	VARCHAR(128)		#图片
href	VARCHAR(128)		#链接地址
1.4.8.	用户关注公益表（whale_detail_focus）
字段名称	类型	备注	字段描述
dfid	INT 	PRIMARY KEY AUTO_INCREMENT	
uid	INT	foreign key (uid) references  whale_user(uid)	#用户id
did	INT	foreign key (did) references  whale_detail(did)	#关注id
1.4.9.	首页轮播图表 （whale_index_carousel）
字段名称	类型	备注	字段描述
carousel_id	INT 	PRIMARY KEY AUTO_INCREMENT	
left_img	VARCHAR(128）		#图片路径
right_img	VARCHAR(128）		#轮播图右边图片
title	VARCHAR(64)		#轮播图标题文字
bgcolor	VARCHAR(64)		#轮播图背景颜色
1.4.10.	鲸鱼导航栏表（whale_nav）
字段名称	类型	备注	字段描述
nid	INT 	PRIMARY KEY AUTO_INCREMENT	
article	VARCHAR(64)		#首页,白鲸鱼APP,预约回收,鲸鱼公益,企业捐赠,登录/注册
nhref	VARCHAR(128)		#跳转地址


1.4.11企业捐赠轮播图表 （whale_index_carousel）
字段名称	类型	备注	字段描述
carousel_id	INT 	PRIMARY KEY AUTO_INCREMENT	
left_img	VARCHAR(128）		#图片路径
right_img	VARCHAR(128）		#轮播图右边图片
title	VARCHAR(64)		#轮播图标题文字
bgcolor	VARCHAR(64)		#轮播图背景颜色




捐赠平台文档
项目介绍
捐赠平台-白鲸鱼
项目组成员：曾斌、舒志雄、柯佳雄、廖志玮、王辉

目录
1可行性研究阶段	3
1.1可行性研究分析	3
1.2产品概述	3
1.3团队架构--人员配置	3
1.4开发周期	4
2需求分析阶段	4
2.1功能性需求	4
2.2非功能性需求	4
3概要设计阶段	5
3.1技术选型	5
3.2数据结构设计	5
4详细设计阶段	6
5编码实现阶段	6
5.1部分网页效果图	6
5.2前端代码	8
5.3后端代码	10
6项目部署	10
7项目难点	10
8项目总结	11


 
1可行性研究阶段
1.1可行性研究分析
	虽然国内的生活水平在提高，但是我们内陆还有很多地区很贫穷，在法律允许的情况下分拣一些非皮肤接触类的衣物捐赠给国内的贫困地区,不仅能够帮助贫困地区抵御寒冷的冬天，还能减少资源浪费和环境污染。 
1.2产品概述
	白鲸鱼是一个倡导闲置零抛弃、旧衣循环利用的综合性环保公益平台，平台以旧衣新生活为理念。让大家能够轻松环保，简单公益。白鲸鱼是国内领先的免费上门收衣服务平台，通过建立可循环的旧衣处理渠道，维护生态环境。一键预约，快递免费上门收衣。
	本项目为pc端捐赠平台网站,主要分为首页，白鲸鱼APP，预约回收，鲸鱼公益，企业捐赠，登录/注册和个人中心7个页面。
1.3团队架构--人员配置
 
1.4开发周期
目标	 内容	            时间段 
阶段一	项目规划设计	    前期素材整理,UI设计,功能模块梳理,mysql数据库的构建	2019.8.9-2019.8.12
阶段二	编码实现	       所有静态页面的编写	2019.8.13-2019.8.17
阶段三	完成页面交互	   从用户体验角度完善页面功能	2019.8.18-8.26
阶段四	项目整合及测试	  完善整个项目,查找bug,优化界面	2019.8.26-2019.8.28
阶段无	项目部署及上传	  上传代码,部署到新浪云	2019.8.29-2019.8.30

2需求分析阶段
2.1功能性需求
①用户模块（注册、登录、收藏夹、用户中心）
②预约回收模块（线上预约、线下免费上门回收）
③公益活动模块（查看公益活动详情、公益活动收藏）
2.2非功能性需求
①界面需求: 登录页面和预约回收页面为响应式页面;
②可执行需求：用户能在很快时间内访问到页面不用等待;
③安全性需求：网页能保证用户个人信息不被泄露, 程序上有没有安全的漏洞.

3概要设计阶段
3.1技术选型
3.2数据结构设计
 
4详细设计阶段
 
5编码实现阶段
5.1部分网页效果图
5.2前端代码  
5.3后端代码
 
6项目部署
github代码管理代码的地址：https://github.com/zengbin0913/whale
新浪云地址：http://whale1904.applinzi.com/#/index

7项目难点
难点1：axios的post请求问题
	问题描述：axios发送post请求默认提交的json格式的数据，而node中接收post请求的参数是通过body-parse中间件来转换参数的，导致参数接收不到,即req.body为空或者数据格式不正确。
	解决方案：在前端使用qs模块将对象转为字符串，以字符串方式提交后端，后端依然使用body-parse处理数据。
难点2：记住密码的问题
	问题描述：用户点击记住密码按钮,,就会记录下输入的用户名密码,用户下次浏览是就不用了在重新输入。
	解决方案：每次进入登录页，先去读取cookie，如果浏览器的cookie中有账号信息，就自动填充到登录框中，存cookie是在登录成功之后，判断当前用户是否勾选了记住密码，如果勾选了，则把账号信息存到cookie当中

8项目总结
①	在项目的开发过程中,由于对专业知识技能方面掌握的不够,导致效率比较低。
②	在页面布局和html、css页面实现的时候，总是出现各种分辨率不同,出现效果不同。从前期的html结构混乱到现在的一点点提升，终于领会到了前端开发的细致活。
③	这次团队项目让我们知道沟通技巧在团队协作开发中的重要性
④	自身的不足：过于懒散,在很多时候都无法集中精力做事；
⑤	很容易受周围环境的影响。
