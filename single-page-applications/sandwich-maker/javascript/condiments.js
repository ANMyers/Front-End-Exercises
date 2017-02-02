"use strict";

var SandwichMaker = (function(original) {
	
	var condiments = {
		"honey-mustard": 0.20, 
		ranch: 0.15
	}


	SandwichMaker.getCondiment = function(condiment) {
		var price = condiments[condiment];
		return price;
	}

  return original;

})(SandwichMaker || {});