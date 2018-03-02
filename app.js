/**
 * Created by xuxiaoshan on 2017/7/17.
 */
var app = angular.module('DemoApp', ['tm.pagination']);

app.controller('DemoController', ['$scope', 'BusinessService', function ($scope, BusinessService) {

    var GetAllEmployee = function () {

        var postData = {
            pagenew: $scope.paginationConf.currentPage,
            pagesize: $scope.paginationConf.itemsPerPage
        }

        BusinessService.list(postData).success(function (response) {
            $scope.paginationConf.totalItems = response.count;
            $scope.persons = response.items;
        });

    }

    //配置分页基本参数
    $scope.paginationConf = {
        currentPage: 1,
        itemsPerPage: 5
    };

    /***************************************************************
     当页码和页面记录数发生变化时监控后台查询
     如果把currentPage和itemsPerPage分开监控的话则会触发两次后台事件。
     ***************************************************************/
    $scope.$watch('paginationConf.currentPage + paginationConf.itemsPerPage', GetAllEmployee);
}]);


//业务类
app.factory('BusinessService', ['$http', function ($http) {
    var list = function (postData) {
        return $http.post('http://192.168.8.88:8080/scp/shop/select', postData);
    }

    return {
        list: function (postData) {
            return list(postData);
        }
    }
}]);