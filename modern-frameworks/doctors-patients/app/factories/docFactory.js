"use strict";

/////////////////////////////////////////////////////////
///  The Search Feature is at the bottom of this page ///
/////////////////////////////////////////////////////////

app.factory("DocPatFactory", function($q, $http, FBCreds) {

	let getDoctors = () => {
			return $q((resolve, reject) => {
			$http.get(`${FBCreds.databaseURL}/doctors.json`)
	    .then(function(response) {
	    	var docs = response.data;
	    	var newArray = [];
	    	for (var i = 0; i < docs.length; i++) {
	    		var newObj = {};
	    		var sweetTater = String(Object.keys(docs[i]));
	    		newObj.fullName = docs[i][sweetTater].first_name + " " + docs[i][sweetTater].last_name;
	    		newObj.lastName = docs[i][sweetTater].last_name;
	    		newObj.firstName = docs[i][sweetTater].first_name;
	    		newObj.speciality = docs[i][sweetTater].speciality;
	    		newArray.push(newObj);
	    	}
	    	console.log("doctors", newArray);
	    	resolve(newArray);
	    })
	    .catch(function(error){
	    	console.log("error", error);
	    	reject(error);
	    });
	  });
	};

	let getPatients = (equalParam) => {
		return $q((resolve, reject) => {
			$http.get(`${FBCreds.databaseURL}/patients.json?orderBy="doctor_id"&equalTo="${equalParam}"`)
	    .then(function(response) {
	    	var pats = response.data;
	    	var newArray = [];
	    	for (var each in pats) {
	    		var newObj = {};
	    		newObj.fullName = pats[each].first_name + " " + pats[each].last_name;
	    		newObj.lastName = pats[each].last_name;
	    		newObj.firstName = pats[each].first_name;
	    		newObj.ailment = pats[each].ailment;
	    		newObj.docId = pats[each].doctor_id;
	    		newArray.push(newObj);
	    	}
	    	console.log("patients", newArray);
	    	resolve(newArray);
	    })
	    .catch(function(error){
	    	console.log("error", error);
	    	reject(error);
	    });
	  });
	};

	return {getDoctors, getPatients};

});

app.factory("SearchData", () => {
	return {
		search: ""
	};
});