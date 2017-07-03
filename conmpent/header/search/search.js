/**
 * Created by yanghuan on 2017/7/2.
 */
    angular.module('searchModule',['ui.router'])
        .config(function($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('search', {
                    url: '/search',
                    templateUrl: 'conmpent/header/search/search.html',
                    controller:'searchCtrl',
                    css:['conmpent/header/search/search.css']
                })
        })
        .controller('searchCtrl',['$scope','$http',function($scope,$http){
            $scope.myVar=true;
            $scope.cance = "取消";

            $http.get('json/home.json').then(function(res){

                $scope.search=res.data.data[5868].list;
            })

        }])





















