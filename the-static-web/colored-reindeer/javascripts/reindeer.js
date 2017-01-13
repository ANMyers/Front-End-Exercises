var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];

var hohohoElement = document.getElementById("coloredReindeer");

var coloredDeer = [];

for (var j = 0; j < reindeer.length; j += 1) {
	var color = colors[j];
	var deerName = reindeer[j];

	if (coloredDeer[j] === coloredDeer[0]) {
		coloredDeer[j] = color + " " + deerName;
	} else {
		coloredDeer[j] = " " + color + " " + deerName;
	}
}

console.log("First Item", coloredDeer[0]);
console.log("colored names?", coloredDeer);

hohohoElement.innerHTML = coloredDeer