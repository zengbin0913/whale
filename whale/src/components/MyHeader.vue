<template>
  <div class="container">
    <div class="navbar navbar-expand-md bg-white navbar-light">
      <button class="navbar-toggler" data-toggle="collapse" data-target="#d1">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="pb-md-3 pr-sm-5">
        <a href="#" class="navbar-brand logon"></a>
      </div>
      <div class="collapse navbar-collapse" id="d1">
        <ul class="navbar-nav">
          <li class="nav-item" v-for="(item,i) of list" :key="i">
         		<router-link :to="item.fhref" class="nav-link">{{item.fname}}</router-link>
            <div class="my-nav">
              <div>
                <img :src="'http://127.0.0.1:3000/'+item.fimg" class="py-2" />
              </div>
              <ul>
                <li v-for="(p,j) of item.cname" :key="j">
                  <span v-text="p" class="text-white"></span>
                </li>
              </ul>
            </div>
          </li>
          <li class="nav-item">
            <router-link to="/other" class="nav-link">精彩荟</router-link>
            <div class="my-nav">
              <div>
                <img src="../assets/img/jingcaihui.jpg" class="py-2" />
              </div>
              <ul class="other">
                <li>售后服务</li>
                <li>会员服务</li>
                <li>积分计划</li>
                <li>常见问题</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
			list:[],
		};
  },
  methods: {
    load() {
			this.axios.get("/index/nav").then(result=>{
				this.list=result.data;
			})
		}
  },
  created() {
    this.load();
  }
};
</script>
<style scoped>
.logon {
  background-image: url("../assets/img/logo.png");
  display: block;
  margin: 0 auto;
  background-position: center;
  background-repeat: no-repeat;
  height: 60px;
  width: 214px;
}
@media (min-width: 768px) {
  /*中屏时导航栏*/
  .navbar-expand-md {
    flex-direction: column;
  }
  .collapse {
    width: 100%;
  }
  .navbar-nav {
    width: 100%;
    justify-content: space-around;
  }
  .nav-item {
    width: 25%;
    height: 40px;
    text-align: center;
  }
  .navbar-nav .nav-item .nav-link{
    font-weight: bold;
    font-size:1rem;
  }
  .nav-item ul li {
    text-align: left;
  }
  .my-nav {
    display: flex;
    position: absolute;
    left: 0;
    z-index: 999;
    padding-left: 20px;
    background-color: #929292;
    opacity: 0;
    width: 100%;
    height: 0px;
    overflow: hidden;
    transition: all 0.5s linear;
  }
  .navbar-nav .nav-item:hover .my-nav {
    height: 220px;
    opacity: 1;
  }
}
@media (max-width: 768px) {
  /*小屏时导航栏的二层导航不显示*/
  .my-nav {
    display: none;
  }
  .nav-item {
    text-align: left;
  }
}
.navbar-nav .nav-item:hover .nav-link {
  color: #fcc9de;
}
.my-nav ul li a {
  color: #fff;
  font-size: 1.25rem;
}
.my-nav ul {
  margin-left: 60px;
  margin-top: 32px;
}
.other{
  color:#fff;
}
</style>
