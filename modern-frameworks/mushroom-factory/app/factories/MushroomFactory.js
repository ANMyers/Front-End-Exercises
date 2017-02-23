"use strict";

console.log("fac connect?");

app.factory("MushroomFactory", function($http, $q) {

	let getShrooms = function() {
		return $q((resolve, reject) => {
			$http.get('../../mushrooms.json')
			.then(function (response) {
				var shrooms = response.data.mushrooms;
				var arrayOf = [];
			    for (var i = 0; i < shrooms.length; i++) {
		        var newObj = {};
		        var fluffy = String(Object.keys(shrooms[i]));
		        newObj.name = fluffy;
		        newObj.edible = shrooms[i][fluffy].edible;
		        newObj.description = shrooms[i][fluffy].description;
		        arrayOf.push(newObj);
			    }
				resolve(arrayOf);
			}).catch(function (error) {
				reject(error);
			});
		});
	};

	return {getShrooms};
});