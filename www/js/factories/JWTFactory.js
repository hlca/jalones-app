angular.module('starter.factories', [])
.factory('JWTFactory',function($http, $q){
  return{
    serverToken: {
      "token_type": "Bearer",
      "expires_in": 3155673600,
      "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjgyOTRkMzc2Y2NiNzcwYzUyNmIwNWUyZTdlZWI5YWFjYjI5YmU4Y2Y1N2UzN2FiNThjMWExOTcyYWQwY2MxNmRjZTJlZDYzMmQ0YjUxNmQ0In0.eyJhdWQiOiIxIiwianRpIjoiODI5NGQzNzZjY2I3NzBjNTI2YjA1ZTJlN2VlYjlhYWNiMjliZThjZjU3ZTM3YWI1OGMxYTE5NzJhZDBjYzE2ZGNlMmVkNjMyZDRiNTE2ZDQiLCJpYXQiOjE0NzkxNzY2NDMsIm5iZiI6MTQ3OTE3NjY0MywiZXhwIjo0NjM0ODUwMjQzLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.oxL1RCDoNP4wMtE5NtkudwR5zLvgEzndyjKp9xnCKxjrY2qQHLPrm73sN-HPwMKoSKHupy_Q40aDhUZcYVPqZJHoxVM1u4CtEH9HooI0LoFQe2mKIfDr52Cruad-RBkXkUzi8rTfaHWcXYXkaFyWlYrLfPWXe6d3Y3Cx_lgyMLDAOE8mODo4TcDEW6AGn6XyC9lW9uTfz5nEXa-eR74ouK9wsPRHWhp1fxyvcyp-kPTXPQLeQc5zBsXIEefQRLNS2wjvaj-cR-bncO9EWgFtspNdB4mEEGKVhmddEqsKroxo_PyfPJdYV5ZqcjqnbhASmEt7xVVb0dUQCbnnmWWwHDJEajUn4Wk9dgkp_qtZqVS8_A94fs_sqojMHpZMSKbiuM4CUsDFSTzUS8uz5XfbJ1a_cdoOntqrZFM3xoqKm1RBiCIRfcLkVXnaa8py9Qk1zzSNxWUGIaeqLMwCWlF_M49DKYYjqoLJuk0Yu-VRhJo4AsA70IOORfy3h7S2gCjVvOg-blF47qlTnzSxvzw6aK2IK8DE-rVbqn9ZWghlHL-9r8ewlaznmbTJCns7-uAX7AaGpneFdUJHvYtt1DQsO4O4OsQaNPPsu2u4asiFsydl_rbkJX1_VpJtscgF0Hxfc3VyfaQ-3oc3thJXUiUgczDbT-mk-oY7zDfanbmEOj4",
      "refresh_token": "C2WE9OyhocyoxNSEY0pAbcSwKWlACzRv1s/hL62VDpWayiHUV+nQXbR2O/19xda6CDBMUTsvB7ypGSriEGIGKLXOH8px6E5C4YOn/PUeY+6g7ZIB9WcNYkZDxWppXT9FF9LVB6ORTV6fiJkmvFSMAjroPRviCmhtSFA5PqMQ6+Ry3tV5rVQHUVdZpDFvkFjy5RRed6LiwA6NIbt91Ss2oRnSXAj3qsCbIWVCwyvrrAm0AQyq0IdAJANJ6RD3wdIfp8JdkIKun/uTby9xvHb+V50+4ESgXc/YiXK8YpnrWtJdExOffgGdwixapF1ecosXgzxwWTArFH0DMs042oHKf/0tFX0lDo28Kaqm/eLVLosOv/3xoq2m1Oh4/JD/iLqsuSy321nE0TdSiF9odofyYtgtd5D58u3aw/5QpzZOFwfqU1HkXcVXgY7l//Q1MWJ19HtqEooAK5NMnQVcLf+ZH0IQ1cwtTmsOPuMhIvSYVeXxsrNTCb2QTBt48KfDS9nl1KltNggQSby61DSCtANGD+B0FhuhJgAxxgEAn66TVT09uBgcSI6jwyEy0fm6oFTsGoCKoYPBiVFZgc0ZxKM2HASrtIZH1juagh0qiiWW/VAITQcH1210uA4hf0JPO/z8xtNn4n51GIWl0BabYwOVlJuCwFffoov6Ry0Ovm3F0sI="
    },


    //baseURL: 'http://api.guatemalaauditores.com/',
    baseURL: 'http://apijalones.guatemalaauditores.com/',
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
