/**
 * Created by Administrator on 2016/11/14 0014.
 */
angular.module('mobileApp').factory('welcomeServer', function () {
    var data = {
        url: 'index.html',
        bgs: [
            {
                img: 'welcome1.jpg',
            },
            {
                img: 'welcome2.jpg',
            },
            {
                img: 'welcome3.jpg',
            },
            {
                img: 'welcome4.jpg',
            }
        ]
    };
    return data;
});

