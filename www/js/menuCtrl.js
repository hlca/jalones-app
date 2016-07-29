angular.module('starter.menuCtrl', [])

.controller('MenuCtrl', function($location, $scope) {
  $scope.logoutFunction = function() {
    $location.path('/login');
  }
});
