/**
 * Created by YZTC on 2017/7/3.
 */
angular.module('registerModule2',['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('register2', {
                url: '/register2',
                templateUrl: 'conmpent/mine/register/register.html',
                controller:'registerCtrl',
                css:'conmpent/mine/register/register.css'
            })
    })
    .controller('registerCtrl',['$scope',function ($scope) {
        $scope.name="注册页面";
    }])