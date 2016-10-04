angular.module('starter.state4Ctrl', [])

.controller('State4Ctrl', function($scope, $location) {
  $scope.logoutFunction = function() {
    $location.path('/login');
  }
});
