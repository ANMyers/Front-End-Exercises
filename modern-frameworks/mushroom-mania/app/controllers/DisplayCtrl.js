"use strict";

console.log("connected?");

app.controller("DisplayCtrl", function($scope, $http){

			$http.get("../../mushrooms.json")
    .then(function(response) {
        var shrooms = response.data.mushrooms;
        var arrayOf = [];
        $scope.mushrooms = arrayOf;
        for (var i = 0; i < shrooms.length; i++) {
        	var newObj = {};
        	var fluffy = String(Object.keys(shrooms[i]));
        	newObj.name = fluffy;
        	newObj.edible = shrooms[i][fluffy].edible;
        	newObj.description = shrooms[i][fluffy].description;
        	arrayOf.push(newObj);
        }

    });

});