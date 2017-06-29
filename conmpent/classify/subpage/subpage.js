/**
 * Created by lh1214029722 on 2017/6/29.
 */


angular.module('subpageModule',['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home.subpage', {
                url: '/subpage',
                templateUrl: 'component/home/subpage/subpage.html',
                controller:'subpageCtrl',
                css:['component/home/subpage/subpage.css','component/home/home.css']
            })
    })
    .controller('subpageCtrl',['$scope','myFactory',function($scope){
        $scope.name = 'drink';


    }])
        .service('getData1',['$http',function ($http) {
            this.get=function (data) {
                return $http.get(data);
            }
        }])
        .controller("subpageCtrl",["$scope",'$http','getData1',function ($scope,$http,getData1) {

            getData1.get('json/fen1.json').then(function (re) {
                $scope.arr = re;
                console.log(re);
            })
        }])