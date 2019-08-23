# 客户端连接服务器端使用的编码
SET NAMES UTF8;
#如果存在丢弃数据库whale
DROP DATABASE IF EXISTS whale;
#创建数据库whale
CREATE DATABASE whale CHARSET=UTF8;
#使用进入数据库whale
USE whale;

/*1.1用户信息表(个人)*/
CREATE TABLE whale_user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(16),
  upwd VARCHAR(32),           #6-12位数字大小写字母组合,必须包含一个大写字母和数字
  phone VARCHAR(11),
  email VARCHAR(32),
	regtime BIGINT,            #注册时间
	logintime BIGINT,          #登录的时间
	img VARCHAR(32) DEFAULT "default.jpg",        #头像
	status TINYINT DEFAULT 1,      #身份
	money_count INT DEFAULT 20,      #鲸鱼币数量
	login_count INT DEFAULT 0      #登录次数统计
);

INSERT INTO whale_user VALUES(NULL,"tom","1B3456","13135362978","tom@126.com",1566296635529,1566296636529,DEFAULT,DEFAULT,40,2); 
INSERT INTO whale_user VALUES(NULL,"jerry","1B3456","15115756664","jerry@qq.com",1566296635529,1566296635529,DEFAULT,DEFAULT,DEFAULT,1);
INSERT INTO whale_user VALUES(NULL,"lily","1B3456","15886626453","lily@sohu.com",1566296635529,1566296635529,DEFAULT,DEFAULT,DEFAULT,1);
INSERT INTO whale_user VALUES(NULL,"Bob","1B3456","15815533564","Bob@126.com",1566296635529,1566296635529,DEFAULT,DEFAULT,DEFAULT,1); 

/*1.2用户信息表(企业)*/
  CREATE TABLE whale_company_user(
  cuid INT PRIMARY KEY AUTO_INCREMENT,
  cuname VARCHAR(16),  
  company_name VARCHAR(64),   #公司名称
  upwd VARCHAR(32),            #6-12位数字大小写字母组合,必须包含一个大写字母和数字
	regtime BIGINT,            #注册时间
	logintime BIGINT,          #登录的时间
	img VARCHAR(32) DEFAULT "default.jpg",       #头像
	status TINYINT DEFAULT 0,      #身份
	money_count INT DEFAULT 20,      #鲸鱼币数量
	did INT DEFAULT NULL       #关注的公益活动信息ID
);
INSERT INTO whale_company_user VALUES(NULL,"Laird","莱尔德(深圳)电子材料有限公司","2C3456",1566296635529,1566296635529,DEFAULT,DEFAULT,DEFAULT,DEFAULT);
INSERT INTO whale_company_user VALUES(NULL,"Amphone","安费诺科技深圳有限公司","2C3456",1566296635529,1566296635529,DEFAULT,DEFAULT,DEFAULT,DEFAULT);


/*1.3捐赠在线预约信息*/  
CREATE TABLE whale_appointments(
  aid INT PRIMARY KEY AUTO_INCREMENT,
  uid INT,                    #用户编号  关联用户信息表 
  donator  VARCHAR(16),       #捐赠人姓名
  province VARCHAR(16),	      #省
  city VARCHAR(16),           #市
  region VARCHAR(16),         #区
  address VARCHAR(128),       #详细地址
  cellphone VARCHAR(16),      #手机
  kg TINYINT,                 #旧衣物的重量  1-->5到10kg  2-->10到20kg   3-->21到30kg   4-->30kg以上
  order_time BIGINT           #预约时间
);
INSERT INTO whale_appointments VALUES(NULL,1,"张三","广东省","深圳市","龙华区","明治街道嘉熙业广场11楼","13135362978",1,1565350839801);

/*1.4捐赠商品信息表*/
CREATE TABLE whale_family(  
  fid INT PRIMARY KEY AUTO_INCREMENT,
  fname VARCHAR(32),          #商品名称
  kg TINYINT	              #旧衣物的重量 1-->5到10kg  2-->10到20kg   3-->21到30kg   4-->30kg以上
);
INSERT INTO whale_family VALUES(NULL,"冬衣棉袄",1);

/*1.5用户公益订单表*/
CREATE TABLE whale_order(
  oid INT PRIMARY KEY AUTO_INCREMENT,
  uid INT,		      #用户编号 关联用户信息表 
  fid INT,		      #捐赠物品 关联捐赠商品信息表
  oaddress  VARCHAR(128),     #捐赠的地区 青海-西藏-贵州-甘肃-云南
  status TINYINT,             #订单状态   1-等待发货  2-运输中  3-已签收  4-已取消
  deliver_time BIGINT,        #发货时间
  received_time BIGINT,       #签收时间
  success_time BIGINT,       #成功时间
	express VARCHAR(24)        #物流单号
);
INSERT INTO whale_order VALUES(NULL,1,1,"西藏",3,1565354439801,1570354439801,1570354639801,"123456789");

/*鲸鱼币变化详情*/
CREATE TABLE whale_money(
	mid INT PRIMARY KEY AUTO_INCREMENT,
	reason VARCHAR(64),  #获得事由
	money INT,        #每次鲸鱼币数量
	uid INT,		      #用户编号 关联用户信息表 
	time BIGINT       #发生时间
);
INSERT INTO whale_money VALUES(NULL,"注册账号获得",20,1,1566296635529);
INSERT INTO whale_money VALUES(NULL,"公益捐赠获得",20,1,1570354639801);
INSERT INTO whale_money VALUES(NULL,"注册账号获得",20,2,1566296635529);
INSERT INTO whale_money VALUES(NULL,"注册账号获得",20,3,1566296635529);
INSERT INTO whale_money VALUES(NULL,"注册账号获得",20,4,1566296635529);

/*1.6公益活动信息表*/
CREATE TABLE whale_detail(
	did INT PRIMARY KEY AUTO_INCREMENT,
	title VARCHAR(32),   #主题
	pushlish BIGINT,     #发布时间
	author VARCHAR(32),  #作者
	detail VARCHAR(2056), #详情
	img    VARCHAR(128) #图片
);
INSERT INTO whale_detail VALUES(NULL,"四川苟哇村一松寨当地小学活动",1566347870103,"admin","有一小段时间没有给大家更新活动信息了。今天小编给带来四川苟哇村一松寨的一个小心的捐赠反馈。这个小学只有几十个学生，大都是附近村里面的孩子，村上比较贫困，大部分的家庭都还是住在黄泥房子。本次的书包是白鲸鱼通过回收衣物所得款项购买，希望这份小小的心意能够给这些小孩子们带上一些温暖。因为一些原因，我们这次在这个小学的时间非常的有限，因为次日需要去这些孩子们的家庭中继续活动，届时可以看到这些孩子背后更多的情况。","030055851.jpg");
INSERT INTO whale_detail VALUES(NULL,"白鲸鱼重聚青海玉树藏族自治州捐赠旧衣服",1566347870103,"admin","这次是我们第二次捐赠衣物给青海玉树藏族自治州了。感谢长沙一百穗对活动的支持。白鲸鱼自成立以来，一直秉承这环保和公益的理念，我们从未停止过对西部地区的关心和支持。孩子们开心的领取衣物，虽然是在一个没有房子的大草坪，而且当地气温还比较低，但是孩子们依然高兴。大家围城一个圈，席地而坐，均匀分发白鲸鱼旧衣服物资，感受来自五湖四海的满满的爱心。虽然反馈的照片不多，但是还是非常的感谢当地的志愿者帮助白鲸鱼分发衣物并且拍摄反馈。","01554215226381.jpg");
INSERT INTO whale_detail VALUES(NULL,"旧衣公益新疆阿克苏白鲸鱼留下爱的足迹",1566347870103,"admin","白鲸鱼自上线以来，一直得到用户的青睐和支持，目前捐赠地区已经遍布了大部分西部地区，我们还在不断的开疆扩土，希望能够给更多的人带来温暖。虽然现在已经临近年底，但是对于白鲸鱼来说，还在忙碌者发挥自己的光和热，不停的捐赠更多衣物给有需要的地区。本次给您带来新疆阿克苏反馈。","014425411.jpg");
INSERT INTO whale_detail VALUES(NULL,"白鲸鱼重聚青海玉树藏族自治州捐赠旧衣服",1566347870103,"admin","这次是我们第二次捐赠衣物给青海玉树藏族自治州了。感谢长沙一百穗对活动的支持。白鲸鱼自成立以来，一直秉承这环保和公益的理念，我们从未停止过对西部地区的关心和支持。孩子们开心的领取衣物，虽然是在一个没有房子的大草坪，而且当地气温还比较低，但是孩子们依然高兴。大家围城一个圈，席地而坐，均匀分发白鲸鱼旧衣服物资，感受来自五湖四海的满满的爱心。虽然反馈的照片不多，但是还是非常的感谢当地的志愿者帮助白鲸鱼分发衣物并且拍摄反馈。","01554215226381.jpg");
INSERT INTO whale_detail VALUES(NULL,"旧衣公益新疆阿克苏白鲸鱼留下爱的足迹",1566347870103,"admin","白鲸鱼自上线以来，一直得到用户的青睐和支持，目前捐赠地区已经遍布了大部分西部地区，我们还在不断的开疆扩土，希望能够给更多的人带来温暖。虽然现在已经临近年底，但是对于白鲸鱼来说，还在忙碌者发挥自己的光和热，不停的捐赠更多衣物给有需要的地区。本次给您带来新疆阿克苏反馈。","014425411.jpg");

/*1.7用户关注公益表*/
CREATE TABLE whale_detail_focus(
	dfid INT PRIMARY KEY AUTO_INCREMENT,
	uid INT, #用户id
	did INT DEFAULT NULL  #关注id
);
INSERT INTO  whale_detail_focus VALUES(NULL,1,1);
INSERT INTO  whale_detail_focus VALUES(NULL,1,2);

/*1.8首页轮播广告商品*/
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

/*1.9导航条*/
CREATE TABLE whale_nav(
  nid INT PRIMARY KEY AUTO_INCREMENT,
  article VARCHAR(64),     #首页,白鲸鱼APP,预约回收,鲸鱼公益,企业捐赠,登录/注册
  nhref VARCHAR(128)       #跳转地址
);
INSERT INTO  whale_nav VALUES(NULL,"首页","/index");
INSERT INTO  whale_nav VALUES(NULL,"白鲸鱼APP","/app");
INSERT INTO  whale_nav VALUES(NULL,"预约回收","/waybill");
INSERT INTO  whale_nav VALUES(NULL,"鲸鱼公益","/donate");
INSERT INTO  whale_nav VALUES(NULL,"企业捐赠","/company");
INSERT INTO  whale_nav VALUES(NULL,"登录/注册","/login");
INSERT INTO  whale_nav VALUES(NULL,"",""); #退出,默认为空

/*1.10企业捐赠轮播广告商品*/
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
