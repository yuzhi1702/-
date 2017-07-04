/**
 * Created by YZTC on 2017/7/3.
 */
angular.module('registerModule',['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('register', {
                url: '/register',
                templateUrl: 'conmpent/mine/register/register.html',
                controller:'registerCtrl',
                css:'conmpent/mine/register/register.css'
            })
    })
    .controller('registerCtrl',['$scope','myFactory',function ($scope,myFactory) {
        $scope.name="注册页面";
        $scope.submitForm = function(isValid) {
            if (!isValid) {
                alert('验证失败,手机号或验证码错误！');

            }
            else{
                alert('手机号正确！');
                $scope.$watch(function(){
                    console.log($scope.user.phoneCode);
                    localStorage.setItem('username',$scope.user.phoneCode);
                });
            }
        };
    }])