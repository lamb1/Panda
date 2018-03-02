/**
 * Created by Administrator on 2016/10/13.
 */
angular.module('myapp').service('topicServer',function ($http,$q) {
    var defer=$q.defer();
    $http.get('http://localhost:8888/topic').success(function (data,status,header,config) {
        defer.resolve(data);
    }).error(function (data,status,header,config) {
        defer.reject(data);
    });
    this.data= defer.promise;

    this.getTopic=function(id,topicId){
        var defer=$q.defer();
        $http.get('http://localhost:8888/topic/'+id+"/"+topicId).success(function (data,status,header,config) {
            defer.resolve(data);
        }).error(function (data,status,header,config) {
            defer.reject(data);
        });
        return defer.promise;
    }   
});
