angular.module('starter.profileCtrl', [])

.controller('ProfileCtrl', function($scope, $location) {
  $scope.logoutFunction = function() {
    $location.path('/login');
  }
});
