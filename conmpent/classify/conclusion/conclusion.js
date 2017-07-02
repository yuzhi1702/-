/**
 * Created by lh1214029722 on 2017/7/2.
 */

angular.module('conclusionModule',['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('conclusion', {
                url: '/conclusion',
                templateUrl: 'conmpent/classify/conclusion/conclusion.html',
                controller:'conclusionCtrl',
                css:['conmpent/classify/conclusion/conclusion.css']
            })
    })
    .service('getData4',['$http',function ($http) {
        this.get=function (data) {
            return $http.get(data);
        }
    }])
    .controller("conclusionCtrl",["$scope",'$http','getData4',function ($scope,$http,getData4) {

    }])