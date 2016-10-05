angular.module('starter.postJalonCtrl', [])

.controller('PostJalonCtrl', function($location, $scope) {
  $scope.publishFunction = function() {
  	$location.path("/menu");
  	/* This function will publish the puller offer. */
  }
});
