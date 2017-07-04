/**
 * Created by lh1214029722 on 2017/6/30.
 */
angular.module('skirtModule',['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('skirt', {
                url: '/skirt',
                templateUrl: 'conmpent/classify/skirt/skirt.html',
                controller:'skirtCtrl',
                css:['conmpent/classify/skirt/skirt.css']
            })
    })
    .service('getData3',['$http',function ($http) {
        this.get=function (data) {
            return $http.get(data);
        }
    }])
    .controller("skirtCtrl",["$scope",'$http','getData3',function ($scope,$http,getData3) {

        getData3.get('json/zi4.json').then(function (rea) {
            $scope.arr = rea.data.data[42287].list;

            console.log(rea.data);
        })
        $scope.toTuo = function(item){
            localStorage.setItem('toTuo',JSON.stringify(item));
        }

    }])