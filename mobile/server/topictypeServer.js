/**
 * Created by cai on 2016/11/17.
 */
angular.module('mobileApp').factory('topictypeServer',function (basePath) {
    var data = {
        url: '#/tab/home2',
        info: [
            {
                id:1,
                img:'Exhibition_icon_01_png.png',
                info:'单选题'
            },
            {
                id:2,
                img:'Exhibition_icon_02_png.png',
                info:'多选题'
            },
            {
                id:3,
                img:'Exhibition_icon_03_png.png',
                info:'问答题'
            },
            {
                id:4,
                img:'Exhibition_icon_04_png.png',
                info:'判断题'
            },
            {
                id:5,
                img:'Exhibition_icon_05_png.png',
                info:'填空题'
            }
        ]
    };
    return data;
});