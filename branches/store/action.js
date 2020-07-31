

import Qs from 'qs'
import axios from 'axios'
import {
	SAVE_ADDRESS
} from './mutation-types.js'
import { searchClicks ,salePlans} from '../../src/components/api/api'
import {FANMLI,TOTAL,ONEFANMLI,ONETOTAL,LQOLS,NAME,SAVE_SALEPLANS} from './mutation-types.js'

export default {
    // parktitle(state){
    //     searchClicks('/Parking/selectLotInfo',{page:1,
    //         pageSize:10000000,userId:localStorage.getItem('userId'),
	// 		dealer:localStorage.getItem('dealer')}).then(message=>{
    //             localStorage.setItem('licks',JSON.stringify(message.data.result))
    //             state.state.parkingtitle=message.data.count
    //     })
    // },
    typepays({commit,state},data){
        let res=searchClicks('/Order/orders',{page:1,
            pageSize:10000000,is_del: 0,userId:localStorage.getItem('userId'),
			dealer:localStorage.getItem('dealer')}).then(message=>{
            if(message.data.resCode==0){
                // state.state.typepay=message
                // state.state.typepayLIST=message.data.result
                // localStorage.setItem('usein',JSON.stringify(message.data.result))
                commit('LQOLS', message.data.result);	
            }
        })
    },
    facility(state){
        axios({
            method:'post',
            url:state.state.http+'/deviceCode/list',
            data:Qs.stringify({
                page: 1,
                pageSize: 10000,
                userId:localStorage.getItem('userId'),
				dealer:localStorage.getItem('dealer')
            })
        }).then(function(message){
            if(message.data.resCode==0){
                state.state.facilitys = message.data.count;
                state.state.numtitle=state.state.facilitys+state.state.unblues
            }
        })
    },
    parktitle({commit,state},data){
        let res=searchClicks('/Parking/selectLotInfo',{page:1,
            pageSize:10000000,userId:localStorage.getItem('userId'),
			dealer:localStorage.getItem('dealer')}).then(message=>{
                commit('ONEFANMLI',message.data.result)
                commit('ONETOTAL',message.data.count)
                // localStorage.setItem('licks',JSON.stringify(message.data.result))
                // state.state.parkingtitle=message.data.count
        })
    },
    whitedan({commit,state},data){
        let res=searchClicks('/carInfo/findAll',data).then(res=>{
            commit('FANMLI',res.data.result)
            commit('TOTAL',res.data.count)
        })
    },
    parkname({commit,state},data){
        let res=searchClicks('/Parking/selectLotInfo',data).then(res=>{
            commit('NAME',res.data.result)
        })
    },
    unblue(state){
        axios({
            method:'post',
            url:state.state.url+'/Device/brakeList',
            data:Qs.stringify({
                page: 1,
                pageSize: 10000,
                userId:localStorage.getItem('userId'),
				dealer:localStorage.getItem('dealer')
            })
        }).then(function(message){
            if(message.data.resCode==0){
                state.state.unblues=message.data.count
            }
        })
    },
    // 获取车主信息
    getMenu(state){
        axios({
          method:'post',
          url:state.state.url+'/menu/select/'+localStorage.getItem('userId')
      }).then(function(message){
          if(message.data.resCode==0){
            state.state.sideList = message.data.result;
            state.state.activeName=[];
            let list = message.data.result;
            let len = list.length;
            let arr = [];
            for(let i=0;i<len;i++){
                if(list[i].menuLevel==0){
                    let obj = {
                        classA:{},
                        classB:[]
                    }
                    obj.classA = list[i];
                    state.state.activeName.push(obj)
                }else{
                    arr.push(list[i])
                }
            }
            for(let i=0;i<arr.length;i++){
                for(let j=0;j<state.state.activeName.length;j++){
                    if(arr[i].menuAssociated==state.state.activeName[j].classA.menuId){
                        state.state.activeName[j].classB.push(arr[i])
                    }
                }
            }
        }
        //   if(message.data.resCode==0){
        //       state.state.sideList = message.data.leftLists;
        //       state.state.activeName=[];
        //       let list = message.data.leftLists;
        //       state.state.firstarr=message.data.leftLists
        //       let len = list.length;
        //       let arr = [];
        //       for(let i=0;i<len;i++){
        //           if(list[i].listLevel==1){
        //               let obj = {
        //                   classA:{},
        //                   classB:[]
        //               }
        //               obj.classA = list[i];
        //               state.state.activeName.push(obj)
        //           }else{
        //               arr.push(list[i])
        //           }
        //       }
        //       for(let i=0;i<arr.length;i++){
        //           for(let j=0;j<state.state.activeName.length;j++){
        //               if(arr[i].preListId==state.state.activeName[j].classA.listId){
        //                   state.state.activeName[j].classB.push(arr[i])
        //               }
        //           }
        //       }
        //       console.log(state.state.activeName)
        //   }
      })
    },
    getSalePlans({ commit }){
        let param = {
            page:1,
            pageSize:10,
            userId:localStorage.getItem('userId'),
			dealer:localStorage.getItem('dealer')
        }
        salePlans('/salePlans/selectAll',param).then(message => {
            if(message.status === 200){
                commit(SAVE_SALEPLANS,message.data.result)
            }
        })
    }
}