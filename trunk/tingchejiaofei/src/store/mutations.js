import * as type from './mutations-type'
export default{
    USER(state,carnumberList){
        if(carnumberList==""){
            carnumberList=[]
        }else{

        }
        state.carnumberList=carnumberList
    },
    QUAN(state,quanlist){
        state.mp=[]
        quanlist.forEach((x,y)=>{
            if(x.use_status==1){
                x.remark=''
                state.mp.push(x)
            }
        })
        console.log(state.mp)
        localStorage.setItem('tabz',JSON.stringify(state.mp))
        state.quanlist=quanlist
    }
}
