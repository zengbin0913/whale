<template>
  <div id="header">
    <div class="navbar navbar-expand-md  navbar-light pb-sm-0 pb-md-1">
      <button class="navbar-toggler" @click="handle">
        <span class="navbar-toggler-icon"></span>
      </button>
      <span class="navbar-brand logon"></span>
      <div class="collapse navbar-collapse" id="d1">
        <ul class="navbar-nav">
          <li class="nav-item" v-for="(item,i) of list" :key="i">
            <router-link :to="item.nhref" class="nav-link" :class="{active:item.nhref==path}">{{item.article}}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      active:false, /*是否是当前导航*/
      list:[],
      path:""
    }
  },
  methods:{
    handle(){
					if(getComputedStyle(d1).display=="none"){
            d1.style.display="block";
          }
					else d1.style.display="none";
    },
    load(){
      this.axios.get("/index/nav").then(result=>{
        this.list=result.data;
        this.path=this.$route.path; //获得地址栏中的路径
      })
    }
  },
  created(){
    this.load();
  }
};
</script>
<style scoped>
#header {
  width: 100%;
  font-size: 0.875rem;
}
.logon {
  background-image: url("../assets/img/003808831.jpg");
  display: block;
  background-position: center;
  background-repeat: no-repeat;
  width: 10.75rem;
  height: 3rem;
  margin-left: 3rem;
}
.navbar-light .navbar-nav .nav-link {
  color: #fff;
}
.navbar-light .navbar-nav .active{
  border-bottom:2px solid #fff;
}
.navbar-nav,.navbar-collapse {
  justify-content: flex-end;
  padding-right: 1rem;
}
.navbar-light .navbar-nav .nav-link {
    display:inline;
}
@media (min-width: 576px) {
  .navbar-nav li {
    margin-bottom: 0.5rem;
  }
}
@media (min-width: 768px) {
  .navbar-nav li+li {
    padding-left: 1.5rem;
  }
  .navbar-nav li {
    margin-bottom: 0;
  }
}
.navbar-expand-md .navbar-nav .nav-link {
  padding: 0;
}
</style>
