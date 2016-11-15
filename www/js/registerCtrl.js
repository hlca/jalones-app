angular.module('starter.RegisterCtrl', [])

.controller('RegisterCtrl', function($location, $scope, JWTFactory) {
  $scope.registerFunction = function(){
    var first_name = document.getElementById("first_name").value;
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var password2 = document.getElementById("password2").value;
    var address = document.getElementById("address").value;
    var phone = document.getElementById("phone").value;
    JWTFactory.post(
      'api/user',
      {
        'name': first_name,
        'username': username,
        'email': email,
        'password': password,
        'confirmPassword': password2,
        'address': address,
        'phone': phone
      },
      true,
      JWTFactory.serverToken.access_token
    ).then(function(data){
      console.log(data);
      if(data.success) {
        $location.path('/login');
      }
      else {
        alert(data.message);
      }
    }, function(data){
      alert("Hubo un error en la solicitud");
    })
  }
});
