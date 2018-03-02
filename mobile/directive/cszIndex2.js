/**
 * Created by cai on 2016/11/17.
 */
angular.module('mobileApp').directive('cszIndex2', function (basePath,selectServer,$window) {
    return {
        restrict: 'EA',
        scope: {},
        templateUrl: basePath.directiveTemplatePath+'cszIndex2.html',
        require: '',
        controller: function ($scope) {
            $scope.url=selectServer.url;
            $scope.info=selectServer.info;
            $scope.imgPath=basePath.imgPath+'/';
        },
        link: function (scope, iElement, iAttrs, controller) {
        },
        transclude: true
    };
});