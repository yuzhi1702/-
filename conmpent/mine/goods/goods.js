/**
 * Created by YZTC on 2017/7/3.
 */
angular.module('goodsModule',['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('goods', {
                url: '/goods',
                templateUrl: 'conmpent/mine/goods/goods.html',
                controller:'goodsCtrl',
                css:'conmpent/mine/goods/goods.css'
            })
    })
    .controller('goodsCtrl',['$scope',function ($scope) {
        $scope.name="收藏的宝贝";
    }])