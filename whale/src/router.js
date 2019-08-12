import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
import Waybill from './views/Waybill.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {path:"/index", component:Index},
    {path:"/waybill", component:Waybill},
  ]
})
