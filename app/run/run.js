/**
 * Created by Administrator on 2016/9/26 0026.
 */
//$rootScope在run方法里面调度
angular.module('myapp').run(function ($rootScope) {
    //当模板开始解析之前触发
    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
        //注意：使用event.preventDefault()可以阻止模板解析的发生
        // event.preventDefault();
        console.log('解析【'+toState.name+'】路由状态开始');
        
    });
    // $stateNotFound在transition 时通过状态名查找状态，当状态无法找到时发生。
    // 该事件在 scope 链上广播，只允许一次处理错误的机会。
    $rootScope.$on('$stateNotFound', function (event, unfoundState, fromState, fromParams) {
    
    });
    // $stateChangeSuccess - 当模板解析完成后触发
    $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        console.log('解析【'+toState.name+'】路由状态成功');
    });
    // $stateChangeError - 当模板解析过程中发生错误时触发
    $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
    
    });
});