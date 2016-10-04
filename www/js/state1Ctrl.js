angular.module('starter.state1Ctrl', ['ionic'])

  .controller('State1Ctrl', function($ionicPopover, $scope) {

    $ionicPopover.fromTemplateUrl('popoverID', {
      scope: $scope,
    }).then(function(popover) {
      $scope.popover = popover;
    });
  });
