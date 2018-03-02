/**
 * Created by cai on 2016/10/31.
 */
$(function () {
    $('.qieh1_right').click(function () {
        var move=-$("#banner ul>li").eq(0).width()-82+'px';
        console.log(move);
        $("#banner ul").animate({marginLeft: move},600, function () {
            $("#banner ul>li").eq(0).appendTo($("#banner ul"));
            $("#banner ul").css('marginLeft','0px');
        });
    });
    $('.qieh1_left').click(function () {
        var move=-$("#banner ul>li").eq(5).width()-82+'px';
        $("#banner ul").css('marginLeft',move);
        $("#banner ul>li").eq(9).prependTo($("#banner ul"));
        $("#banner ul").animate({marginLeft:"0px"},600);
    });
});