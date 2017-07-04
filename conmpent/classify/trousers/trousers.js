/**
 * Created by lh1214029722 on 2017/7/4.
 */


angular.module('trousersModule',['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('trousers', {
                url: '/trousers',
                templateUrl: 'conmpent/classify/trousers/trousers.html',
                controller:'trousersCtrl',
                css:['conmpent/classify/trousers/trousers.css']
            })
    })
    .service('getData9',['$http',function ($http) {
        this.get=function (data) {
            return $http.get(data);
        }
    }])
    .service('swiper',['$timeout',function($timeout){
        this.swiper = function(){
            $timeout(function(){

                var mySwiper = new Swiper ('.swiper-container', {
//					    direction: 'vertical',
                    autoplayDisableOnInteraction:true,
                    loop: true,
                    // 如果需要分页器
                    pagination: '.swiper-pagination',
                })
            })
        }
    }])
    .controller("trousersCtrl",["$scope",'$http','getData9','swiper',function ($scope,$http,getData9,swiper) {

        getData9.get('json/zi9.json').then(function (rea) {
            $scope.arr = rea.data.data.list;
            console.log(rea);
            swiper.swiper();
        })
    }])


