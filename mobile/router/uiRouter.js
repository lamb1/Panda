//该路由定义为一个堆栈式【只有两层】
angular.module('mobileApp').config(function ($stateProvider, $urlRouterProvider,basePathProvider) {
    $stateProvider.state('tabs', {
        url: '/tab',
        abstract: true,
        templateUrl: basePathProvider.routerTemplatePath + 'tabs.html',
    });
    $stateProvider.state('tabs.home', {
        url: '/home',
        views: {
            'home-tab': {
                templateUrl: basePathProvider.routerTemplatePath + 'home.html',                
            }
        }
    });
    $stateProvider.state('tabs.home2', {
        url: '/home2',
        views: {
            'home-tab': {
                templateUrl: basePathProvider.routerTemplatePath + 'home2.html',
            }
        }
    });
    $stateProvider.state('tabs.home_check', {
        url: '/home_check',
        views: {
            'home-tab': {
                templateUrl: basePathProvider.routerTemplatePath + 'home_check.html',
            }
        }
    });
    $stateProvider.state('tabs.home_ridio', {
        url: '/home_ridio',
        views: {
            'home-tab': {
                templateUrl: basePathProvider.routerTemplatePath + 'home_ridio.html',
            }
        }
    });
    $stateProvider.state('tabs.home_answer', {
        url: '/home_answer',
        views: {
            'home-tab': {
                templateUrl: basePathProvider.routerTemplatePath + 'home_answer.html',
            }
        }
    });

    $stateProvider.state('tabs.home_recognized', {
        url: '/home_recognized',
        views: {
            'home-tab': {
                templateUrl: basePathProvider.routerTemplatePath + 'home_recognized.html',
            }
        }
    });


    $stateProvider.state('tabs.home_space', {
        url: '/home_space',
        views: {
            'home-tab': {
                templateUrl: basePathProvider.routerTemplatePath + 'home_space.html',
            }
        }
    });

    $stateProvider.state('tabs.facts', {
        url: '/facts',
        views: {
            'facts-tab': {
                templateUrl: basePathProvider.routerTemplatePath + 'facts.html',
            }
        }
    });
    $stateProvider.state('tabs.history', {
        url: '/history',
        views: {
            'history-tab': {
                templateUrl: basePathProvider.routerTemplatePath + 'history.html',
            }
        }
    });
    //默认导航
    $urlRouterProvider.otherwise("/tab/home");
});



