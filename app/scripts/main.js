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

  $urlRouterProvider.when("", "/main/index");
  
  $stateProvider
    // this state is placed in the <ion-nav-view> in the index.html
    .state("main", {
      url: "/main",
      abstract: true,
      templateUrl: "views/main.html"
    })

    .state('main.home', {
      url: '/index',
      views: {
        'home-tab': {
          templateUrl: 'views/index.html',
          controller: 'indexCtrl'
        }
      }
    })

    .state('main.buy', {
      url: '/buy',
      views: {
        'home-tab': {
          templateUrl: 'views/buy.html'
        }
      }
    })

    .state('viewlist', {
        url: '/viewlist',
        templateUrl: 'views/viewlist.html'
    })

    ;

});
