/**
 * Created by Administrator on 2016/10/22.
 */
angular.module('myapp').service('recognizedServer',function (basePath,$q,$http) {
    var defer=$q.defer();
    $http.get('http://localhost:8888/topicrecognized').success(function (data,status,header,config) {
        defer.resolve(data);
    }).error(function (data,status,header,config) {
        defer.reject(data);
    });
    this.data=defer.promise;
})