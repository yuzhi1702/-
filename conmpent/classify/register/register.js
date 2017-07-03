/**
 * Created by lh1214029722 on 2017/6/30.
 */
angular.module('registerModule3',['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('register3', {
                url: '/register3',
                templateUrl: 'conmpent/classify/register/register.html',
                controller:'registerCtrl3',
                css:['conmpent/classify/register/register.css']
            })
    })
    .service('getData0',['$http',function ($http) {
        this.get=function (data) {
            return $http.get(data);
        }
    }])
    .controller("registerCtrl3",["$scope",'$http','getData0',function ($scope,$http,getData0) {

    }])