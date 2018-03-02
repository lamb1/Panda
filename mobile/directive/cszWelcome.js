/**
 * Created by Administrator on 2016/11/14 0014.
 */
angular.module('mobileApp').directive('cszWelcome', function (welcomeServer,basePath) {
    return {
        restrict: 'E',
        scope: {},
        templateUrl: basePath.directiveTemplatePath+'welcome.html',
        require: '',
        controller: function ($scope,$element,$attrs,$transclude) {
            $scope.url=welcomeServer.url;
            $scope.bgs=welcomeServer.bgs;
            $scope.imgPath=basePath.imgPath+'/';
        },
        link: function (scope, iElement, iAttrs, controller) {
        },
        transclude: true
    };
});



