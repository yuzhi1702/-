/**
 * Created by YZTC on 2017/6/29.
 */
angular.module('homeModule',['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'conmpent/home/home.html',
                controller:'homeCtrl',
                css:'conmpent/home/home.css'
            })
    })
    .controller('homeCtrl',['$scope',function ($scope) {
        $scope.name="home";
    }])