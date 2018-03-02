//路径服务
//服务名称为basePathProvider【provider的服务名称必须是服务名称加Provider后缀】
angular.module('mobileApp').provider('basePath', function () {
   var path='/Panda/mobile/';
    this.routerTemplatePath=path+'routerTemplate/';
    
    //this.$get 可以让provider服务在config里面使用
    this.$get = function () {
        return {
            directiveTemplatePath: path+'directiveTemplate/',
            imgPath:path+'assets/img',
            path:path
        };
    };
});
