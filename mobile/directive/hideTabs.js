angular.module('mobileApp').directive('hideTabs', function ($rootScope) {
    return {
        restrict: 'A',
        link: function (scope, iElement, iAttrs, controller) {
            //监听<ion-views>的进入状态
            scope.$on('$ionicView.beforeEnter', function () {
                scope.$watch(iAttrs.hideTabs, function (value) {
                    $rootScope.hideTabs = value;
                });
            });
            //监听<ion-views>的离开状态
            scope.$on('$ionicView.beforeLeave', function () {
                $rootScope.hideTabs = false;
            });
        }
    };
});