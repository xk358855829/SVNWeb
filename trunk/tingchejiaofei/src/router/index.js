import Vue from 'vue'
import Router from 'vue-router'

import card from '@/components/card'


Vue.use(Router)

export default new Router({
	/*mode: 'history',*///由哈希路由换为history路由，此模式下，可去掉地址栏中的#号！但有其他缺陷需后台配置服务器！
  routes: [
    {
      path: '/',
      name: 'login',
      component: ()=>import('@/components/login.vue'),
      meta:{
      	title:'登陆'
      }
    },
    {
      path: '/logins',
      name: 'logins',
      component: ()=>import('@/components/logins.vue'),
      meta:{
      	title:'登录'
      }
    },
    
    {
      path: '/home',
      name: 'home',
      component: ()=>import('@/components/home.vue'),
      meta:{
      	title:'主页'
      },
      // redirect:'list',
      children:[
        {
          path: 'list',
          name: 'list',
          component: ()=>import('@/components/list.vue'),
          meta:{
            title:'车牌列表'
          }
        
        }
      ]
    },
     {
      path: '/card',
      name: 'card',
      component: card,
      meta:{
      	title:'添加车牌'
      }
    },
    {
      path: '/record',
      name: 'record',
      component: ()=>import('@/components/record.vue'),
      meta:{
      	title:'停车记录'
      }
    },
    {
      path: '/kong',
      name: 'kong',
      component: ()=>import('@/components/kong.vue'),
      meta:{
      	title:'卡券列表'
      }
    },
    {
      path: '/pay',
      name: 'pay',
      component: ()=>import('@/components/pay.vue'),
      meta:{
      	title:'停车支付'
      }
    },
    {
      path: '/people',
      name: 'people',
      component: ()=>import('@/components/people.vue'),
      meta:{
      	title:'个人中心'
      }
    },
    {
      path: '/sheng',
      name: 'sheng',
      component: ()=>import('@/components/sheng.vue'),
      meta:{
        title:'积分兑换'
      }
    },
    {
      path: '/shengcheng',
      name: 'shengcheng',
      component: ()=>import('@/components/shengcheng.vue'),
      meta:{
        title:'积分兑换'
      }
    },
    {
      path: '/fuzhi',
      name: 'fuzhi',
      component: ()=>import('@/components/fuzhi.vue'),
      meta:{
        title:'卡券列表'
      }
    },
    {
      path: '/vip',
      name: 'vip',
      component: ()=>import('@/components/vip.vue'),
      meta:{
        title:'开通会员'
      }
    },
    {
      path: '/my',
      name: 'my',
      component: ()=>import('@/page/my.vue'),
      meta:{
        title:'个人资料'
      }
    },
    {
      path: '/return',
      name: 'return',
      component: ()=>import('@/components/return.vue'),
      meta:{
      	title:'支付成功'
      }
    },
    {
      path: '/foot',
      name: 'foot',
      component: ()=>import('@/components/foot.vue'),
      meta:{
      	title:'停车记录'
      }
    },
    
    ]
    
})

