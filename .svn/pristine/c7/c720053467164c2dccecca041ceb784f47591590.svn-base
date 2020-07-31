import Vue from 'vue'
import Vuex from 'vuex'
import Qs from 'qs'
import axios from 'axios'
// import carLock from './carLock'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import brand from './module/brand'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
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
})


