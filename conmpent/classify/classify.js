/**
 * Created by YZTC on 2017/6/29.
 */
angular.module('classifyModule',['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('classify', {
                url: '/classify',
                templateUrl: 'conmpent/classify/classify.html',
                controller:'classifyCtrl',
                css:'conmpent/classify/classify.css'
            })
    })
.controller('classifyCtrl',['$scope',function ($scope) {
    $scope.name="classify";




}])




    .service('getData',['$http',function ($http) {
        this.get=function (data) {
            return $http.get(data);
        }
    }])
    .controller("classifyCtrl",["$scope",'$http','getData',function ($scope,$http,getData) {

        getData.get('json/zi.json').then(function (res) {
            $scope.arr = res.data.data.list;
            console.log(res.data.data);
        })

    }])


