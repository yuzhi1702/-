angular.module('loginModule',['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: 'conmpent/mine/login/login.html',
                controller:'loginCtrl',
                css:'conmpent/mine/login/login.css'
            })
    })
    .controller('loginCtrl',['$scope',function ($scope) {
        $scope.name="注册";
    }])