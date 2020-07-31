import Vue from 'vue'
Vue.filter('Chose',(val)=>{
    if(val==1){
        val='钥匙未存'
    }else if(val==2){
        val='待洗车'
    }else if(val==3){
        val='洗车中'
    }else if(val==4){
        val='待取件'
    }else if(val==5){
        val='已完成'
    }else if(val==7){
        val='已取消'
    }else{
        val='已完成'
    }
     return val
})
export function isLicensePlate(str) {
    let arr=/^(([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-Z](([0-9]{5}[DF])|([DF]([A-HJ-NP-Z0-9])[0-9]{4})))|([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-Z][A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳使领]))$/
    return arr.test(str);
}
export function regphone(str){
    var regPhone=/^[1][3,4,5,6,7,8,9][0-9]{9}$/;
    return regPhone.test(str)
}
export function countdown(that, isdisabled, sendText) {
    that.isdisabled = true;
    var num = 60;
    var timer = setInterval(() => {
        num--;
        that[sendText] = num + "秒后重新获取";
        if (num <= 0) {
            that.isdisabled = false;
            that[sendText] = "获取验证码";
            clearInterval(timer);
        }
    }, 1000);
}
export function getQueryString(name) {
     	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
     	var r = window.location.search.substr(1).match(reg);
     	if(r != null) return unescape(r[2]);
     	return null;
     }