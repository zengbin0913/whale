import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index'
import Family from './views/Family'
import Other from './views/Other'
import Product from './views/Product.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path:"/index", component:Index},
    {path:"/family", component:Family},
    {path:"/other", component:Other},
    {path:"/product", component:Product},
  ]
})
