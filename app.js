/**
 * Created by YZTC on 2017/6/29.
 */
<<<<<<< HEAD
angular.module('mls',['ui.router','angularCSS','homeModule','mineModule','classifyModule','shopcarModule','subpageModule','loginModule','goodsModule','shopsModule','registerModule'])
=======
angular.module('mls',['ui.router','angularCSS','me-lazyload','homeModule','mineModule','classifyModule','shopcarModule','subpageModule','skirtModule','shoeModule','underwearModule','hotModule','slipperModule','registerModule','tuoModule','conclusionModule','loginModule'])
>>>>>>> 2c1a00dc10eb5a375b1aabe8d7cd0d5fccbb3138
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');
    })


