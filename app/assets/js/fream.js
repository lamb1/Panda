/**
 * Created by Administrator on 2016/10/25.
 */

    //时间函数
    function getDate() {
        var date=new Date();
        var year=date.getFullYear();
        var month=date.getMonth()+1;
        var day=date.getDate();
        day=day<10 ? '0'+day : day;

        var hour=date.getHours();
        hour=hour<10 ? '0'+hour : hour;

        var minutes=date.getMinutes();
        minutes=minutes<10 ? '0'+minutes : minutes;

        var sec=date.getSeconds();
        sec=sec<10 ? '0'+sec : sec;

        var week='';
        switch (date.getDay()){
            case 0:
                week = '星期天';
                break;
            case 1:
                week = '星期一';
                break;
            case 2:
                week = '星期二';
                break;
            case 3:
                week = '星期三';
                break;
            case 4:
                week = '星期四';
                break;
            case 5:
                week = '星期五';
                break;
            default:
                week = '星期六';
        }
        return year+'年'+month+'月'+day+'日'+hour+'时'+minutes+'分'+sec+week;
    }
