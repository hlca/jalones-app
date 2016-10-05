angular.module('starter.state2Ctrl', [])

.controller('State2Ctrl', function($location, $scope) {
  $scope.publishFunction = function() {
  	$location.path("/menu");
  	/* This function will publish the puller offer. */
  }
});
