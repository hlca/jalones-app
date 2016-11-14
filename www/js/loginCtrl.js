angular.module('starter.loginCtrl', [])

.controller('LoginCtrl', function($location, $scope, JWTFactory) {
  $scope.loginFunction = function(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("pass").value;
    JWTFactory.post(
      'api/user/authenticate', 
      {
        'username': email, 
        'password': password
      }, 
      true, 
      JWTFactory.serverToken.access_token
    ).then(function(data){
      console.log(data);
      if(data.success) {
        $location.path('/wall');
      }
      else {
        alert("Credenciales incorrectas");
      }
    }, function(data){
      alert("Hubo un error en la solicitud");
    })
  }
});
