angular.module('starter.state1Ctrl', ['ionic'])

  .controller('State1Ctrl', function($ionicPopover, $scope,$location) {

    $ionicPopover.fromTemplateUrl('popoverID', {
      scope: $scope,
    }).then(function(popover) {
      $scope.popover = popover;
    });

    $scope.logoutFunction = function() {
      $location.path('/login');
    }

  });
