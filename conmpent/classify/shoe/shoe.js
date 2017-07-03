/**
 * Created by lh1214029722 on 2017/6/30.
 */
angular.module('shoeModule',['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('shoe', {
                url: '/shoe',
                templateUrl: 'conmpent/classify/shoe/shoe.html',
                controller:'shoeCtrl',
                css:['conmpent/classify/shoe/shoe.css']
            })
    })
    .service('getData4',['$http',function ($http) {
        this.get=function (data) {
            return $http.get(data);
        }
    }])
    .controller("shoeCtrl",["$scope",'$http','getData4',function ($scope,$http,getData4) {

        getData4.get('json/zi2.json').then(function (rea) {
            $scope.arr = rea.data.data.list;

            console.log(rea.data.data.list);
        })
    }])