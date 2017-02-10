"use strict";

let domForm = require('./planetForm.js');

function outputTo(domElement, planetInfo) {
	return new Promise( (function (resolve, reject){
		var pwerty = domForm.fillMeOut(planetInfo);
		domForm.appendTo(domElement, pwerty);
		resolve();
	}));
}

module.exports = {outputTo};