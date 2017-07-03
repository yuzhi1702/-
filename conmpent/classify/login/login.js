/**
 * Created by lh1214029722 on 2017/7/2.
 */
angular.module('loginModule3',['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('login3', {
                url: '/login3',
                templateUrl: 'conmpent/classify/login/login.html',
                controller:'loginCtrl3',
                css:['conmpent/classify/login/login.css']
            })
    })
    .service('getData00',['$http',function ($http) {
        this.get=function (data) {
            return $http.get(data);
        }
    }])
    .controller("loginCtrl3",["$scope",'$http','getData00',function ($scope,$http,getData00) {

    }])