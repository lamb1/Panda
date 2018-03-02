/**
 * Created by cai on 2016/11/21.
 */
angular.module('mobileApp').controller('subjectCtrl',function ($scope,$window) {
    $scope.colClick=function (subject) {
        console.log(11111);
        sessionStorage.setItem('subjectId',subject.id);
        var topictypeId=sessionStorage.getItem('topictypeId');
        switch (topictypeId){
            case '1':
                $window.location='#/tab/home_ridio';
                break;
            case '2':
                $window.location='#/tab/home_check';
                break;
            case '3':
                $window.location='#/tab/home_answer';
                break;
            case '4':
                $window.location='#/tab/home_recognized';
                break;
            case '5':
                $window.location='#/tab/home_space';
                break;
        }
    }
});