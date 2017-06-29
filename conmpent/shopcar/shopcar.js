/**
 * Created by YZTC on 2017/6/29.
 */
angular.module('shopcarModule',['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('shopcar', {
                url: '/shopcar',
                templateUrl: 'conmpent/shopcar/shopcar.html',
                controller:'shopcarCtrl',
                css:'conmpent/shopcar/shopcar.css'
            })
    })
    .controller('shopcarCtrl',['$scope',function ($scope) {
        $scope.name="shopcar";
    }])