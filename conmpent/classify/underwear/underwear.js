/**
 * Created by lh1214029722 on 2017/6/30.
 */
angular.module('underwearModule',['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('underwear', {
                url: '/underwear',
                templateUrl: 'conmpent/classify/underwear/underwear.html',
                controller:'underwearCtrl',
                css:['conmpent/classify/underwear/underwear.css']
            })
    })
    .service('getData4',['$http',function ($http) {
        this.get=function (data) {
            return $http.get(data);
        }
    }])
    .controller("underwearCtrl",["$scope",'$http','getData4',function ($scope,$http,getData4) {

        getData4.get('json/zi5.json').then(function (rea) {
            $scope.arr = rea.data.data.list;
            console.log(rea.data.data.list);
        })
        $scope.toTuo = function(item){
            localStorage.setItem('toTuo',JSON.stringify(item));
        }
    }])