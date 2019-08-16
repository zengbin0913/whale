SET NAMES UTF8;
DROP DATABASE IF EXISTS whale;
CREATE DATABASE whale CHARSET=UTF8;
USE whale;

/*1.4.1用户信息表(个人)*/
CREATE TABLE whale_user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(16),
  upwd VARCHAR(32),           #6-12位数字大小写字母组合,必须包含一个大写字母和数字
  phone VARCHAR(11),
  email VARCHAR(32)
);

INSERT INTO whale_user VALUES(NULL,"tom","1B3456","13135362978","tom@126.com"); 
INSERT INTO whale_user VALUES(NULL,"jerry","1B3456","15115756664","jerry@qq.com");
INSERT INTO whale_user VALUES(NULL,"lily","1B3456","15886626453","lily@sohu.com");
INSERT INTO whale_user VALUES(NULL,"Bob","1B3456","15815533564","Bob@126.com"); 

/*1.4.2用户信息表(企业)*/
  CREATE TABLE whale_company_user(
  cuid INT PRIMARY KEY AUTO_INCREMENT,
  cuname VARCHAR(16),  
  company_name VARCHAR(64),   #公司名称
  upwd VARCHAR(32)            #6-12位数字大小写字母组合,必须包含一个大写字母和数字
);
INSERT INTO whale_company_user VALUES(NULL,"Laird","莱尔德(深圳)电子材料有限公司","2C3456");
INSERT INTO whale_company_user VALUES(NULL,"Amphone","安费诺科技深圳有限公司","2C3456");


/*1.4.3捐赠在线预约信息*/  
CREATE TABLE whale_appointments(
  aid INT PRIMARY KEY AUTO_INCREMENT,
  uid INT,                    #用户编号  关联用户信息表 
  donator  VARCHAR(16),       #捐赠人姓名
  province VARCHAR(16),	      #省
  city VARCHAR(16),           #市
  region VARCHAR(16),         #区
  address VARCHAR(128),       #详细地址
  cellphone VARCHAR(16),      #手机
  kg TINYINT,                 #旧衣物的重量 0-->请选择 1-->5到10kg  2-->10到20kg   3-->21到30kg   4-->30kg以上
  status TINYINT,             #预约状态 1-预约成功 0-预约失败
  order_time BIGINT           #预约时间时间
);
INSERT INTO whale_appointments VALUES(NULL,1,"张三","广东省","深圳市","龙华区","明治街道嘉熙业广场11楼","13135362978",1,1,1565350839801);

/*1.4.4捐赠商品信息表*/
CREATE TABLE whale_family(  
  fid INT PRIMARY KEY AUTO_INCREMENT,
  fname VARCHAR(32),          #商品名称
  kg TINYINT	              #旧衣物的重量
);
INSERT INTO whale_family VALUES(NULL,"冬衣棉袄",1);

/*1.4.5用户公益订单表*/
CREATE TABLE whale_order(
  oid INT PRIMARY KEY AUTO_INCREMENT,
  uid INT,		      #用户编号 关联用户信息表 
  fid INT,		      #捐赠物品 关联捐赠商品信息表
  oaddress  VARCHAR(128),     #捐赠的地区 青海-西藏-贵州-甘肃-云南
  status TINYINT,             #订单状态   1-等待发货  2-运输中  3-已签收  4-已取消
  deliver_time BIGINT,        #发货时间
  received_time BIGINT,       #签收时间
  success_time BIGINT         #成功时间
);
INSERT INTO whale_order VALUES(NULL,1,1,"西藏",3,1565354439801,1570354439801,1570354639801);


/*1.4.6首页轮播广告商品*/
CREATE TABLE whale_index_carousel(
  carousel_id INT PRIMARY KEY AUTO_INCREMENT,
  left_img VARCHAR(128),
  right_img VARCHAR(128),
  title VARCHAR(64),
  bgcolor VARCHAR(64)
);
INSERT INTO  whale_index_carousel VALUES(NULL, "banner_1_l.png", "banner_1_r.png", "首页轮播图1","#ff7f8b");
INSERT INTO  whale_index_carousel VALUES(NULL, "banner_2_l.png", "banner_2_r.png", "首页轮播图2","#61c597");
INSERT INTO  whale_index_carousel VALUES(NULL, "banner_3_l.png", "banner_3_r.png", "首页轮播图3","#727272");

/*1.4.7导航条*/
CREATE TABLE whale_nav(
  nid INT PRIMARY KEY AUTO_INCREMENT,
  article VARCHAR(64),     #首页,白鲸鱼APP,预约回收,鲸鱼公益,企业捐赠,登录/注册
  nhref VARCHAR(128)       #跳转地址
);
INSERT INTO  whale_nav VALUES(NULL,"首页","/index");
INSERT INTO  whale_nav VALUES(NULL,"白鲸鱼APP","/App");
INSERT INTO  whale_nav VALUES(NULL,"预约回收","/waybill");
INSERT INTO  whale_nav VALUES(NULL,"鲸鱼公益","/donate");
INSERT INTO  whale_nav VALUES(NULL,"企业捐赠","/corporation");
INSERT INTO  whale_nav VALUES(NULL,"登录/注册","/login");

/*1.4.11企业捐赠轮播广告商品*/
CREATE TABLE whale_company_carousel(
  carousel_id INT PRIMARY KEY AUTO_INCREMENT,
  left_img VARCHAR(128),
  right_img VARCHAR(128),
  title VARCHAR(64),
  bgcolor VARCHAR(64)
);
INSERT INTO  whale_company_carousel VALUES(NULL, "combanner_1_l.png", "combanner_1_r.png", "企业捐赠轮播图1","#424242");
INSERT INTO  whale_company_carousel VALUES(NULL, "combanner_2_l.png", "combanner_2_r.png", "企业捐赠轮播图2","#424242");
INSERT INTO  whale_company_carousel VALUES(NULL, "combanner_3_l.png", "combanner_3_r.png", "企业捐赠轮播图3","#424242");
