angular.module('starter.askJalonCtrl', [])

.controller('AskJalonCrtl', function($location, $scope) {
  $scope.requestFunction = function() {
  	$location.path("/menu");
  	/* This function will publish the puller request. */
  }
});
