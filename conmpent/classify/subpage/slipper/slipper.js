/**
 * Created by lh1214029722 on 2017/6/30.
 */


angular.module('slipperModule',['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('slipper', {
                url: '/slipper',
                templateUrl: 'conmpent/classify/subpage/slipper/slipper.html',
                controller:'slipperCtrl',
                css:['conmpent/classify/subpage/slipper/slipper.css']
            })
    })
    .service('getData7',['$http',function ($http) {
        this.get=function (data) {
            return $http.get(data);
        }
    }])
    .controller("slipperCtrl",["$scope",'$http','getData7',function ($scope,$http,getData7) {

        getData7.get('json/zi6.json').then(function (raa) {
            $scope.arr1 = raa.data.data;

            console.log(raa);
        })
    }])