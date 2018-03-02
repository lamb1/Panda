/**
 * Created by cai on 2016/11/17.
 */
angular.module('mobileApp').directive('cszIndex', function (basePath,topictypeServer) {
    return {
        restrict: 'EA',
        scope: {},
        templateUrl: basePath.directiveTemplatePath+'cszIndex.html',
        require: '',
        controller: function ($scope) {
            $scope.info=topictypeServer.info;
            $scope.url=topictypeServer.url;
            $scope.imgPath=basePath.imgPath+'/';
            console.log($scope.data);
        },
        link: function (scope, iElement, iAttrs, controller) {
        },
        transclude: true
    };
});