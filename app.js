/**
 * Created by YZTC on 2017/6/29.
 */
angular.module('mls',['ui.router','angularCSS','homeModule','mineModule','classifyModule','shopcarModule','subpageModule','loginModule','goodsModule','shopsModule','registerModule'])
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');
    })