angular.module('starter.services').service('APIService',[ '$http', '$q',
    function ($http, $q) {

        //Attributes
        //var baseURL = 'http://schoolbuzz.hsing.li/api/v1/';
        var baseURL = 'http://api.schoolbuzz.com.gt/api/v1/';

        //Functions
        this.asyncLogin = function(user){
          var deferer = $q.defer();

          // //Opciones del HTTP
          // var httpOptions = {
          //   method: 'GET',
          //   url: baseURL + 'users',
          //   processData: false,
          // }

          // $http(httpOptions).then(function successCallback(response){
          //   if(response.success = true){
          //     //Fue exitoso el request
          //     deferer.resolve({ success:true, data:response.data });
          //   }else{
          //     //No fue exitoso el request
          //     deferer.reject({ success:false, data:null });
          //   }
          // }, function errorCallback(response){
          //   deferer.reject({ success:false, data:null });
          // });

          if(user = 'bus'){
            return deferer.resolve({ success:true, data:1 });
          }else if(user = 'colegio'){
            return deferer.resolve({ success:true, data:2 });
          }else if(user = 'estudiante'){
            return deferer.resolve({ success:true, data:3 });
          }else{
            return deferer.reject({ success:false, data:0 });
          }
          return deferer.promise;
        }

        this.asyncGetUserStudents = function(uID){
          var deferer = $q.defer();
          var httpOptions = {
            method: 'POST',
            url: baseURL + 'get/students',
            data: {user_id:uID},
            processData: false,
            headers: { 'Content-Type': "application/json" },
          };
          $http(httpOptions).then(function successCallback(response){
            if(response.data.success){
              deferer.resolve({success:true, data:response.data.data});
            }else{
              deferer.resolve({success:false, data:null});
            }
          }, function errorCallback(response){
            deferer.resolve({success:false, data:null});
          });
          return deferer.promise;
        };

        this.asyncGetRouteStudents = function(routeName){
          var deferer = $q.defer();
          var httpOptions = {
            method: 'GET',
            url: baseURL + 'get/current/route/students/' + routeName,
            processData: false,
          };
          //console.log($http(httpOptions));
          $http(httpOptions).then(function successCallback(response){
            if(response.data.success){
              deferer.resolve({success:true, data:response.data.data});
            }else{
              deferer.resolve({success:false, data:null});
            }
          }, function errorCallback(response){
            deferer.resolve({success:false, data:null});
          });
          return deferer.promise;
        };

        this.asyncGetRouteBackStudents = function(routeName){
          var deferer = $q.defer();
          var httpOptions = {
            method: 'GET',
            url: baseURL + 'get/current/routedeliver/students/' + routeName,
            processData: false,
          };
          //console.log($http(httpOptions));
          $http(httpOptions).then(function successCallback(response){
            if(response.data.success){
              deferer.resolve({success:true, data:response.data.data});
            }else{
              deferer.resolve({success:false, data:null});
            }
          }, function errorCallback(response){
            deferer.resolve({success:false, data:null});
          });
          return deferer.promise;
        };

        this.asyncGetRouteStudentsInvited = function(routeName, aDate){
          var deferer = $q.defer();
          var httpOptions = {
            method: 'GET',
            url: baseURL + "studentpermission/today/"+aDate+"/"+routeName,
            processData: false,
          };
          //console.log($http(httpOptions));
          $http(httpOptions).then(function successCallback(response){
            //console.log("SUCCESS" + JSON.stringify(response));
              deferer.resolve(response);
          }, function errorCallback(response){
            //console.log("ERROR" + JSON.stringify(response));
              deferer.reject({success:false, data:null});
          });
          return deferer.promise;
        };

        this.asyncCreateSchoolUser = function(){
          var deferer = $q.defer();
          var httpOptions = {
            method: 'POST',
            url: baseURL + 'schoolUsers',
            data: newUser,
            processData: false,
          };
          $http(httpOptions).then(function successCallback(response){
            //console.log(JSON.stringify(response));
            if(response.data.success){
              deferer.resolve({success:true, data:response.data.data});
            }else{
              deferer.resolve({success:false, data:null});
            }
          }, function errorCallback(response){
            //console.log(JSON.stringify(response));
            deferer.resolve({success:false, data:null});
          });
          return deferer.promise;
        };

        this.asyncAuthenticate = function(aUser, aPass){
          var deferer = $q.defer();
          var httpOptions = {
            method: 'GET',
            url: baseURL + "authenticate/" + aUser + "/" + aPass,
            processData: false,
          }
          $http(httpOptions).then(function successCallback(response){
            //console.log("SUCCESS" + JSON.stringify(response));
              deferer.resolve(response)
          }, function errorCallback(response){
//            console.log("ERROR" + JSON.stringify(response));
              deferer.reject({success:false, data:null});
          });
          return deferer.promise;
        }

        this.asyncGetStudentsFromBus = function(aBus){
          var deferer = $q.defer();
          var httpOptions = {
            method: 'GET',
            url: baseURL + "get/bus/students/" + aBus,
            processData: false,
          }
          $http(httpOptions).then(function successCallback(response){
            //console.log("SUCCESS" + JSON.stringify(response));
              deferer.resolve(response)
          }, function errorCallback(response){
//            console.log("ERROR" + JSON.stringify(response));
              deferer.reject({success:false, data:null});
          });
          return deferer.promise;
        }


        this.asyncGetBusFromUser = function(aUser){
          var deferer = $q.defer();
          var httpOptions = {
            method: 'GET',
            url: baseURL + "get/bus/user/" + aUser,
            processData: false,
          }
          $http(httpOptions).then(function successCallback(response){
            //console.log("SUCCESS" + JSON.stringify(response));
              deferer.resolve(response)
          }, function errorCallback(response){
//            console.log("ERROR" + JSON.stringify(response));
              deferer.reject({success:false, data:null});
          });
          return deferer.promise;
        }

        this.asyncGetSchoolFromUser = function(aUser){
          var deferer = $q.defer();
          var httpOptions = {
            method: 'GET',
            url: baseURL + "get/school/user/" + aUser,
            processData: false,
          }
          $http(httpOptions).then(function successCallback(response){
            //console.log("SUCCESS" + JSON.stringify(response));
              deferer.resolve(response)
          }, function errorCallback(response){
//            console.log("ERROR" + JSON.stringify(response));
              deferer.reject({success:false, data:null});
          });
          return deferer.promise;
        }

        this.asyncGetBusesFromSchool = function(aSchool){
          var deferer = $q.defer();
          var httpOptions = {
            method: 'GET',
            url: baseURL + "get/school/bus/" + aSchool,
            processData: false,
          }
          $http(httpOptions).then(function successCallback(response){
            //console.log("SUCCESS" + JSON.stringify(response));
              deferer.resolve(response)
          }, function errorCallback(response){
//            console.log("ERROR" + JSON.stringify(response));
              deferer.reject({success:false, data:null});
          });
          return deferer.promise;
        }


        this.asyncSaveStop = function(aPosition, aOrder, aName, aBusId, aType){
          var deferer = $q.defer();
          console.log("ookkkkkkkkkkkkk");
          var httpOptions = {
            method: 'POST',
            url: baseURL + "routes",
            data: {bus_id:aBusId,stop_id:1, position:aPosition, order:aOrder, route_name:aName, route_type: aType},
            processData: false,
          }
          $http(httpOptions).then(function successCallback(response){
            //console.log("SUCCESS" + JSON.stringify(response));
              deferer.resolve(response)
          }, function errorCallback(response){
            //console.log("ERROR" + JSON.stringify(response));
              deferer.reject({success:false, data:null});
          });
          return deferer.promise;
        }

        this.asyncStudentPermissionBus = function(aStudentId, aRouteId, aBusId, aStopId, aDate){
          var deferer = $q.defer();
          var httpOptions = {
            method: 'POST',
            url: baseURL + "studentpermission",
            data: {student_id: aStudentId, bus_id:aBusId, route_id: aRouteId, stop_id: aStopId, date: aDate},
            processData: false,
          };
          $http(httpOptions).then(function successCallback(response){
            //console.log("SUCCESS" + JSON.stringify(response));
              deferer.resolve(response);
          }, function errorCallback(response){
            //console.log("ERROR" + JSON.stringify(response));
              deferer.reject({success:false, data:null});
          });
          return deferer.promise;
        };

        this.asyncGetPositions = function(){
          var deferer = $q.defer();
          var httpOptions = {
            method: 'GET',
            url: baseURL + "positions",
            //data: {position: pos},
            processData: false
          }

          $http(httpOptions).then(function successCallback(response){
            //console.log("SUCCESS" + JSON.stringify(response));
              deferer.resolve(response)
          }, function errorCallback(response){
              //console.log("ERROR" + JSON.stringify(response));
              deferer.reject({success:false, data:null});
          });
          return deferer.promise;
        }

        this.asyncSaveLocation = function(aBusId, pos, aSpeed){
          var deferer = $q.defer();
          var httpOptions = {
            method: 'PUT',
            url: baseURL + "positions/" + aBusId,
            data: {position: pos, speed: aSpeed},
            processData: false
          }

          $http(httpOptions).then(function successCallback(response){
            //console.log("SUCCESS" + JSON.stringify(response));
              deferer.resolve(response)
          }, function errorCallback(response){
              //console.log("ERROR" + JSON.stringify(response));
              deferer.reject({success:false, data:null});
          });
          return deferer.promise;
        }

        this.asyncGetRouteFromBus = function(aBusId){
          var deferer = $q.defer();
          var httpOptions = {
            method: 'GET',
            url: baseURL + "get/route/" + aBusId,
            processData: false
          };

          $http(httpOptions).then(function successCallback(response){
            //console.log("SUCCESS" + JSON.stringify(response));
              deferer.resolve(response);
          }, function errorCallback(response){
              //console.log("ERROR" + JSON.stringify(response));
              deferer.reject({success:false, data:null});
          });
          return deferer.promise;
        };

        this.asyncGetRouteDetail = function(aBusId, aRouteName){
          var deferer = $q.defer();
          var httpOptions = {
            method: 'GET',
            url: baseURL + "get/route/" + aRouteName + "/" + aBusId,
            processData: false
          };

          $http(httpOptions).then(function successCallback(response){
            //console.log("SUCCESS" + JSON.stringify(response));
              deferer.resolve(response);
          }, function errorCallback(response){
              //console.log("ERROR" + JSON.stringify(response));
              deferer.reject({success:false, data:null});
          });
          return deferer.promise;
        };


        this.asyncGetBusLocation = function(aBusId){
          var deferer = $q.defer();
          var httpOptions = {
            method: 'GET',
            url: baseURL + "positions/" + aBusId,
            processData: false
          }

          $http(httpOptions).then(function successCallback(response){
            //console.log("SUCCESS" + JSON.stringify(response));
              deferer.resolve(response)
          }, function errorCallback(response){
              //console.log("ERROR" + JSON.stringify(response));
              deferer.reject({success:false, data:null});
          });
          return deferer.promise;
        }

        this.asyncGetStudentById = function(aId){
          var deferer = $q.defer();
          var httpOptions = {
            method: 'GET',
            url: baseURL + "students/" + aId,
            processData: false
          }

          $http(httpOptions).then(function successCallback(response){
            //console.log("SUCCESS" + JSON.stringify(response));
              deferer.resolve(response)
          }, function errorCallback(response){
              //console.log("ERROR" + JSON.stringify(response));
              deferer.reject({success:false, data:null});
          });
          return deferer.promise;
        }

        this.asyncGetRouteByStopId = function(aId){
          var deferer = $q.defer();
          var httpOptions = {
            method: 'GET',
            url: baseURL + "routes/" + aId,
            processData: false
          }

          $http(httpOptions).then(function successCallback(response){
            //console.log("SUCCESS" + JSON.stringify(response));
              deferer.resolve(response)
          }, function errorCallback(response){
              //console.log("ERROR" + JSON.stringify(response));
              deferer.reject({success:false, data:null});
          });
          return deferer.promise;
        }

        this.asyncCreateUser = function(newUser){
          var deferer = $q.defer();
          var httpOptions = {
            method: 'POST',
            url: baseURL + 'users',
            processData: false,
            data: newUser,
          }
          $http(httpOptions).then(function successCallback(response){
            if(response.data.success){
              deferer.resolve({success:true, data:response.data.data});
            }else{
              deferer.resolve({success:false, data:null});
            }
          }, function errorCallback(response){
            deferer.resolve({success:false, data:null});
          });
          return deferer.promise;
        }

        this.asyncCreateStudent = function(newChild){
          var deferer = $q.defer();
          var httpOptions = {
            method: 'POST',
            url: baseURL + 'students',
            processData: false,
            data: newChild,
          }
          $http(httpOptions).then(function successCallback(response){
            if(response.data.success){
              deferer.resolve({success:true, data:response.data.data});
            }else{
              deferer.resolve({success:false, data:null});
            }
          }, function errorCallback(response){
            deferer.resolve({success:false, data:null});
          });
          return deferer.promise;
        }

        this.asyncSendNote = function(aType, aId, aTitle, aContent, aSchoolId){
          var deferer = $q.defer();
          var httpOptions = {
            method: 'POST',
            url: baseURL + 'send/note/' + aType,
            processData: false,
            data: {id: aId, title: aTitle, content: aContent, school_id: aSchoolId},
          }
          $http(httpOptions).then(function successCallback(response){
            if(response.data.success){
              deferer.resolve({success:true, data:response.data.data});
            }else{
              deferer.resolve({success:false, data:null});
            }
          }, function errorCallback(response){
            deferer.resolve({success:false, data:null});
          });
          return deferer.promise;
        }

        this.asyncSendRequest = function(aType, aTitle, aContent, aStudenId, aGenericId){
          var deferer = $q.defer();
          var httpOptions;
          if(aType == 1)
          {
              httpOptions = {
                method: 'POST',
                url: baseURL + 'newRequest/' + aType,
                processData: false,
                data: {title: aTitle, content: aContent, student_id: aStudenId,school_id: aGenericId},
              }
          }
          else if (aType == 2) {
              httpOptions = {
                method: 'POST',
                url: baseURL + 'newRequest/' + aType,
                processData: false,
                data: {title: aTitle, content: aContent, student_id: aStudenId, bus_id: aGenericId},
              }
          }
          $http(httpOptions).then(function successCallback(response){
            if(response.data.success){
              deferer.resolve({success:true, data:response.data.data});
            }else{
              deferer.resolve({success:false, data:null});
            }
          }, function errorCallback(response){
            deferer.resolve({success:false, data:null});
          });
          return deferer.promise;
        }

        this.asyncGetSchools = function(){
          var deferer = $q.defer();
          var httpOptions = {
            method: 'GET',
            url: baseURL + 'schools',
            processData: false,
          }
          $http(httpOptions).then(function successCallback(response){
            //console.log(JSON.stringify(response));
            if(response.data.success){
              deferer.resolve({success:true, data:response.data.data});
            }else{
              deferer.resolve({success:false, data:null});
            }
          }, function errorCallback(response){
            //console.log(JSON.stringify(response));
            deferer.resolve({success:false, data:null});
          });
          return deferer.promise;
        }

        this.asyncGetBusRequest = function(aBusId){
          var deferer = $q.defer();
          var httpOptions = {
            method: 'POST',
            url: baseURL + 'get/requests/bus',
            data: {bus_id : aBusId},
            processData: false
          }
          $http(httpOptions).then(function successCallback(response){
            //console.log(JSON.stringify(response));
            if(response.data.success){
              deferer.resolve({success:true, data:response.data.data});
            }else{
              deferer.resolve({success:false, data:null});
            }
          }, function errorCallback(response){
            //console.log(JSON.stringify(response));
            deferer.resolve({success:false, data:null});
          });
          return deferer.promise;
        }

        this.asyncGetStudentSendRequest = function(aStudentId){
          var deferer = $q.defer();
          var httpOptions = {
            method: 'POST',
            url: baseURL + 'get/requests',
            data: {student_id : aStudentId},
            processData: false
          }
          $http(httpOptions).then(function successCallback(response){
            //console.log(JSON.stringify(response));
            if(response.data.success){
              deferer.resolve({success:true, data:response.data.data});
            }else{
              deferer.resolve({success:false, data:null});
            }
          }, function errorCallback(response){
            //console.log(JSON.stringify(response));
            deferer.resolve({success:false, data:null});
          });
          return deferer.promise;
        }

        this.asyncGetInactiveStudent = function(aSchoolId){
          var deferer = $q.defer();
          var httpOptions = {
            method: 'GET',
            url: baseURL + 'get/school/inactive/student/'+aSchoolId,
            //data: {school_id : aSchoolId},
            processData: false
          }
          $http(httpOptions).then(function successCallback(response){
            //console.log(JSON.stringify(response));
            if(response.data.success){
              deferer.resolve({success:true, data:response.data.data});
            }else{
              deferer.resolve({success:false, data:null});
            }
          }, function errorCallback(response){
            //console.log(JSON.stringify(response));
            deferer.resolve({success:false, data:null});
          });
          return deferer.promise;
        }

        this.asyncGetSchoolRequest = function(aSchoolId){
          var deferer = $q.defer();
          var httpOptions = {
            method: 'POST',
            url: baseURL + 'get/requests/school',
            data: {school_id : aSchoolId},
            processData: false
          }
          $http(httpOptions).then(function successCallback(response){
            //console.log(JSON.stringify(response));
            if(response.data.success){
              deferer.resolve({success:true, data:response.data.data});
            }else{
              deferer.resolve({success:false, data:null});
            }
          }, function errorCallback(response){
            //console.log(JSON.stringify(response));
            deferer.resolve({success:false, data:null});
          });
          return deferer.promise;
        }

        this.asyncGetStudentNotes = function(studentId){
          var deferer = $q.defer();
          var httpOptions = {
            method: 'POST',
            url: baseURL + 'get/notes/student',
            data: {student_id : studentId},
            processData: false
          }
          $http(httpOptions).then(function successCallback(response){
            //console.log(JSON.stringify(response));
            if(response.data.success){
              deferer.resolve({success:true, data:response.data.data});
            }else{
              deferer.resolve({success:false, data:null});
            }
          }, function errorCallback(response){
            //console.log(JSON.stringify(response));
            deferer.resolve({success:false, data:null});
          });
          return deferer.promise;
        }

        this.asyncGetSchoolNotes = function(schoolId){
          var deferer = $q.defer();
          var httpOptions = {
            method: 'POST',
            url: baseURL + 'get/notes/school',
            data: {school_id : schoolId},
            processData: false
          }
          $http(httpOptions).then(function successCallback(response){
            //console.log(JSON.stringify(response));
            if(response.data.success){
              deferer.resolve({success:true, data:response.data.data});
            }else{
              deferer.resolve({success:false, data:null});
            }
          }, function errorCallback(response){
            //console.log(JSON.stringify(response));
            deferer.resolve({success:false, data:null});
          });
          return deferer.promise;
        }

        this.asyncGetPossiblesSelectNote = function(aType,aId){
          var deferer = $q.defer();
          var httpOptions;
          if(aType == 1) // buses
          {
              httpOptions = {
                method: 'GET',
                url: baseURL + 'get/school/grade/'+aId,
                //data: {school_id : aId},
                processData: false
              }
          }
          else if (aType == 2) { // grades
              httpOptions = {
                method: 'GET',
                url: baseURL + 'get/school/bus/'+aId,
                //data: {school_id : aId},
                processData: false
              }
          }
          else { // student
              httpOptions = {
                method: 'GET',
                url: baseURL + 'get/school/student/1',
                //data: {school_id : aId},
                processData: false
              }
          }
          $http(httpOptions).then(function successCallback(response){
            //console.log(JSON.stringify(response));
            if(response.data.success){
              deferer.resolve({success:true, data:response.data.data});
            }else{
              deferer.resolve({success:false, data:null});
            }
          }, function errorCallback(response){
            //console.log(JSON.stringify(response));
            deferer.resolve({success:false, data:null});
          });
          return deferer.promise;
        }

        this.asyncGetGradesFromSchool = function(aScholId){
          var deferer = $q.defer();
          var httpOptions = {
            method: 'GET',
            url: baseURL + 'get/school/grade/'+aScholId,
            processData: false,
          }
          $http(httpOptions).then(function successCallback(response){
            //console.log(JSON.stringify(response));
            if(response.data.success){
              deferer.resolve({success:true, data:response.data.data});
            }else{
              deferer.resolve({success:false, data:null});
            }
          }, function errorCallback(response){
            //console.log(JSON.stringify(response));
            deferer.resolve({success:false, data:null});
          });
          return deferer.promise;
        }

        this.asyncGetGrade = function(aGradeId){
          var deferer = $q.defer();
          var httpOptions = {
            method: 'GET',
            url: baseURL + 'grades/'+aGradeId,
            processData: false,
          }
          $http(httpOptions).then(function successCallback(response){
            //console.log(JSON.stringify(response));
            if(response.data.success){
              deferer.resolve({success:true, data:response.data.data});
            }else{
              deferer.resolve({success:false, data:null});
            }
          }, function errorCallback(response){
            //console.log(JSON.stringify(response));
            deferer.resolve({success:false, data:null});
          });
          return deferer.promise;
        }

        this.asyncGetBusesFromSchool = function(aScholId){
          var deferer = $q.defer();
          var httpOptions = {
            method: 'GET',
            url: baseURL + 'get/school/bus/'+aScholId,
            processData: false,
          }
          $http(httpOptions).then(function successCallback(response){
            //console.log(JSON.stringify(response));
            if(response.data.success){
              deferer.resolve({success:true, data:response.data.data});
            }else{
              deferer.resolve({success:false, data:null});
            }
          }, function errorCallback(response){
            //console.log(JSON.stringify(response));
            deferer.resolve({success:false, data:null});
          });
          return deferer.promise;
        }

        this.asyncSaveStopStudent = function(aStudenId, stop){
          var deferer = $q.defer();
          var httpOptions = {
            method: 'PUT',
            url: baseURL + "students/" + aStudenId,
            data: {stop_id: stop},
            processData: false
          }

          $http(httpOptions).then(function successCallback(response){
            //console.log("SUCCESS" + JSON.stringify(response));
              deferer.resolve(response)
          }, function errorCallback(response){
              //console.log("ERROR" + JSON.stringify(response));
              deferer.reject({success:false, data:null});
          });
          return deferer.promise;
        }

        this.asyncChangeStudentStatus = function(aStudenId, status){
          var deferer = $q.defer();
          var httpOptions = {
            method: 'PUT',
            url: baseURL + "students/" + aStudenId,
            data: {active: status},
            processData: false
          }

          $http(httpOptions).then(function successCallback(response){
            //console.log("SUCCESS" + JSON.stringify(response));
              deferer.resolve(response)
          }, function errorCallback(response){
              //console.log("ERROR" + JSON.stringify(response));
              deferer.reject({success:false, data:null});
          });
          return deferer.promise;
        }

        this.asyncModifyRequestStatus = function(aRequestId, value){
          var deferer = $q.defer();
          var httpOptions = {
            method: 'PUT',
            url: baseURL + "requests/" + aRequestId,
            data: {status: value},
            processData: false
          }

          $http(httpOptions).then(function successCallback(response){
            console.log("SUCCESS" + JSON.stringify(response));
              deferer.resolve(response)
          }, function errorCallback(response){
              console.log("ERROR" + JSON.stringify(response));
              deferer.reject({success:false, data:null});
          });
          return deferer.promise;
        }

        this.asyncUpdateStudentList = function(aBusId, aObject){
          var deferer = $q.defer();
          var httpOptions = {
            method: 'PUT',
            url: baseURL + "positions/" + aBusId,
            data: {route_track: aObject},
            processData: false
          }

          $http(httpOptions).then(function successCallback(response){
            console.log("SUCCESS" + JSON.stringify(response));
              deferer.resolve(response)
          }, function errorCallback(response){
              console.log("ERROR" + JSON.stringify(response));
              deferer.reject({success:false, data:null});
          });
          return deferer.promise;
        }
    }]
);
