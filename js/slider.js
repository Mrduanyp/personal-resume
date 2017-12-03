
// banner轮播图
$(function () {
    var listLeft = 0;
    var index = 1;
    for (var i = 0; i < 4; i++) {
        $(".button_list span").eq(i).click(function () {
            var tabindex= $(this).attr("tabindex");
            listLeft = listLeft + 770 * (index - tabindex);
            console.log(listLeft,tabindex,index);
            index=tabindex;
            $(this).addClass("on").siblings().removeClass("on");
            $(".img_list").animate({left: listLeft + "px"}, 500)

        })
    }
});



$("#main_nav").click(function () {
    $("html,body").animate({scrollTop:680},1000);
    return false
});
