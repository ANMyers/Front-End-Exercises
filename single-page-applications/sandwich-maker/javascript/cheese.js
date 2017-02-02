"use strict";

var SandwichMaker = (function(original) {
	
	var cheeses = {
		american: 0.20, 
		provalone: 0.15
	}


	SandwichMaker.getCheese = function(cheese) {
		var price = cheeses[cheese];
		return price;
	}

  return original;

})(SandwichMaker || {});