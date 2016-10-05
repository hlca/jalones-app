angular.module('starter.muroCtrl', ['ionic'])

  .controller('MuroCtrl', function($ionicPopover, $scope,$location) {

    $ionicPopover.fromTemplateUrl('popoverID', {
      scope: $scope,
    }).then(function(popover) {
      $scope.popover = popover;
    });

    $scope.logoutFunction = function() {
      $location.path('/login');
    }

  });
