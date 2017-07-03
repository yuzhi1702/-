/**
 * Created by YZTC on 2017/6/29.
 */
angular.module('mls',['ui.router','angularCSS','me-lazyload','homeModule','mineModule','classifyModule','shopcarModule','subpageModule','loginModule2','goodsModule','shopsModule','registerModule2','orderModule','payModule','getgoodsModule','evaluateModule','skirtModule','shoeModule','underwearModule','hotModule','slipperModule','registerModule','tuoModule','conclusionModule','loginModule'])
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');
    })


