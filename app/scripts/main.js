'use strict';
angular.module('main', [
  'ionic',
  'ngCordova',
  'ui.router'
])
.config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

  // Android 默认是顶部(top)，Ios是底部 (bottom)
  // 如果将tab配置成统一为下方，配制方法：
  //========================================================
  $ionicConfigProvider.views.maxCache(5);
  $ionicConfigProvider.tabs.position("bottom");


  $urlRouterProvider.when("", "/main");
  $stateProvider
    // this state is placed in the <ion-nav-view> in the index.html
    .state("main", {
      url: "/main",
      //abstract: true,
      templateUrl: "views/main.html"
    })
    .state('main.index', {
      url: '/index',
      views: {
        'tab-index': {
          templateUrl: 'views/index.html',
          controller: 'indexCtrl'
        }
      }
    })
    .state('main.info', {
      url: '/info',
      views: {
        'tab-info': {
          templateUrl: 'views/info.html'
      //    controller: 'infoCtrl as ctrl'
        }
      }
    })
    .state('main.list', {
      url: '/list',
      views: {
        'tab-list': {
          templateUrl: 'views/list.html'
      //    controller: 'infoCtrl as ctrl'
        }
      }
    })
    .state('main.order', {
      url: '/order',
      views: {
        'tab-order': {
          templateUrl: 'views/order.html'
      //    controller: 'infoCtrl as ctrl'
        }
      }
    })
    .state('main.mine', {
      url: '/mine',
      views: {
        'tab-mine': {
          templateUrl: 'views/mine.html'
      //    controller: 'infoCtrl as ctrl'
        }
      }
    })
    // .state("main.index", {
    //   url: "/index",
    //   templateUrl: "views/index.html"
    // })
    // .state("main.info", {
    //   url: "/info",
    //   templateUrl: "views/info.html"
    // })
    // .state("main.list", {
    //   url: "/list",
    //   templateUrl: "views/list.html"
    // })
    // .state("main.order", {
    //   url: "/order",
    //   templateUrl: "views/order.html"
    // })
    // .state("main.mine", {
    //   url: "/mine",
    //   templateUrl: "views/mine.html"
    // })
    ;
});
