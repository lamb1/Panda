/**
 * Created by Administrator on 2016/9/26 0026.
 */
angular.module('myapp').controller('indexCtrl', function ($scope, subjectServer, recognizedServer, spaceServer) {

    //科目信息
    subjectServer.data.then(function (data) {
        $scope.subjects = data;
    });

    $scope.ASC = function (number) {
        return String.fromCharCode(number + 65);
    };
    //判断题
    recognizedServer.data.then(function (data) {
        $scope.recognized = data;
        var reTemp = [];
        angular.forEach($scope.recognized, function (item) {
            if (item.info == 1) {
                item.info = '真';
            } else {
                item.info = '假';
            }
            reTemp.push(item);
            $scope.recognized = reTemp;
            $scope.recognizeds = $scope.recognized
        })
    });
    //填空题
    spaceServer.data.then(function (data) {
        $scope.space = data;
    });


});
