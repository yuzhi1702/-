/**
 * Created by YZTC on 2017/7/3.
 */
angular.module('registerModule',['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('register', {
                url: '/register',
                templateUrl: 'conmpent/mine/register/register.html',
                controller:'registerCtrl',
                css:'conmpent/mine/register/register.css'
            })
    })
    .controller('registerCtrl',['$scope',function ($scope) {
        $scope.name="注册页面";
    }])