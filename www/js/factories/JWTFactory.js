angular.module('starter.factories', [])
.factory('JWTFactory',function($http, $q){
  return{
    serverToken: {
      "token_type": "Bearer",
      "expires_in": 3155673600,
      "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImE5MWYzMDMxM2FkMmQxY2I1OTdlMTE4NGQwMDU5MjhmZmEyMDczZjJjZTI4YTc0ODliY2VmNmFmYzY4NjljMTJlNTA1NGU1ODMwNmQxOGUwIn0.eyJhdWQiOiIxIiwianRpIjoiYTkxZjMwMzEzYWQyZDFjYjU5N2UxMTg0ZDAwNTkyOGZmYTIwNzNmMmNlMjhhNzQ4OWJjZWY2YWZjNjg2OWMxMmU1MDU0ZTU4MzA2ZDE4ZTAiLCJpYXQiOjE0NzkxNTM5NjMsIm5iZiI6MTQ3OTE1Mzk2MywiZXhwIjo0NjM0ODI3NTYzLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.pjZilyVSuF1t7mndhq7xBxQpoxad8W5g8DdS93FEG1iJI6jNgF3-KKOBRgtuNlYjQdkf2AkbwJwD_fuMr5SEP9fyfFWbAV6_B4UKqCl03VWyT-wQfr9fmXDXsZmBdpA2hme6CES8nyRiJ64H-RvnB-IIzZV_dAzJBqpdbk8rXIiXqwRGoyFdWEpUiXDScAjXqdEQ1Pny1gVDnyk9n1oILxdKYNZ-xUgcW5VHa1nHMQRMLwuWEDPVcb5H1XyIiDeyFC9blGBJFnQVXc7YNjm7yycfEx_BN0QTiS19fn_7w4uihp0WN6Jr9FkzVwt2bQ32XQ_XxubDVOohQ-2Ea9bnvMEie8S2fGuO3ag2RRRPFGi6RakOO8rhg6igwymCu3LACMrgnbl604EJf34fAR3DjnxsplCJGxGbbU82tRZ7D1zzLGXmNpeu6FgMJDpDChOSVXP56gw3SCLKt_uqWyD86I2DSabph9nX3wdNP9bhzZtND1AABa8hBpwJfH-tpPH6Avg5K-OpLK6kDQSrfn5Xn20PAz8Jl3xEi92HBUF8VYrzZcSj2i9ntnubN0Y0zam5iNENUOlXo2GKkBE3FNY0L4lDlXH3tlzkowIatj4TGt4oBLlvN7WYUyxbFPBrLlJgqAqWRFJYWU3kGIVS2EeDu9Us3dAP1R69NXrL-5Qt2eI",
      "refresh_token": "MSL1JkDLqGwTxfv+djHBhO5p9jnGKqYDLSy298idY7KSOb8ZKXQ0h7A2d3XWHNCyW8jlR7ioInvhyzIGGDvp72w1jrhOvcXnpzKMz0VVzZZD5Hi39nYtybgg7mf22MubgEb1Qr+8SkG23JstkOSrEL32SEESJDGmFQau7ITLacq2erUlgRgTGlXMfZ+RiXd9hlz4bMc0N7J6s0siEF07c7Vk0i6DDZHw/qjBMg1stiNSezv9Ut2coqvToQL38XQkl4BlhtxB4vb2Tx0JbEzpgwF/97BDblB88tXMlhJegPEQKolJ/uFD2or72CiVNz4+VN+atGf9fiMPe0DlHXKHY1FC1b4XaB/zzSYSx1VsmaEGFzOREeGoFXiTv93IXlIpUCs8nfatWjGAFMnzc/cjn+12dc6au2CQZ+gpQOrGpyx/1xCsAbB6H6rIQO9PpN6MmWaYP893XnJ7IaC2uTe4IUVaImO9z9scYP9Y/S+TKhPFiuQEA9izQuIhDv+A2CRPxaPXan2SMgCtoX8wQGZJrZ+5PQTc+ai34Y1MnqFUPxEDw3kk4XLCUFRswRwrD9MOZHbeqP3ABi8+cplwNrO96wwghd7hBCnY9GBRVyk78ayEDq70gKjjtDCNpVKrithKnEJfOcTNdFgQaMTzjir1TXZMlgF4ynvwrb2E1a3Z7IM="
    },


    //baseURL: 'http://api.guatemalaauditores.com/',
    baseURL: 'http://jalones.dev/',
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
