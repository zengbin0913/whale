import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
import Waybill from './views/Waybill.vue'
import Login from './views/Login.vue'
import Reg from './views/Reg.vue'
import Company from './views/Company.vue'
import App from './views/MyApp.vue'
import Personal from './views/Personal.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path:"/index", component:Index},
    {path:"/waybill", component:Waybill},
    {path:"/personal", component:Personal},
    {path:"/login", component:Login},
    {path:"/reg", component:Reg},
    {path:"/company", component:Company},
    {path:"/app", component:App},
  ]
})
