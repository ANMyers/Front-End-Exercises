"use strict";

console.log("hello from guideFactory.js");

app.factory("guideFactory", function($q, $http) {

	console.log("hello from inside factory");

	let getGuides = function() {
			return $q((resolve,reject) => {
				$http.get('../../data/guides.json')
				.then(function (guidesObj) {
					resolve(guidesObj);
				}).catch(function(error) {
					console.log("Something went wrong", error);
					reject();
				});
			});
		};

	return {getGuides};
});