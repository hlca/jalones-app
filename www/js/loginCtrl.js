angular.module('starter.loginCtrl', [])

.controller('LoginCtrl', function($location, $scope) {
  $scope.loginFunction = function(){
    $location.path('/wall');
    // var promise = APIService.asyncAuthenticate(
    //   document.getElementById("email").value,
    //   document.getElementById("pass").value
    // );
    // promise.then(function(result){
      
    // }, function(error){
    //   alert("ERROR al realizar autenticacion. Intente mas tarde")
    //   console.log(JSON.stringify(error));
    // });
  }

});
