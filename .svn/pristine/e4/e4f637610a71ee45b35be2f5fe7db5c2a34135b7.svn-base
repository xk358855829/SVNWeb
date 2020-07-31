
        var windowWidth=$(window).width();
        console.log(windowWidth);
        var height=windowWidth*88/192;
        $('.content').height(height);
window.onresize = function(){
    var windowWidth=$(window).width();
        console.log(windowWidth)
        var height=windowWidth*88/192;
        $('.content').height(height);
}


        var windowWidth=$(window).width();
        console.log(windowWidth);
        var height=windowWidth*597/1920;
        $('.content1').height(height);
window.onresize = function(){
    var windowWidth=$(window).width();
        console.log(windowWidth)
        var height=windowWidth*597/1920;
        $('.content1').height(height);
}
        var windowWidth=$(window).width();
        console.log(windowWidth);
        var height=windowWidth*486/1920;
        $('.map').height(height);
window.onresize = function(){
    var windowWidth=$(window).width();
        console.log(windowWidth)
        var height=windowWidth*486/1920;
        $('.map').height(height);
}
        var windowWidth=$(window).width();
        console.log(windowWidth);
        var height=windowWidth*230/1218;
        $('.overhiddeimg').height(height);
window.onresize = function(){
    var windowWidth=$(window).width();
        console.log(windowWidth)
        var height=windowWidth*230/1218;
        $('.overhiddeimg').height(height);
}





        if(windowWidth>500){
            console.log(111);
            $(document).delegate(".topLi",'mouseover',function(){
                console.log(windowWidth);
                $(this).children(".showBox").show();
            });
                $(document).delegate(".topLi",'mouseout',function(){
                $(this).children(".showBox").hide();
            });

            $(document).delegate(".proBox ul li",'click',function(){
                var thisIndex=$(this).index();
                location.href="product-service.html?code="+thisIndex+"";
            });

            // $(document).delegate(".sysBox ul li",'click',function(){
            //     var thisIndex=$(this).index();
            //     location.href="SystemScheme.html?code="+thisIndex+"";
            // });

        }else{
            console.log(222);
        }

	$(window).load(function() {
		$("ul.product-tab li").click(function(){
			$(this).addClass("green").siblings().removeClass("green");
			var index=$(this).index();
            console.log(index);
			$(".tab-scroll .tab-content").eq(index).fadeIn(30).siblings().fadeOut(30);
	});
        function Getcanshu() {
        	var url =window.location.href; //获取url中符后的字串
        	var Anchor;
        	if (url.indexOf('#') != '-1'){
        		 Anchor = url.substring(url.indexOf('#')+1,url.length)
        	}else{
        		Anchor =false
        	}
        	 if (Anchor){
        	 	Slide($('div[custom="'+Anchor+'"]'))
        	 }
        	}
        	Getcanshu()

			$('a[href=#partner]').click(function(){
				Slide($('div[custom=partner]'))
			})

            function Slide(domesli) {
                if (domesli.length) {
                    var targetOffset = domesli.offset().top-500;
                    console.log(targetOffset)
                    $('html,body').animate({
                                scrollTop: targetOffset
                            },
                            1000);
                    return false;
                }
            };
        });
$(function(){
    $('.topLi .showBox li').click(function(){
       var thisIndex=$(this).index()
       if(thisIndex==0){
        location.href="safe4.html"
       }else if(thisIndex==1){
        location.href="safe1.html"
       }else if(thisIndex==2){
        location.href="safe3.html"
       }else if(thisIndex==3){
        location.href="SystemScheme.html"
       }else{
        location.href="safe2.html"
       }
    })
     $('.topLi .proBoxs li').click(function(){
       var thisIndex=$(this).index()
       if(thisIndex==0){
        location.href="http://cloud.sokeed.com"
       }else if(thisIndex==1){
        location.href="http://dlock.sokeed.com"
       }else{
        location.href="http://car.sokeed.com"
       }
    })
     $('.know').click(function(){
        $(this).css("background","#c1db9e")
     })
})




  