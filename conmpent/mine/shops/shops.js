/**
 * Created by YZTC on 2017/7/3.
 */
angular.module('shopsModule',['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('shops', {
                url: '/shops',
                templateUrl: 'conmpent/mine/shops/shops.html',
                controller:'shopsCtrl',
                css:'conmpent/mine/shops/shops.css'
            })
    })
    .controller('shopsCtrl',['$scope',function ($scope) {
        $scope.name="收藏的店铺";
    }])