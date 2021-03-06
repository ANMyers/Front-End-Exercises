"use strict";

$(document).ready(() => {
	
	$("#description-div").hide();
	// Global variables of details of last request
	var nasaTitle;
	var nasaDate;
	var nasaDescrip;
	var nasaImageUrl;
	var nasaImageHdUrl;

	// Counter to allow images to load
	var counter = 2;

	// Globally naming a timeout to end it incase of click
	var myTimeout;

	// Stores Images for 'Previous Image' button
	var objectOfViewed = [];

	// Produces a random date to pull image
	// between 2000 and 2017 *note: left off day 29,30,31*
	function giveRandomDate() {
	var year = Math.floor((Math.random() * 16) + 2000);
	var month = Math.floor((Math.random() * 12) + 1);
	var day = Math.floor((Math.random() * 28) + 1);
		if (month < 10) {
			month = "0" + month;
		}
		if (day < 10) {
			day = "0" + day;
		}
	var randomDate = year + "-" + month + "-" + day;
	return randomDate;
 	};

 	// Initiates request to nasa API
 	function helloNASA () {
 		var dateToNASA = giveRandomDate();
		var nasaImagesRequest = $.ajax({
	    url: "https://api.nasa.gov/planetary/apod",
	    type: 'GET',
	    data: jQuery.param({ 
	 					 date: dateToNASA
	 					}),
	    success: () => {
	    	console.log("it loaded");
	    	turntoJson(nasaImagesRequest);
	    },
	    error: () => {
	    	alert("Nasa needs a break, try again in a few moments");
	        setTimeout(function(){helloNASA(); }, 5000);
	    }
		});
		
	}

	// Reformats request to object to pull information from
	function turntoJson(potato) {
		var nasaImagesObject = potato.responseText;
		var nasaToObject = JSON.parse(nasaImagesObject);
		console.log(nasaToObject);
		storeLast(nasaToObject);
		keepValues(nasaToObject);
	};

	// Storing the values to populate the page
	function keepValues(derp) {
		nasaImageHdUrl = derp.hdurl;
		nasaImageUrl = derp.url;
		nasaDate = derp.date;
		nasaTitle = derp.title;
		nasaDescrip = derp.explanation;
		thisIsTheLoopThatNeverEnds();
	}

	// populates the page
	function thisIsTheLoopThatNeverEnds(prayForMe) {
		  // yesItGoesOnAndOnMyFriends haha
		$("#NASA-image").hide();
		$("#NASA-image").attr("src", nasaImageUrl);
		$("#caption").empty();
		$("#year").empty();
		$("#explanation").empty();
		$("#caption").append(nasaTitle);
		$("#year").append(nasaDate);
		$("#explanation").append(nasaDescrip);
		$("#NASA-image").show("slow");
		myTimeout = setTimeout(function(){
			counter = 2;
			helloNASA(); 
		}, 15000);
	}

	// Stores request in array of objects for previous button
	function storeLast(derp2) {
		var objToKeep = {}
		objToKeep.hdurl = derp2.hdurl;
		objToKeep.url = derp2.url;
		objToKeep.date = derp2.date;
		objToKeep.title = derp2.title;
		objToKeep.explanation = derp2.explanation;
		objectOfViewed[objectOfViewed.length] = objToKeep;
	};

	$("#previous-button").on('click', function() {
		if (objectOfViewed.length - counter < 0){
			alert("Your on the last image, click 'Next Image' to see more");
			return;
		}
		clearTimeout(myTimeout);
		var lastObject = objectOfViewed[objectOfViewed.length - counter];
		counter++;
		keepValues(lastObject);
	});

	$("#next-button").on('click', function() {
		clearTimeout(myTimeout);
		counter = 2;
		helloNASA();
	});

	$("#pause-button").on('click', function() {
		clearTimeout(myTimeout);
	});

	$("#next-button").hover(function(){
		
	});

	$("#previous-button").hover(function(){
		
	});

	$("#NASA-image").hover(function(){
        $("#description-div").show();
        }, function(){
        console.log("left the image box");
	});

	$("#center-me").hover(function() {
		$("#description-div").hide();
	});

	 // $("p").hover(function(){
  //       $(this).css("background-color", "yellow");
  //       }, function(){
  //       $(this).css("background-color", "pink");
  //   });

helloNASA();
});


// var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
// var planetEs = [];

// var letterE = planets.filter(function(planet){
// 	var addToEArray = filterMe(planet);
// 	console.log("letterE Array ", planetEs);
//   	return;
// });

// function filterMe (eachplanet) {
// 	var arrayOfLetters = eachplanet.split("");
// 	var doIHaveAnE = arrayOfLetters.indexOf("e");
// 	if (doIHaveAnE !== -1) {
// 		planetEs.push(eachplanet);
// 	}
// }



