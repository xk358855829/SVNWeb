
        var windowWidth=$(window).width();
        console.log(windowWidth)


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




		$(".product-tab li").click(function(){
			$(this).addClass("green").siblings().removeClass("green");
			var index=$(this).index();
            var fatherIndex=$(this).parents(".productConLiH").index();
            console.log(fatherIndex);
            console.log(index);
            $('.tab-scroll').hide();
            $('.tab-scroll').eq(fatherIndex).show();
            $(".tab-scroll:eq("+fatherIndex+") .tab-content").eq(index).fadeIn(30).siblings().fadeOut(30);
			// $(".tab-scroll .tab-content").eq(index).fadeIn(30).siblings().fadeOut(30);
	});

    $(".productConLiH").click(function(){
            $(".product-tab").hide();
            var index=$(this).index();
            //console.log(index);
            $(this).find(".product-tab").show();
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
                    var targetOffset = domesli.offset().top-50;
                    console.log(targetOffset)
                    $('html,body').animate({
                                scrollTop: targetOffset
                            },
                            1000);
                    return false;
                }
            };
        });


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






  $(document).ready(function(){

        var indexOfCode=GetUrlByParamName("code");
        var sendCode=GetUrlByParamName("sendCode");
        console.log(indexOfCode);
        console.log(sendCode);
        if(indexOfCode==null){
            indexOfCode=0;
        }
        if(sendCode==null){
            sendCode=0;
        }
        $('.product-tab').hide();
        $('.product-tab').eq(indexOfCode).show();
        // $(".productConLiH:eq("+indexOfCode+") .product-tab li").eq(sendCode).addClass("green").siblings().removeClass("green");
        $(".tab-scroll").hide();
        $(".tab-scroll:eq("+indexOfCode+")").show();
        $(".tab-scroll:eq("+indexOfCode+") .tab-content").eq(sendCode).fadeIn(30).siblings().fadeOut(30);

  })
  $(function(){
        $(".productConLi li").click(function(){
            $('.numone').removeClass('numone')
                $(this).addClass("greens").siblings().removeClass("greens");
                var index=$(this).index();
                var fatherIndex=$(this).parents("li").index();
                console.log(fatherIndex);
                console.log(index);
                $('.tab-content').hide();
                $('.tab-content').eq(index).show();
                // $(".tab-scroll:eq("+fatherIndex+") .tab-content").eq(index).fadeIn(30).siblings().fadeOut(30);
                // $(".tab-scroll .tab-content").eq(index).fadeIn(30).siblings().fadeOut(30);
        });
        $('.fflex div').mouseenter(function(){
            $(this).addClass('.fflex affle').siblings().removeClass('.fflex affle')
        });
        // $('.b').mouseenter(function(){
        //     // $('.affle').removeClass('.fflex affle')
        //     $('.b').addClass('.fflex affle')
        // });
        // $('.affle').mouseenter(function(){
        //      // $('.affle').addClass('abcd')
        //     $('.b').removeClass('.fflex affle')
        // });
    })

