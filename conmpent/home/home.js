
 /*create  by yanghuan 2017 7 3*/

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

            //本周流行
            $scope.fasionData=res.data.data[5868].list;



        })

        // 限时特卖
        $http.get('json/saleProducts.json').then(function(res){
            $scope.saleProduct=res.data.data[42287].list;

            // 好物组货
            $scope.goodProductData=res.data.data[42287].list;

        })
        // 流行 新款 精选
        $('.home').scroll(function(){
           if( $('.newProduct').offset  ().top <= 0){
               $('.newProductTitle').css({
                   position:'fixed',
                   top:'0'
               });
           }
           else {
               $('.newProductTitle').css({
                   position:'static'
               });
           }

        })
        console.log($('.newProduct').scrollTop()+"px")
        $scope.test=function(){
            console.log($scope.scrollTop)
                  }

        $scope.isActive1=true;
        $scope.isActive2=true;
        $scope.isActive3=true;

        $http.get('json/sy.json').then(function(res){

            $scope.popularProductData=res.data.data.list;

            $scope.res1=function () {
                $scope.isActive1=false;
                $scope.isActive2=true;
                $scope.isActive3=true;
                $scope.popularProductData=res.data.data.list;
            }
        })
        $http.get('json/sy2.json').then(function(res){

            $scope.res2=function () {
                $scope.isActive1=true;
                $scope.isActive2=false;
                $scope.isActive3=true;
                $scope.popularProductData=res.data.data.list;
            }
        })
        $http.get('json/sy2.json').then(function(res){

            $scope.res3=function () {
                $scope.isActive1=true;
                $scope.isActive2=true;
                $scope.isActive3=false;
                $scope.popularProductData=res.data.data.list;
            }
        })







    }])