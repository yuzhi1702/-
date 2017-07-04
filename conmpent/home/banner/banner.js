/*create  by yanghuan 2017 7 2*/


angular.module('bannerModule',['ui.router'])
    .config(function($stateProvider,$urlRouterProvider){
        $stateProvider
            .state('banner',{
                url:'/banner',
                templateUrl:'conmpent/home/banner/banner.html',
                controller:'bannerCtrl',
                css:['conmpent/home/banner/banner.css']
            })
    })

    .controller("bannerCtrl",["$scope",'$http',function ($scope,$http) {
        $scope.name='yang';
        $http.get('json/home.json').then(function (res) {
            $scope.bannerPageData = res.data.data[20114].list;

            $scope.niceProductsData = res.data.data[42287].list;
            // console.log($scope.niceProductsData);


        })
    }])