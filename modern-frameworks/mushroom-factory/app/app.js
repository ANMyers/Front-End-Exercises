"use strict";

var app = angular.module("MushroomApp", ["ngRoute"]);

app.config(function($routeProvider){
  $routeProvider.
  when('/',{
    templateUrl: "partials/display-form.html",
    controller: 'DisplayCtrl'
  });
  //otherwise('/');
});