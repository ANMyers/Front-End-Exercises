"use strict";

app.controller("bookCtrl", function($scope, $http, $q) {

	function initial() {
		$q((resolve,reject) => {
			$http.get('../../data/guides.json')
			.then(function (guidesObj) {
				$scope.guides = guidesObj.data.guides;
				resolve();
			}).catch(function(error) {
				console.log("Something went wrong", error);
				reject();
			});
		});
	}

	initial();
});