/**
 * Created by Administrator on 2016/11/2.
 */
angular.module('myapp').controller('routerRightCtrl',function ($scope) {
    $scope.goTo=function () {
        $scope.$emit('gotoData',Number($scope.goData));
    }
    
});