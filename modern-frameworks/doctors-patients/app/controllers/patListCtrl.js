"use strict";

console.log("patListCtrl.js loaded");

app.controller("PatListCtrl", function($scope, DocPatFactory, $routeParams, SearchData){

	$scope.searchText = SearchData;
	// SearchData is located at the bottom of docFactory.js
	$scope.patients = [];

	let initial = () => {
		$scope.title = $routeParams.lastName;
		var searchPatient = $routeParams.lastName.toLowerCase();
		DocPatFactory.getPatients(searchPatient)
		.then(function(patArray) {
			$scope.patients = patArray;
		});
  };
initial();

});