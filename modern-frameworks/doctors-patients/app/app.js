"use strict";

console.log("app.js loaded");

var app = angular.module("DoctorApp", ["ngRoute"]);

console.log("module DoctorApp loaded");

app.config(function($routeProvider){
	$routeProvider.
	when('/doctor/:lastName', {
		templateUrl: "partials/patient-list.html",
		controller: 'PatListCtrl'
	}).
	when('/', {
		templateUrl: "partials/doctor-list.html",
		controller: 'DocListCtrl'
	}).
	otherwise('/');
});