/**
 * Created by YZTC on 2017/7/3.
 */
angular.module('orderModule',['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('mine.order', {
                url: '/order',
                templateUrl: 'conmpent/mine/order/order.html',
                controller:'orderCtrl',
                css:['conmpent/mine/order/order.css','conmpent/mine/mine.css']
            })
    })
    .controller('orderCtrl',['$scope','$stateParams',function($scope,$stateParams){
        $scope.name ="全部订单";
    }])