/**
 * Created by YZTC on 2017/6/29.
 */
angular.module('mls',['ui.router','angularCSS','me-lazyload','homeModule','mineModule','classifyModule','shopcarModule','subpageModule','loginModule3','goodsModule','shopsModule','registerModule3','skirtModule','shoeModule','underwearModule','hotModule','slipperModule','registerModule','tuoModule','conclusionModule','loginModule','merchantModule'])
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');
    })


