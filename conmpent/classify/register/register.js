/**
 * Created by lh1214029722 on 2017/6/30.
 */
angular.module('registerModule',['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('register', {
                url: '/register',
                templateUrl: 'conmpent/classify/register/register.html',
                controller:'registerCtrl',
                css:['conmpent/classify/register/register.css']
            })
    })
    .service('getData0',['$http',function ($http) {
        this.get=function (data) {
            return $http.get(data);
        }
    }])
    .controller("registerCtrl",["$scope",'$http','getData0',function ($scope,$http,getData0) {

    }])