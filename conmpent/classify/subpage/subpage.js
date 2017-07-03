/**
 * Created by lh1214029722 on 2017/6/29.
 */


angular.module('subpageModule',['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('subpage', {
                url: '/subpage',
                templateUrl: 'conmpent/classify/subpage/subpage.html',
                controller:'subpageCtrl',
                css:['conmpent/classify/subpage/subpage.css']
            })
    })
        .service('getData2',['$http',function ($http) {
            this.get=function (data) {
                return $http.get(data);
            }
        }])
        .controller("subpageCtrl",["$scope",'$http','getData2',function ($scope,$http,getData2) {

            getData2.get('json/zi.json').then(function (rea) {
                $scope.arr = rea.data.data.list;

                console.log(rea.data.data.list);
            })
        }])