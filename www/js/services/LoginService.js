angular.module('starter.services', [])
.factory('CheckAuth',function(){
    var _id = window.localStorage.getItem("id");
    return{
        isLoggedIn: function(){
            return _id !==0;
        }
    };
});
