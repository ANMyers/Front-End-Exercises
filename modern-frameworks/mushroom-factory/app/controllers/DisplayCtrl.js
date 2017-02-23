"use strict";

console.log("connected?");

app.controller("DisplayCtrl", function($scope, $http, MushroomFactory){

let init = () => {
    var shrooms = MushroomFactory.getShrooms()
    .then(function (result) {
        $scope.mushrooms = result;
    });
    console.log("shrooms ", shrooms);
};

init();
});