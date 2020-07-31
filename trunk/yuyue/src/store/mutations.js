import * as type from './types'
export default{
    METHODP(state,n){
        state.num=n
    },
    ORDERDETAIL(state,detail){
        state.order=detail
    },
    MARK(state,mark){
        state.mark=mark
    },
    ADDRESS(state,address){
        state.address=address
    },
    USER(state,userInfo){
        console.log(userInfo)
        state.userInfo=userInfo
    },
    USEOBJ(state,peopleuser){
        state.peopleuser=peopleuser
    },
    ORDER(state,orders){
        state.orders=orders
    },
    MEA(state,obk){
        state.obk=obk
    },
    TOTALS(state,total){
        state.total=total
    },
    QUAN(state,quanlist){
        state.mp=[]
        quanlist.forEach((a,b)=>{
            if(a.use_status==1){
                a.remark=''
                state.mp.push(a)
            }
        })
        localStorage.setItem('tab',(JSON.stringify(state.mp)))
        state.quanlist=quanlist
    }
}