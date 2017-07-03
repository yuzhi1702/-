/*create  by yanghuan 2017 7 3*/

angular.module('hotProductModule',['ui.router'])
    .config(function($stateProvider,$urlRouterProvider){
        $stateProvider
            .state('hotproduct',{
                url:'/hotproduct',
                templateUrl:'conmpent/home/hotproduct/hotproduct.html',
                controller:'hotproductCtrl',
                css:['conmpent/home/hotproduct/hotproduct.css']
            })
    })
    .controller("hotproductCtrl",["$scope",'$http',function($scope,$http){
        $scope.name='yang';
        $http.get('json/hotProduct.json').then(function(res){
            $scope.hotProductData=res.data.data[51331].list;
            console.log($scope.hotProductData)
        })
    }])