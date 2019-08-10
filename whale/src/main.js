import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
//1引入全局组件MyHeader
import MyHeader from './components/MyHeader.vue'
//2定义全局组件
Vue.component("my-header",MyHeader);
//3引入全局组件MyFooter
import MyFooter from './components/MyFooter.vue'
//4定义全局组件
Vue.component("my-footer",MyFooter);

//3:发送请求时保存session信息
axios.defaults.withCredentials=true
//4:设置请求基础路径
axios.defaults.baseURL="http://127.0.0.1:3000/"
//5:将axios注册vue实例
Vue.prototype.axios=axios;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
