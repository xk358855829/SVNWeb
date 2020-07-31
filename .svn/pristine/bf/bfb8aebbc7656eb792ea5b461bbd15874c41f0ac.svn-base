import Vue from 'vue'
import Router from 'vue-router'
import list from '@/components/list'
import deviceList from '@/components/deviceList'
import addDevice from '@/components/addDevice'
Vue.use(Router)

export default new Router({
  routes: [
  		{
	      path: '/',
	      name: 'list',
	      component: list,
      children:[{
      	path: '/',
	      name: 'deviceList',
	      component: deviceList,
      },{
      	path: '/deviceList',
	      name: 'deviceList',
	      component: deviceList,
      },{
      	path: '/addDevice',
	      name: 'addDevice',
	      component: addDevice,
      }]
    }
  ]
})
