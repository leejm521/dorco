$(document).ready(function(){
    let i = 0;
    let count = $(".main_images>li").length;



    let autoSlide = setInterval(function(){
        if(i == count-1){
            i = 0;
        }else{
            i++;
        }
        show();
        slideDown();
    }, 5000);

    slideDown();

    $(".arrow").mouseenter(function(){
        clearInterval(autoSlide);
    });
    $(".arrow").mouseleave(function(){
        autoSlide = setInterval(function(){
            if(i == count-1){
                i = 0;
            }else{
                i++;
            }
            show();
            slideDown();
        }, 5000);
    });

    $(".next").click(function(){
        if(i == count-1){
            i = 0;
        }else{
            i++;
        }
        show();
        slideDown();
    });    
    $(".prev").click(function(){
        if(i == 0){
            i = count-1;
        }else{
            i--;
        }
        prevShow();
        slideDown();
    });
    $(window).scroll(function(){
        if($(this).scrollTop() > 100){
            $(".top").stop().fadeIn(300)
        }else{
            $(".top").stop().fadeOut(300)
        }
    });
    $(".top").click(function(){
        $("html,body").stop().animate({scrollTop : 0}, 500);
    });

    function show(){
        $(".main_images").stop().animate({"margin-top":"-200vh"}, 1500, function(){
            $(".main_images>li:first-child").appendTo(".main_images");
            $(".main_images").css({"margin-top":"-100vh"});
        });
    }
    function prevShow(){
        $(".main_images").stop().animate({"margin-top":"0vh"}, 1500, function(){
            $(".main_images>li:last-child").prependTo(".main_images");
            $(".main_images").css({"margin-top":"-100vh"});
        });
    }
    function slideDown(){
        $(".txt_gr_move").css({"top":"-300px"});
        $(".txt_long>h3").css({"top":"-150px"});
        $(".txt>li").stop().fadeOut();
        $(".txt>li").eq(i).stop().fadeIn(function(){
            $(".txt_gr_move").stop().animate({"top":"0px"}, 1000);
            $(".txt_long>h3").stop().animate({"top":"0px"}, 1000);
        });
    };

    // 푸터와 헤더
    $(".site").click(function(){
        $(".select>p").toggle();
        $(".site").toggleClass("site_cover");
    });
    $(window).click(function (e) {
        const isFamMenu = Boolean(e.target.closest(".site"));
        if (!isFamMenu) {
            $(".site").removeClass("site_cover");
            $(".select>p").hide();
        }
    });
    $(".lang>h1").click(function(){
        $(".choice").stop().slideDown();
        $(".lang>h1").toggleClass("lang_cover")
    });
    $(Window).click(function (e){
        const slide = Boolean(e.target.closest(".lang_cover"));
        if (!slide) {
            $(".lang>h1").removeClass("lang_cover")
            $(".choice").slideUp();
        }
    });
});