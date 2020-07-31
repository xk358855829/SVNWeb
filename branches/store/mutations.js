import {FANMLI,TOTAL,ONEFANMLI,ONETOTAL,LQOLS,NAME,SAVE_SALEPLANS} from './mutation-types.js'
export default {
    chezhu(state, n) {
        state.recharge=n
        localStorage.setItem('uncharge',JSON.stringify(state.recharge))
    },
    [FANMLI](state,m){
        state.reslist=m
    },
    [TOTAL](state,m){
        state.totalnum=m
    },
    [LQOLS](state,m){
        state.typepayLIST=m
    },
    [ONEFANMLI](state,m){
        state.ONEreslist=m
    },
    [ONETOTAL](state,m){
        state.parkingtitle=m
    },
    [NAME](state,m){
        state.parkingname=m
    },
    [SAVE_SALEPLANS](state,m){
        state.mySalePlans=m
    }
}