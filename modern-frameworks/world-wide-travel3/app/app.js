"use strict";

let app = angular.module("travelApp", ["ngRoute"]);

console.log("hello from app travelApp");

app.config(function($routeProvider) {
	$routeProvider.
	when('/', {
		templateUrl: 'partials/guildList.html',
		controller: 'bookCtrl'
	}).
	otherwise('/');
});