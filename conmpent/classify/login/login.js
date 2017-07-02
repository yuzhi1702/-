/**
 * Created by lh1214029722 on 2017/7/2.
 */
angular.module('loginModule',['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: 'conmpent/classify/login/login.html',
                controller:'loginCtrl',
                css:['conmpent/classify/login/login.css']
            })
    })
    .service('getData00',['$http',function ($http) {
        this.get=function (data) {
            return $http.get(data);
        }
    }])
    .controller("loginCtrl",["$scope",'$http','getData00',function ($scope,$http,getData00) {

    }])