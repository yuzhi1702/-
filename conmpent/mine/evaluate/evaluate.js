/**
 * Created by YZTC on 2017/7/3.
 */
angular.module('evaluateModule',['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('mine.evaluate', {
                url: '/evaluate',
                templateUrl: 'conmpent/mine/evaluate/evaluate.html',
                controller:'evaluateCtrl',
                css:['conmpent/mine/evaluate/evaluate.css','conmpent/mine/mine.css']
            })
    })
    .controller('evaluateCtrl',['$scope','$stateParams',function($scope,$stateParams){
        $scope.name ="待评价";
    }])