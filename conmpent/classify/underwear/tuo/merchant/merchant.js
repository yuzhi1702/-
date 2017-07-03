/**
 * Created by lh1214029722 on 2017/7/3.
 */


angular.module('merchantModule',['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('merchant', {
                url: '/merchant',
                templateUrl: 'conmpent/classify/underwear/tuo/merchant/merchant.html',
                controller:'merchantCtrl',
                css:['conmpent/classify/underwear/tuo/merchant/merchant.css']
            })
    })
    .service('getData4',['$http',function ($http) {
        this.get=function (data) {
            return $http.get(data);
        }
    }])
    .controller("merchantCtrl",["$scope",'$http','getData4',function ($scope,$http,getData4) {

        getData4.get('json/zi8.json').then(function (rea) {
            $scope.arr = rea.data.data.list;
            console.log(rea.data.data.list);
        })
    }])