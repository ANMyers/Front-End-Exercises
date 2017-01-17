var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

// The number of loops to perform (what if the array changes?)
var loopCount = 5;

// Keep track of which band we're on in the loop
var currentBand = "";

// Keep track of which veggie we're on in the loop
var currentVeggie = "";

// Get a reference to the appropriate DOM element for bands
// var bandElement = document.getElementById(???);

// Get a reference to the appropriate DOM element for vegetables
// var veggieElement = ???;

// Start looping
// for (var loopTracker = 0; loopTracker < loopCount; loopTracker += 1) {

  // Add the band names into the correct <div>
  // currentBand = bands[loopTracker];


  // Add the veggie names into the correct <div>
  // currentVeggie = vegetables[loopTracker];

bandElement = document.getElementById("boy-bands");
vegetableElement = document.getElementById("vegetables");

for (var loopTracker = 0; loopTracker < loopCount; loopTracker += 1) {
	currentBand = bands[loopTracker];
	currentVeggie = vegetables[loopTracker];
	if (loopTracker === loopCount - 1) {
		bandElement.innerHTML += currentBand + ".";
		vegetableElement.innerHTML += currentVeggie + ".";
	} else if (loopTracker < loopCount) {
		bandElement.innerHTML += currentBand + "," + " ";
		vegetableElement.innerHTML += currentVeggie + "," + " ";
	}
}



















