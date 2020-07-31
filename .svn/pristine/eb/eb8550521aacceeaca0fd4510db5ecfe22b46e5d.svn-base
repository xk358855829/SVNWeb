
 function GetUrlByParamName(name)  
    {  
        var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");  
        var URL =  decodeURI(window.location.search);  
        var r = URL.substr(1).match(reg);  
        if(r!=null){  
            //decodeURI() 函数可对 encodeURI() 函数编码过的 URI 进行解码  
            return  decodeURI(r[2]);  
        };  
        return null;  
};  



$(window).load(function() {

  var indexOfCode=GetUrlByParamName("code");
  console.log(indexOfCode);
  $("ul.product-tab li").eq(indexOfCode).addClass("green").siblings().removeClass("green");
  $(".tab-scroll .tab-content").eq(indexOfCode).fadeIn(30).siblings().fadeOut(30);
        
});