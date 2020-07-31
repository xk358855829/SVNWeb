import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import setPhone from '@/components/setPhone'
import validate from '@/components/validate'
import homea from '@/components/homea'
import setPhonea from '@/components/setPhonea'
import validatea from '@/components/validatea'
Vue.use(Router)


// import 'element-ui/lib/theme-default/index.css'

export default new Router({
	/*mode: 'history',*///由哈希路由换为history路由，此模式下，可去掉地址栏中的#号！但有其他缺陷需后台配置服务器！
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home,
      meta:{
      	title:'无牌车'
      }
    },{
      path: '/setPhone',
      name: 'setPhone',
      component: setPhone,
      meta:{
      	title:'注册'
      }
    },{
      path: '/validate',
      name:'validate',
      component: validate,
      meta:{
      	title:'验证码'
      }
    },
    {
      path: '/homea',
      name: 'homea',
      component: homea,
      meta:{
      	title:'无牌车'
      }
    },{
      path: '/setPhonea',
      name: 'setPhonea',
      component: setPhonea,
      meta:{
      	title:'绑定手机号码'
      }
    },{
      path: '/validatea',
      name:'validatea',
      component: validatea,
      meta:{
      	title:'验证码'
      }
    },{
      path: '/',
      name:'saoyisao',
      component: ()=>import('@/components/saoyisao.vue'),
      meta:{
      	title:'扫一扫'
      }
    }
  ]
})
