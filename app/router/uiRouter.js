/**
 * Created by sks on 2016/9/27.
 */
/**
 * Created by Administrator on 2016/9/26 0026.
 */

angular.module('myapp').config(function ($stateProvider, $urlRouterProvider, basePathProvider) {


    $stateProvider.state('topictype',{
        url:'/topictype/{id}/{typeId}',
        templateUrl:basePathProvider.routerTemplatePath+'topicTpl.html',
        controller:'routerTopicCtrl'
    });
    $stateProvider.state('topictype.details',{
        url:'/details',
        views:{
            'left':{
                templateUrl:basePathProvider.routerTemplatePath+'topicLeft.html',

            },
            'right':{
                templateUrl:basePathProvider.routerTemplatePath+'topicRight.html',
                controller:'routerRightCtrl'
            }
        }
    });
    $stateProvider.state('topictype.answer',{
        url:'/answer',
        views:{
            'left':{
                templateUrl:basePathProvider.routerTemplatePath+'topicLeft.html',

            },
            'rightAnswer':{
                templateUrl:basePathProvider.routerTemplatePath+'topicRightAnswer.html',
                controller:'routerLeftCtrl'
            }
        }
    });
});

