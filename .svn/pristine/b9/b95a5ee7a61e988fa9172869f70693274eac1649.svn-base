import axios from 'axios'
import Qs from 'qs'
import {ADD,ticket} from '../components/api/api'
const actions={
    async ADDs({commit},data){
        let res=await ADD(data)
        console.log(res)
        let table=res.data.result.replace(/,/g,' ').replace(/^\s*/g,"").replace(/\s+/g,",")
        var reg=/,$/gi;
        table=table.replace(reg,"");
        commit('USER',table)
    },
    async tickets({commit},data){
        let res=await ticket(data)
        commit('QUAN',res.data.result)
    }
    
}
export default actions