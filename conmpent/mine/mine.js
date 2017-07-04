/**
 * Created by YZTC on 2017/6/29.
 */
angular.module('mineModule',['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('mine', {
                url: '/mine',
                templateUrl: 'conmpent/mine/mine.html',
                controller:'mineCtrl',
                css:'conmpent/mine/mine.css'
            })
    })
    .factory('myFactory', function () {
        //定义factory返回对象
        var myServices = {};
        //定义参数对象
        var myObject = {};
        var _set = function (data) {
            myObject = data;
        };
        var _get = function () {
            return myObject;
        };

        myServices.set = _set;
        myServices.get = _get;

        return myServices;
    })
    .controller('mineCtrl',['$scope','$state','myFactory','$timeout',function ($scope,$state,myFactory,$timeout) {
        $scope.name="mine";
        $scope.shopnum=0;
        $scope.goodsnum=2;
        $scope.quitbtn="";
        $scope.quitbtn="!flag";
        if(localStorage.getItem('username')){
            $timeout(function(){
                $scope.username=localStorage.getItem('username');
                $scope.loginbtn="退出";
            },10);
        };
        $scope.click_loginbtn = function () {
            localStorage.removeItem('username');
        };

    }])

