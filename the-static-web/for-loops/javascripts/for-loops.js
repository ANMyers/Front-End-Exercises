for (var i = 0; i <= 120; i += 10) {
	console.log("addtion value", i);
}

for (var j = 4096; j >= 1; j = j / 2) {
	console.log("division value", j);
}

var americanPres = [
	"George Washington", 
	"John Adams", 
	"Thomas Jefferson",
]

for (var k = 0; k < americanPres.length; k += 1) {
	console.log("President", americanPres[k]);
}

var antSpecies = {
	argentine: {},
	army: {},
	bigHeaded: {},
	black: {},
	bull: {},
	carpenter: {},
	crazy: {},
	fire: {},
	glider: {},
	honeyPot: {},
	jackJumpers: {}
}

for (var name in antSpecies) {
	console.log("Species:", name);
}