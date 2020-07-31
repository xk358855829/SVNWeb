import Vue from 'vue'
import Router from 'vue-router'
import homePage from '@/components/homePage'
import test from '@/components/test'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'homePage',
      component: homePage,
      meta:{
      	title:'首页'
      }
   	},{
      path: '/test',
      name: 'test',
      component: test,
      meta:{
      	title:'测试'
      }
   	}]
})
