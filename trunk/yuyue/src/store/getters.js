const getters={
    saleProducts:(state)=>{
        var arr1=[]
        var arr2=[]
        var arr3=[]
        state.quanlist.forEach((a,b)=>{
            if(a.use_status==-1){
                arr1.push(a)
            }else if(a.use_status==0){
                arr2.push(a)
            }else{
                arr3.push(a)
            }
        })
        return {
            a:arr1,
            b:arr2,
            c:arr3
        }
    }
}   
export default getters;