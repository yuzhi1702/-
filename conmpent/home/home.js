/**
 * Created by YZTC on 2017/6/29.
 */
angular.module('homeModule',['ui.router'])

    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'conmpent/home/home.html',
                controller:'homeCtrl',
                css:'conmpent/home/home.css'
            })
    })

    .controller('homeCtrl',['$scope','$http','$timeout',function ($scope,$http,$timeout) {
        // $scope.name="home";

        $http.get('json/home.json').then(function(res){
            // 轮播图
            $scope.swiperData=res.data.data[20114].list;

            $timeout(function(){

                var mySwiper=new Swiper('.swiper-container',{
                    loop:true,
                    autoplay:1000,
                    pagination:'.swiper-pagination'
                })
            },50)
            // 热卖单品
            $scope.hotProducts=res.data.data[13730].list;

        })

        // 限时特卖
        $http.get('json/saleProducts.json').then(function(res){
            $scope.saleProduct=res.data.data[42287].list;
            console.log($scope.saleProduct);
        })



    }])