/**
 * Created by Administrator on 2016/10/22.
 */
angular.module('myapp').service('answerServer',function (basePath,$http,$q) {
    var defer=$q.defer();
    $http.get('http://localhost:8888/topicanswer').success(function (data,status,header,config) {
        defer.resolve(data);
    }).error(function (data,status,header,config) {
        defer.reject(data);
    });
    this.data=defer.promise;
})