import Vue from 'vue'
import Vuex from 'vuex'
import Qs from 'qs'
import axios from 'axios'
import { shujuliu } from '../components/api/api';
Vue.use(Vuex);
export default new Vuex.Store({
  state: {

    // http: 'http://192.168.2.143:8796',
    http: 'http://39.104.102.213:8796',

    activeName: [],
    conGroupList: [],
    sideList: [],
  },
  actions: {
    // group(state){
    // 	axios({
    // 		method:'post',
    // 		url:state.state.http +'/group/list'
    // 	}).then(function(message){
    // 		console.log(message.data)
    // 		if(message.data.resCode==0){
    // 			console.log(message.data.result)
    // 			state.state.conGroupList = message.data.result;
    // 		}else{
    // 			state.state.conGroupList = [];
    // 		}
    // 	})
    // },
    getMenu (state) {
      axios({
        method: 'post',
        url: state.state.http + '/menu/select',
        data: Qs.stringify({
          userId: sessionStorage.getItem('userId')
        })
      }).then(function (message) {
        console.log(message.data)
        if (message.data.resCode == 0) {
          state.state.sideList = message.data.result;
          state.state.activeName = [];
          let list = message.data.result;
          let len = list.length;
          let arr = [];
          for (let i = 0; i < len; i++) {
            if (list[i].menuLevel == 0) {
              let obj = {
                classA: {},
                classB: []
              }
              obj.classA = list[i];
              state.state.activeName.push(obj)
            } else {
              arr.push(list[i])
            }
          }
          for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < state.state.activeName.length; j++) {
              if (arr[i].menuAssociated == state.state.activeName[j].classA.menuId) {
                state.state.activeName[j].classB.push(arr[i])
              }
            }
          }
        }
      })
    }
  }
})
