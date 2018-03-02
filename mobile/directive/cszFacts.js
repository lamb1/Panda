/**
 * Created by cai on 2016/11/17.
 */
angular.module('mobileApp').directive('cszFacts', function (basePath) {
    return {
        restrict: 'EA',
        scope: {},
        templateUrl: basePath.directiveTemplatePath+'cszFacts.html',
        require: '',
        controller: '',
        link: function (scope, iElement, iAttrs, controller) {
        },
        transclude: true
    };
});