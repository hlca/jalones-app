angular.module('starter.MapCtrl', [])

    .controller('MapCtrl', function($scope) {
		function initMap() {
		  map = new google.maps.Map(document.getElementById('map'), {
			zoom: 7,
			center: {lat: 14.6054765, lng: -90.4882603}  // Center the map on Chicago, USA.
		  });

		  poly = new google.maps.Polyline({
			strokeColor: '#000000',
			strokeOpacity: 1.0,
			strokeWeight: 3
		  });
		  poly.setMap(map);

		  // Add a listener for the click event
		  map.addListener('click', addLatLng);
		}
		function addLatLng(event) {
			  var path = poly.getPath();

			  // Because path is an MVCArray, we can simply append a new coordinate
			  // and it will automatically appear.
			  path.push(event.latLng);
			myPath = path.b.map(
				function(item){
					return {'latitud':item.lat(), 'longitud': item.lng()};
				}
			);

			console.log(JSON.stringify(myPath));
			  // Add a new marker at the new plotted point on the polyline.
			  var marker = new google.maps.Marker({
				position: event.latLng,
				title: '#' + path.getLength(),
				map: map
			  });
			}
      $scope.$on('$ionicView.enter', function(e) {
        initMap();
      });
      
    });