/**
 * Created by Administrator on 2016/10/13.
 */
angular.module('myapp').service('topictypeServer',function ($http,$q) {
    var defer=$q.defer();
    $http.get('http://localhost:8888/topictype').success(function (data,status,header,config) {
        defer.resolve(data);
    }).error(function (data,status,header,config) {
        defer.reject(data);
    });
    this.data=defer.promise;
})
