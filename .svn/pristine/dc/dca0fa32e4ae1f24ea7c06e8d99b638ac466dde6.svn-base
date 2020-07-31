import axios from 'axios'
import Qs from 'qs'
import * as type from './types'
import { Wxin, ticket } from '../components/api/api'
const actions = {
  defalt (context, a) {
    console.log(91)
    context.commit('METHODP', a)
  },
  async lista ({ commit }, data) {
    let res = await Wxin(data)
    console.log(res.data.result)
    localStorage.setItem('nickname', res.data.result.nickname)
    commit('MEA', res.data.result.headimgurl)
    commit('TOTALS', res.data.result)
  },
  async tickets ({ commit }, data) {
    let res = await ticket(data)
    commit('QUAN', res.data.result)
  }
}
export default actions;