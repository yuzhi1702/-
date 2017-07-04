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

        })

            $('.hotProductPage').scroll(function(){
               console.log($('.starproduct').offset().top+'px')
                if($('.starproduct').offset().top<=0){
                    $('.starproductTitle').css({
                        'position':'fixed',
                        'top':0
                    })
                }else{
                    $('.starproductTitle').css({
                        'position':'static',

                    })
                }
            })

            $scope.isActive1=true;
            $scope.isActive2=true;
        $http.get('json/sy2.json').then(function(res){
            $scope.starProductData=res.data.data.list;

            $scope.add1=function () {
                $scope.isActive1=false;
                $scope.isActive2=true;
                $scope.starProductData=res.data.data.list;
            }

        })
        $http.get('json/sy2.json').then(function(res){

            $scope.add2=function () {
                $scope.isActive2=false;
                $scope.isActive1=true;
                $scope.starProductData=res.data.data.list;
            }


        })





    }])