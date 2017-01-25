





function showCarnivores (carnivores) {
	var carnDiv = document.getElementById("carnivores");
	var carnList = document.getElementById("carn-list");

	for (var i = 0; i < carnivores.length; i++) {
		var carn = carnivores[i];
		var carnName = document.createTextNode(String(carn));
		var createdLI = document.createElement("LI");
		createdLI.appendChild(carnName);
		carnList.appendChild(createdLI);
	}
}

function showHerbivores (herbivores) {
	var herbDiv = document.getElementById("herbivores");
	var herbList = document.getElementById("herb-list");

	for (var i = 0; i < herbivores.length; i++) {
		var herb = herbivores[i];
		var herbName = document.createTextNode(String(herb));
		var createdLI = document.createElement("LI");
		createdLI.appendChild(herbName);
		herbList.appendChild(createdLI);
	}
}

Predator.loadCarnivores(showCarnivores);
Predator.loadHerbivores(showHerbivores);



