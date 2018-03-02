/**
 * Created by Administrator on 2016/10/26 0026.
 */

window.onload=function () {

    var left=document.getElementsByClassName('left')[0];
    var right=document.getElementsByClassName('right')[0];
    var first=document.getElementsByClassName('fullScreen0')[0];

    var timer=null;
    first.onmouseover=function(){
        clearInterval(timer);
        timer=setInterval(function(){
            if(left.offsetLeft>=20){
                clearInterval(timer);
            }else{
                right.style.right=left.style.left=left.offsetLeft+5+"px";
            }
        },30);
    };
    first.onmouseout=function(){
        clearInterval(timer);
        timer=setInterval(function(){
            if(left.offsetLeft<=-80){
                clearInterval(timer);
            }else{
                right.style.right=left.style.left=left.offsetLeft-5+"px";
            }
        },30);
    }

}

