/**
 * Created by YZTC on 2017/6/29.
 */
angular.module('mineModule',['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('mine', {
                url: '/mine',
                templateUrl: 'conmpent/mine/mine.html',
                controller:'mineCtrl',
                css:'conmpent/mine/mine.css'
            })
    })
    .controller('mineCtrl',['$scope',function ($scope) {
        $scope.name="mine";
    }])