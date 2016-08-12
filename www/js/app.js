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
  'starter.state1Ctrl',
  'starter.state2Ctrl',
  'starter.state3Ctrl',
  'starter.state4Ctrl',
  'starter.state5Ctrl'])

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

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
  .state('login', {
    url: '/login',
    templateUrl: 'templates/common/login.html',
    controller: 'LoginCtrl',
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
  .state('state1', {
    url: '/state1',
    templateUrl: 'templates/state1.html',
    controller: 'State1Ctrl',
  })
  .state('state2', {
    url: '/state2',
    templateUrl: 'templates/state2.html',
    controller: 'State2Ctrl',
  })
  .state('state3', {
    url: '/state3',
    templateUrl: 'templates/state3.html',
    controller: 'State3Ctrl',
  })
  .state('state4', {
    url: '/state4',
    templateUrl: 'templates/state4.html',
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
