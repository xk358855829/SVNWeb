import Vue from 'vue'
import Vuex from 'vuex'
import Qs from 'qs'
import axios from 'axios'
import carLock from './carLock'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import brand from './module/brand'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    /*http:'http://192.168.2.129:8080/suriot-Sluice',*/
    // http:'http://39.104.113.112:8090',
    activeName: [],
    isnum: '1',
    order: {},
    mark: '',  //备注
    address: '',//地址
    userInfo: {},
    peopleuser: {},//个人
    orders: Object,
    obk: '',
    total: Object,
    num: '1',
    carnumberList: [],
    quanlist: [],
    mp: [],
    parkmessage: {},//停车场信息
  },
  actions,
  getters,
  mutations,
  modules: {
    brand
  }
  // actions:{
  // 	getMenu(state){
  // 		let that = this;
  // 		axios({
  // 			method:'post',
  // 			url:state.state.http+'/menu/select',
  // 			data:Qs.stringify({
  // 				userId:sessionStorage.getItem('userId')
  // 			})
  // 		}).then(function(message){
  // 			console.log(message.data)
  // 			if(message.data.resCode==0){
  // 				state.state.activeName=[];
  // 				let list = message.data.result;
  // 				let len = list.length;
  // 				let arr = [];
  // 				for(let i=0;i<len;i++){
  // 					if(list[i].menuLevel==0){
  // 						let obj = {
  // 							classA:{},
  // 							classB:[]
  // 						}
  // 						obj.classA = list[i];
  // 						state.state.activeName.push(obj)
  // 					}else{
  // 						arr.push(list[i])
  // 					}
  // 				}
  // 				for(let i=0;i<arr.length;i++){
  // 					for(let j=0;j<state.state.activeName.length;j++){
  // 						if(arr[i].menuAssociated==state.state.activeName[j].classA.menuId){
  // 							state.state.activeName[j].classB.push(arr[i])
  // 						}
  // 					}
  // 				}
  // 				console.log(state.state.activeName)
  // 			}
  // 		})
  // 	},
  // 	Verification(state,data){
  // 		console.log(data)
  // 		let result;
  // 		switch(data.p){
  // 			case '经纬度': result = /^[0-9]+([.]{1}[0-9]+){0,1}$/.test(data.val);
  // 			break;
  // 		}
  // 		return result;
  // 	}
  // 	},
  // 	modules:{
  // 		carLock:carLock
  // 	}
})


