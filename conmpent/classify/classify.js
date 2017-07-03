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



    .service('getData',['$http',function ($http) {
        this.get=function (data) {
            return $http.get(data);
        }
    }])
    .controller("classifyCtrl",["$scope",'$http','getData',function ($scope,$http,getData) {

        getData.get('json/fen1.json').then(function (res) {
            $scope.arr = res.data.data[5768].list;
            $scope.arr2 = res.data.data[5868].list;
            console.log( res.data.data);

        })

    }])


