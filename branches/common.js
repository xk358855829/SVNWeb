
export default{
    login:function(){
          console.log("13569284332");
    },
    fouc:function(mes,message){
        if(!(/[\u4e00-\u9fa5]+/).test(mes)&&mes!=''){ 
            var mes=mes+message
        }
        var mess=mes
        console.log(mess)
        return mess
    },
    add:function(m){return m<10?'0'+m:m },
	timeToDate:function(data) {
        var d = new Date(data*1000);//时间戳记得乘以1000再进行处理
        var year = d.getFullYear();
        var month = d.getMonth()+1;
        var date = d.getDate();
        var hour = d.getHours();
        var minute = d.getMinutes();
        var second = d.getSeconds();
        // return year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;
        return year + "-" + this.add(month) + "-" + this.add(date) + " " + this.add(hour) + ":" + this.add(minute) + ":" + this.add(second);
    },
    getNowFormatDatenew:function() {

            var date = new Date();
            var seperator1 = "-";
            var seperator2 = ":";
            var month = date.getMonth();
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
                    + "T" + strHours + seperator2 + strMinutes
                    + seperator2 + strSeconds;
            return currentdate;
                    
    },
    getNowFormatDate:function() {

        	    var date = new Date();
        	    var seperator1 = "-";
        	    var seperator2 = ":";
        	    var month = date.getMonth() + 1;
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
        	            + "T" + strHours + seperator2 + strMinutes
        	            + seperator2 + strSeconds;
        	    return currentdate;
                        
    },

}