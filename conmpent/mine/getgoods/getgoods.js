/**
 * Created by YZTC on 2017/7/3.
 */
angular.module('getgoodsModule',['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('mine.getgoods', {
                url: '/getgoods',
                templateUrl: 'conmpent/mine/getgoods/getgoods.html',
                controller:'getgoodsCtrl',
                css:['conmpent/mine/getgoods/getgoods.css','conmpent/mine/mine.css']
            })
    })
    .controller('getgoodsCtrl',['$scope','$stateParams',function($scope,$stateParams){
        $scope.name ="待收货";
    }])