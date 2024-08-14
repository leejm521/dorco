$(document).ready(function(){
    $(".gr").click(function(){
        if($(this).hasClass("border")){
            $(".gr").removeClass("border").siblings().slideUp();
        }else{
            $(".gr").removeClass("border").siblings().slideUp();
            $(this).addClass("border").siblings().slideDown();
        }
    });
    $(".tab>li").click(function(){
        let i = $(this).index();
        $(".tab>li").removeClass("on");
        $(".tab>li").eq(i).addClass("on");
        $(".tab_menu>li").hide();
        $(".tab_menu>li").eq(i).show();
        $(".tab_menu>li").removeClass("open");
        $(".tab_menu>li").eq(i).addClass("open");
    });
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
    })
});