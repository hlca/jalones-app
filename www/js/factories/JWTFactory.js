angular.module('starter.factories', [])
.factory('JWTFactory',function($http, $q){
  return{
    serverToken: {
      "token_type": "Bearer",
      "expires_in": 3155673600,
      "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjI0NzdhOGExYzQ1YzljNWRkYjY4OTFjMzlmNjdmYzdlNjU4NzE1NTBlOGEzN2NkZmU3MWY1NmQzYzQzODBhZDI1ZjM2MzEwYWE1NWJkNGU3In0.eyJhdWQiOiIxIiwianRpIjoiMjQ3N2E4YTFjNDVjOWM1ZGRiNjg5MWMzOWY2N2ZjN2U2NTg3MTU1MGU4YTM3Y2RmZTcxZjU2ZDNjNDM4MGFkMjVmMzYzMTBhYTU1YmQ0ZTciLCJpYXQiOjE0NzkxNTY4NDksIm5iZiI6MTQ3OTE1Njg0OSwiZXhwIjo0NjM0ODMwNDQ5LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.KWypj3i9N5g90yztJcK9ow_QVdtNskGSfB_SQwjGt_CpmzGly2tznxXefTtdkgkrMVBkN3yJkTIg3vhG8jopB4zsN05qsVBl-zCJuA_vPtCeZziFq7_Nprs9CWOS1DlDPZ4e6tF49kUsRtksUQaXLfcrbxStrPVPxX-tZGLKlBNHWphT1FFuOAeGUV09DWGC4wwqx1Do6EkKz-Bf4NUS_kt_wvl8mCROWMbUpHpEayN_vuddTyhwwb-wDxZiJ5dFeFUe-kMjPILaIlhhbcVT0RAC0A1-RY_ug3wjnSuIPwx4CrovXd8M46dudbwoNS0oiBi37Z4DKEDyPb7RdxnNxfS3150RBFmKr7gYhqTsVFIlYNQxljX6ZiQnNd_sDkFIrrPMEWeoBgwmO2lxt4I_DLz7s-mLCUFIIObaSn5e0HsMj1nTfI8-iuTdj-Leg9rxAX5yGc9Y3cGYCPrLH6FWucY4TVKtFJ3sUlFU_m2Nxxy4qlFTMo-hK7_HMc1M4TSvG2CmHsn5Wk21YG3XMfSbOtoKUa-ZfRqn9hOn5LJ8MCsM9A8i0j6BUF2Ns0fuYFzz_i3MvSBJ-9gdauPc22nnhBb6e_JzjhsR4SG3zW5QPG84XNEfWGdvIPtVKRnVkvmv_iDlCye662PLz8Qmx4LL7wh2FI06HmUUzlOnnAaYK4E",
      "refresh_token": "oMEKpD5KE1rLFkfWaN4AmHXLh8BnjdEkvVer8+MRdHnNLGoN38soVT8am2D0aTWz6beRR51t9R9U4y1Nvvz8wV225/GG+Jo2ctcLhQqhlcc57q9qKDGvC1tL5V4vGf1bwDuXQgrSLJDKgSc8vQnyyd+eFfEQ2w0t7u7Hbopowsanwfs8zFYUW6N0pbKmv4RNnZCuwa4g13qFa4aYAPZWr/3EpgdeZ8K9lK7/WhKaDtifGyIr3b+Y4AeZ0XBT451hsSUH8nePGhX9KhY7b65yDFf2Zl3l7ldvMgZeilFknfXbOALuGpQdM3czVY2nr65ZZKP92OwfxLCvpMLp8ytXxUrrR855TfJFN/jVB2yacSgEof6aR7xo/DTg4unrfFjNL/YfifdCqL7A3ab7HMOy+NqTT5pYQuKixGo7B5FLwICatAUE8FSDRWSYb+KJNB8K5S7Ut4q0+h6coS8wxdwYUD/IPWe8gM5BsWq/UBqP1/BJTaZbN9Dj0kuOeIBU7p6dquNPs2IV/vANc35d2+Tt7u122HBaZzkHVfLr5Af27l8rs0AIWC3QdTQO2RVg5tbhYCL/tbJ9QKoz3OmWgiQpaNsyR9QmfrgpNYantIKHugGDSrFRSmJTmUPrOiAy+JBVNs1bJzLZpYuO4PKL6cK/D/AhWv9Aejt6y5MO8le2alo="
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
