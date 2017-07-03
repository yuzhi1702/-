angular.module('payModule',['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('mine.pay', {
                url: '/pay',
                templateUrl: 'conmpent/mine/pay/pay.html',
                controller:'payCtrl',
                css:['conmpent/mine/pay/pay.css','conmpent/mine/mine.css']
            })
    })
    .controller('payCtrl',['$scope','$stateParams',function($scope,$stateParams){
        $scope.name ="待付款";
    }])
