/**
 * Created by Administrator on 2016/10/26 0026.
 */

/*alert($(window).width()+'、'+$(window).height());*/
$(function () {
    /*满屏浏览*/
    $("#fullpage").fullpage({
        'verticalCentered': true,
        'navigationColor': '#00b3ee',
        'navigation':true,
        'keyboardScrolling':true,
    });

    /*科目总汇页面鼠标经过图片事件*/
    var imgData1=['assets/img/but_java_pre.png-拷贝.png','assets/img/but_Html_pre.png.png',
        'assets/img/but_angular_pre.png.png','assets/img/but_spring_nor.png-拷贝.png',
        'assets/img/but_bootsrap_pre.png.png'];
    var imgData2=['assets/img/but_java_nor.png.png','assets/img/but_Html_nor.png-拷贝.png',
        'assets/img/but_angular_nor.png-拷贝.png','assets/img/but_spring_nor.png.png',
        'assets/img/but_bootsrap_nor.png-拷贝.png'];

    var imgData3=['assets/img/but_C++_nor.png-.png','assets/img/but_PHP_nor.png-.png',
        'assets/img/but_Python_nor.png.png','assets/img/but_javascript_nor.png-.png',
        'assets/img/but_mysql_nor.png-.png'];
    var imgData4=['assets/img/but_C++_pre.png-.png','assets/img/but_PHP_nor1.png-.png',
        'assets/img/but_Python_pre.png.png','assets/img/but_javascript_pre.png.png',
        'assets/img/but_mysql_pre.png.png'];

    /*第一屏*/
    $('.fullScreen0_pic1>img').each(function (i) {
        $(this).mouseover(function () {
            $(this).attr('src', imgData2[i]).css('background','#333A4A');
        }).mouseout(function () {
            $(this).attr('src', imgData1[i]).css('background','none');
        });
    });

    /*第二屏*/
    $('.fullScreen0_pic2>img').each(function (i) {
        $(this).mouseover(function () {
            $(this).attr('src', imgData4[i]).css('background','#333A4A');
        }).mouseout(function () {
            $(this).attr('src', imgData3[i]).css('background','none');
        });
    });


   
});


