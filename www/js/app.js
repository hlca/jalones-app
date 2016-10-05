// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic',
  'starter.factories',
  'starter.controllers',
  'starter.services',
  'starter.loginCtrl',
  'starter.menuCtrl',
  'starter.MapCtrl',
  'starter.forgotpassCtrl',
  'starter.registerCtrl',
  'starter.state1Ctrl',
  'starter.state2Ctrl',
  'starter.state3Ctrl',
  'starter.state4Ctrl',
  'starter.state5Ctrl',
  'starter.modifyRouteCtrl',
  'starter.searchRouteCtrl',
  'starter.createRouteCtrl' ])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js

  $ionicConfigProvider.tabs.position('bottom');

  $stateProvider
  .state('login', {
    url: '/login',
    templateUrl: 'templates/common/login.html',
    controller: 'LoginCtrl',
  })
  .state('register', {
    url: '/register',
    templateUrl: 'templates/common/register.html',
    controller: 'RegisterCtrl',
  })
  .state('menu', {
    url: '/menu',
    templateUrl: 'templates/menu.html',
    controller: 'MenuCtrl',
  })
  .state('forgotpass', {
    url: '/forgotpass',
    templateUrl: 'templates/common/forgotpass.html',
    controller: 'forgotpassCtrl',
  })
  .state('createroute', {
    url: '/createroute',
    templateUrl: 'templates/createRoute.html',
    controller: 'CreateRouteCtrl',
  })
  .state('searchroute', {
    url: '/searchroute',
    templateUrl: 'templates/SearchRoute.html',
    controller: 'SearchRouteCtrl',
  })
  .state('modifyroute', {
    url: '/modifyroute',
    templateUrl: 'templates/ModifyRoute.html',
    controller: 'ModifyRouteCtrl',
  })
  .state('map', {
    url: '/map',
    templateUrl: 'templates/map.html',
    controller: 'MapCtrl',
  })
  .state('muro', {
    url: '/wall',
    templateUrl: 'templates/muro.html',
    controller: 'State1Ctrl',
  })
  .state('postJalon', {
    url: '/postJalon',
    templateUrl: 'templates/postJalon.html',
    controller: 'State2Ctrl',
  })
  .state('askJalon', {
    url: '/askJalon',
    templateUrl: 'templates/askJalon.html',
    controller: 'State3Ctrl',
  })
  .state('profile', {
    url: '/profile',
    templateUrl: 'templates/profile.html',
    controller: 'State4Ctrl',
  })
  .state('state5', {
    url: '/state5',
    templateUrl: 'templates/state5.html',
    controller: 'State5Ctrl',
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

});
