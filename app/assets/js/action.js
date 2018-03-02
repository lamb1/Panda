/**
 * Created by Administrator on 2016/10/27.
 */
$(function () {
    //调用时间函数
    //页面打开立即执行
    $('#nowDate').text(getDate());
    //每一秒钟执行一次
    window.setInterval(function () {
        $('#nowDate').text(getDate());
    }, 1000);
    //左侧滑动
    var i=0;
    $('#silder').on('click',function () {
        $('.slider').animate({
            left:'-210px'
        },500,function () {
            $('.content').animate({
                'margin-left':0
            });
            $('.xx-footer').css({'left':'0px'})
        });
        console.log($('.content')[0].scrollWidth)

        if(i%2!=0){
            $('.slider').animate({
                left:'0px'
            },0,function () {
                $('.content').animate({
                    'margin-left':'210px'
                });
                $('.xx-footer').animate({'right':'0px'})
            })
        }
        i++;
    })
})