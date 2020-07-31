export default {
  state: {
    devid:''
  },
  mutations: {

  },
  actions: {
    initDevId({ commit },payload){
      commit(INIT_DEVID,payload.devid)
    }
  }
}