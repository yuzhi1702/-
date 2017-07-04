/**
 * Created by lh1214029722 on 2017/6/30.
 */
angular.module('hotModule',['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('hot', {
                url: '/hot',
                templateUrl: 'conmpent/classify/hot/hot.html',
                controller:'hotCtrl',
                css:['conmpent/classify/hot/hot.css']
            })
    })
    .service('getData5',['$http',function ($http) {
        this.get=function (data) {
            return $http.get(data);
        }
    }])
    .controller("hotCtrl",["$scope",'$http','getData5',function ($scope,$http,getData5) {

        getData5.get('json/zi6.json').then(function (rea) {
            $scope.arr = rea.data.data.list;

            console.log(rea.data.data.list);
        })


        $scope.toTuo = function(item){
            localStorage.setItem('toTuo',JSON.stringify(item));
        }
    }])