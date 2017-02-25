"use strict";

console.log("docListCtrl.js loaded");

app.controller("DocListCtrl", function($scope, DocPatFactory, SearchData){

	$scope.searchText = SearchData;
// SearchData is located at the bottom of docFactory.js
	$scope.doctors = [];

	function initial() {
		DocPatFactory.getDoctors()
		.then(function(docArray) {
			$scope.doctors = docArray;
		});
  }

  initial();


});