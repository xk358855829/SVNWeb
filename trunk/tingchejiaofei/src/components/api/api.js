
import service from './base'
export const ADD=data=>{
    return service({
        method:'post',
        url:'/User/add',
        data
    })
}
export const lesscode = data =>{
    return service({
        url: '/person_pay/getpersoninfo',
        method: 'post',
        data
    })
}
// 刷新失效券
export const shuaxin  = data =>{
    return service({
        url: '/TicketInfo/flushOverDue',
        method: 'post',
        data
    })
}
export const ticket=data=>{
    console.log(data)
    return service({
        method:'post',
        url:'/TicketInfo/selectPackageByTel',
        data
    })
}
export const cseshi=data=>{
    console.log(data)
    return service({
        method:'post',
        url:'/Parking/selectLotInfo',
        data
    })
}
export const kaitong= data=>{
    return service({
        method:'post',
        url:'/carInfo/openVIPforAPP1',
        data
    })
}
export const kaitongtwo= data=>{
    return service({
        method:'post',
        url:'/carInfo/openVIPforAPP2',
        data
    })
}
export const shaixuan= data=>{
    return service({
        method:'post',
        url:'/carNumberType/findInfo',
        data
    })
}
export const addtian= data=>{
    return service({
        method:'post',
        url:'/User/bindCarNumberForWX',
        data
    })
}
export const shanchu = (data)=>{
    return service({
        method:'post',
        url:'/User/unBondCarNumberForWX',
        data
    })
}
export const chazli= data=>{
    return service({
        method:'post',
        url:'/Park/queryInfo',
        data
    })
}
export const lingquz= data=>{
    return service({
        method:'post',
        url:'/TicketInfo/bornTicket',
        data
    })
}
// 短信状态
export const stateus=data=>{
    return service({
        method:'post',
        url:'/SMS/checkTelStatus',
        data
    })
}
export const fasong =data=>{
    return service({
        method:'post',
        url:'/SMS/checkTel',
        data
    })
}
export const chaxunjiao =data=>{
    return service({
        method:'post',
        url:'/Park/queryInfo',
        data
    })
}
export function valueop(val){
    let regPhone=/^[1][3,4,5,6,7,8,9][0-9]{9}$/;
    return regPhone.test(val)
}
export const searchpark =(data)=>{
    return service({
        method:'post',
        url:'/Parking/selectLotInfo',
        data
    })
}
export function isLicensePlate(str) {
    return /^(([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-Z](([0-9]{5}[DF])|([DF]([A-HJ-NP-Z0-9])[0-9]{4})))|([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-Z][A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳使领]))$/.test(str);
}
export function start() {

        var date = new Date();
        var seperator1 = "-";
        var seperator2 = ":";
        var month = date.getMonth()+1;
        var strDate = date.getDate();
        var strHours = date.getHours();
        var strMinutes = date.getMinutes();
        var strSeconds = date.getSeconds();
        
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
        if (strHours >= 0 && strHours <= 9) {
            strHours = "0" + strHours;
        }
        if (strMinutes >= 0 && strMinutes <= 9) {
            strMinutes = "0" + strMinutes;
        }
        if (strSeconds >= 0 && strSeconds <= 9) {
            strSeconds = "0" + strSeconds;
        }
        
        var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
                + " " + strHours + seperator2 + strMinutes
                + seperator2 + strSeconds;
        return currentdate;
                
    }
    export function end() {
    
        var date = new Date();
        var seperator1 = "-";
        var seperator2 = ":";
        var month = date.getMonth()+1;
        var strDate = date.getDate();
        var strHours = date.getHours();
        var strMinutes = date.getMinutes();
        var strSeconds = date.getSeconds();
        
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
        if (strHours >= 0 && strHours <= 9) {
            strHours = "0" + strHours;
        }
        if (strMinutes >= 0 && strMinutes <= 9) {
            strMinutes = "0" + strMinutes;
        }
        if (strSeconds >= 0 && strSeconds <= 9) {
            strSeconds = "0" + strSeconds;
        }
        
        var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
                + " " + '00' + seperator2 + '00'
                + seperator2 + '00';
        return currentdate;
                
    }


// tica(){
//     let that=this;
//     that.$http({
//         method:'post',
//         url:'http://39.104.113.112:2088/TicketInfo/selectPackageByTel',
//         data:Qs.stringify({
//             // car_number:localStorage.getItem("carnumber")
//             // car_number:localStorage.getItem("carnumber")
//             tel:localStorage.getItem('tel')
//             // tel:17549206920,
//         })
//     }).then(message=>{
//         console.log(message)
//         if(message.data.resCode==0){
//             if(message.data.result.length==0){
//                 that.$router.push('/kong')
//             }else{
//                 that.$router.push({path:'/kabao',query:{vac:message.data.result}})
//             }
            
//         }else{
//             MessageBox.confirm('暂无优惠券', '提示');
//             that.loack=1
//         }
//     })
// },