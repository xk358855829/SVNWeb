import cloneDeep from "lodash/cloneDeep";
import {
  BINDTOTAL, 
  DEVICELIST,
  DEVICETOTAL
} from "./mutation-type.js";
export default {
  // 重置vuex本地储存状态
  resetStore(state) {
    Object.keys(state).forEach(key => {
      state[key] = cloneDeep(window.SITE_CONFIG["storeState"][key]);
    });
  },
  [BINDTOTAL](state, m) {
    state.bindTotal = m;
  },
  [DEVICELIST](state, m) {
    state.deviceList = m;
  },
  [DEVICETOTAL](state, m) {
    state.deviceTotal = m;
  }
};