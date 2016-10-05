angular.module('starter.state3Ctrl', [])

.controller('State3Ctrl', function($location, $scope) {
  $scope.requestFunction = function() {
  	$location.path("/menu");
  	/* This function will publish the puller request. */
  }
});
