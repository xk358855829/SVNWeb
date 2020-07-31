import { deviceBind,deviceList } from "../api/api";
export default {
  // 设备绑定列表
  async getDeviceBindList({ commit }, params) {
    let msg = await deviceBind(params);
    console.log(msg);
    if (msg.data.code === 200) {
      commit("BINDTOTAL", msg.data.data.total);
    }
  },
  // 设备列表
  async getDeviceList({ commit }, data) {
    let msg = await deviceList(data);
    console.log(msg);
    if (msg.data.code === 200){
      commit("DEVICELIST", msg.data.data.list);
      commit("DEVICETOTAL", msg.data.data.total);
    }
  }
};