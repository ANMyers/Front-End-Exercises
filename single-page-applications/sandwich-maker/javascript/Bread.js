"use strict";

var SandwichMaker = (function(original) {
	
	var breads = {
		white: 0.20, 
		wheat: 0.15
	}


	SandwichMaker.getBread = function(bread) {
		var price = breads[bread];
		return price;
	}

  return original;

})(SandwichMaker || {});