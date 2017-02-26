"use strict";

console.log("hello from bookCtrl.js");

app.controller("bookCtrl", function($scope, guideFactory) {

console.log("hello from inside controller");

	function initial() {
		console.log("hello from initial function");
		guideFactory.getGuides()
		.then(function (guideObj){
			$scope.guides = guideObj.data.guides;
		});
	}

	initial();
});