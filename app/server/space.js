/**
 * Created by Administrator on 2016/10/22.
 */
angular.module('myapp').service('spaceServer',function (basePath,$q,$http) {
    var defer=$q.defer();
    $http.get('http://localhost:8888/space').success(function (data,status,header,config) {
        defer.resolve(data);
    }).error(function (data,status,header,config) {
        defer.reject(data);
    });
    this.data=defer.promise;
})