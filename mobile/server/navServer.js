/**
 * Created by Administrator on 2016/11/14 0014.
 */


angular.module('mobileApp').factory('navServer', function () {


    var data = [
        {
            title: '首页',
            icon_on: 'ion-checkmark-circled',
            icon_off: 'ion-checkmark-circled',
            
        },
        {
            title: '我的',
            icon_on: 'ion-checkmark-circled',
            icon_off: 'ion-checkmark-circled',
        },
        {
            title: '历史',
            icon_on: 'ion-checkmark-circled',
            icon_off: 'ion-checkmark-circled',
        },
        
    ];
    return data;

});