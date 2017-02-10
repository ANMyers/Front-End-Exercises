"use strict";

// grab the planet js files
let Mercury = require('./Mercery.js'),
	Venus = require('./Venus.js'),
	Earth = require('./Earth.js'),
	Mars = require('./Mars.js'),
	Jupiter = require('./Jupiter.js'),
	Saturn = require('./Saturn.js'),
	Uranus = require('./Uranus.js'),
	Neptune = require('./Neptune.js');

let files = {
	"Mercury": Mercury,
	"Venus": Venus,
	"Earth": Earth,
	"Mars": Mars,
	"Jupiter": Jupiter,
	"Saturn": Saturn,
	"Uranus": Uranus,
	"Neptune": Neptune
};

var planetsArray = [];

var row1 = $("#row1");
var row2 = $("#row2");
var row3 = $("#row3");
var row4 = $("#row4");

$.ajax({
		url: '../json/planets.json'
	}).done(function(planetData){
		planetsArray = planetData;
		Mercury.outputTo(row1, planetsArray[0]);
	}).then(function(planetData){
		Venus.outputTo(row1, planetsArray[1]);
	}).then(function(planetData){
		Earth.outputTo(row2, planetsArray[2]);
	}).then(function(planetData){
		Mars.outputTo(row2, planetsArray[3]);
	}).then(function(planetData){
		Jupiter.outputTo(row3, planetsArray[4]);
	}).then(function(planetData){
		Saturn.outputTo(row3, planetsArray[5]);
	}).then(function(planetData){
		Uranus.outputTo(row4, planetsArray[6]);
	}).then(function(planetData){
		Neptune.outputTo(row4, planetsArray[7]);
	});







