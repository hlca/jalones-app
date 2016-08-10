angular.module('starter.factories', [])
.factory('JWTFactory',function($http, $q){
  return{
    baseURL: 'http://api.guatemalaauditores.com/',
    generateToken: function(dataAuth){
      /*var email = "admin@gmail.com";
      var password = "secret";

      var dataAuth = {email: email, password: password};*/
      var deferer = $q.defer();
      var httpOptions = {
        method: 'POST',
        url: this.baseURL + 'api/authenticate',
        data: dataAuth,
        processData: false,
      };
      $http(httpOptions).then(function successCallback(response){
        if(response.data.success){
          deferer.resolve({success:true, data:response.data.token});
        }else{
          deferer.resolve({success:false, data:null});
        }
      }, function errorCallback(response){
        deferer.resolve({success:false, data:null});
      });
      return deferer.promise;

    },
      genericHttp: function(httpOptions){
        var deferer = $q.defer();
        $http(httpOptions).then(function successCallback(response){
          console.log("Respuesta buena de JWT");
          console.log(response);
          if(response.data.success){
            deferer.resolve({success:true, data:response.data.data});
          }else{
            deferer.resolve({success:false, data:null});
          }
        }, function errorCallback(response){
          console.log(response);
          console.log(JSON.stringify(response));
          console.log("ERROR usando URL: "+httpOptions.url);
          deferer.resolve({success:false, data:null});
        });
        return deferer.promise;

    },
    get: function(url, hasHeader, token){
      var httpOptions = {
        method: 'GET',
        url: this.baseURL + url,
        processData: false,
      };
      if(hasHeader)
      {
        httpOptions.headers = {"Authorization" : "Bearer " + token};
      }
      var resolution = this.genericHttp(httpOptions);
      return resolution;
    },
    post: function(url, data, hasHeader, token){
      var httpOptions = {
        method: 'POST',
        url: this.baseURL + url,
        data: data,
        processData: false,
      };
      if(hasHeader)
      {
        httpOptions.headers = {"Authorization" : "Bearer "+token};
      }
      var resolution = this.genericHttp(httpOptions);
      return resolution;
    }
  }
});
