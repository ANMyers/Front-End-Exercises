"use strict";

console.log("NavCtrl.js loaded");

app.controller("NavCtrl", function($scope, SearchData) {
	$scope.searchText = SearchData;
	// SearchData is located at the bottom of docFactory.js
});