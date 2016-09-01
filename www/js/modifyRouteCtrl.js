angular.module('starter.modifyRouteCtrl', [])

  .controller('ModifyRouteCtrl', function($scope) {
    function initialize() {
      console.log( 'step 1');
      var myLatlng = new google.maps.LatLng(14.6047215,-90.4916558);

      var mapOptions = {
        center: myLatlng,
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      var map = new google.maps.Map(document.getElementById("map"),
        mapOptions);

      console.log( 'step 2');

      $scope.map = map;
    }
    //google.maps.event.addDomListener(window, 'load', initialize);

    // $scope.centerOnMe = function() {
    //   //console.log($scope.map);
    //   if(!$scope.map) {
    //     return;
    //   }


    //   navigator.geolocation.getCurrentPosition(function(pos) {
    //     $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
    //   }, function(error) {
    //     alert('Unable to get location: ' + error.message);
    //   });

    // };

    $scope.$on('$ionicView.enter', function(e) {
      initialize();
    });

  });
