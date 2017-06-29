/**
 * Created by YZTC on 2017/6/29.
 */
angular.module('classifyModule',['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('classify', {
                url: '/classify',
                templateUrl: 'conmpent/classify/classify.html',
                controller:'classifyCtrl',
                css:'conmpent/classify/classify.css'
            })
    })
.controller('classifyCtrl',['$scope',function ($scope) {
    $scope.name="classify";



    console.log()
}])