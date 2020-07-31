import { brands } from '../../components/api/api'
export const brandarr = 'brandarr'
const brand = {
  state: {
    brandarrs: []
  },
  mutations: {
    brandarr: (state, res) => {
      state.brandarrs = res
    }
  },
  actions: {
    async gbrands ({ commit }, parm) {
      let res = await brands(parm)
      commit('brandarr', res.data.result)
    }
  }
}
export default brand;