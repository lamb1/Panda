/**
 * Created by Administrator on 2016/10/22.
 */
angular.module('myapp').controller('routerTopicCtrl',function ($scope,topictypeServer,topicServer,answerServer,$stateParams) {
    //科目的id
    $scope.subId=$stateParams.id;
    //题型id
    $scope.topicId=$stateParams.typeId;
    //题目的序号
    $scope.topicIndex = 1;
    //下一题
    $scope.next = function () {
        if($scope.topicIndex >= ($scope.topicaaa).length){
            $scope.topicIndex=($scope.topicaaa).length
        }else {
            $scope.topicIndex = $scope.topicIndex + 1;
        }
        console.log(($scope.topicaaa).length)

    };
    // $scope.topicLength=$scope.topicaaa.length
    //上一题
    $scope.prev = function () {
        if ($scope.topicIndex <= 1) {
            $scope.topicIndex = 1;
        } else {
            $scope.topicIndex = $scope.topicIndex - 1;
        }
    };
    $scope.$on('goToData', function(event,data){
        $scope.topicIndex=data;
        console.log(data)
    })
    //题型的数据
    topictypeServer.data.then(function (data) {
        $scope.topictypes=data;
        angular.forEach($scope.topictypes,function (item) {
            //当前的id等于路由获取的id
            if(item.id==$scope.topicId){
                $scope.click(item.id);
                //题目的序号重置为1
                $scope.topicIndex=1;
            }
        })
    });
    $scope.click=function (topictypeId) {
        topicServer.getTopic($scope.subId,topictypeId).then(function (data) {
            $scope.topicaaa=data;
            // $(function () {
            //     $('.left_li').eq($scope.topicId-1).addClass('menu');
            // })
        });
    };

    topicServer.data.then(function (data) {
        $scope.topic=data;
        if ($stateParams.id!==''){
            var temp=[];
            angular.forEach( $scope.topic,function (item) {
                if(item.subject_id==$stateParams.id){
                    temp.push(item)
                }
            });
            $scope.topic=temp;
            $scope.topics=$scope.topic;
        }
    });
    //答案信息
    answerServer.data.then(function (data) {
        $scope.answers=data;
    });
    $scope.$on('gotoData',function (event,msg) {
        $scope.topicIndex=msg;
    });
});