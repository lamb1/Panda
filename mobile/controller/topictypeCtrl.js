/**
 * Created by cai on 2016/11/21.
 */
angular.module('mobileApp').controller('topictypeCtrl',function ($scope,$window) {
    $scope.ColClick=function (id) {
        console.log(1111);
        sessionStorage.setItem('topictypeId',id);
        window.location='#/tab/home2';
    }
});