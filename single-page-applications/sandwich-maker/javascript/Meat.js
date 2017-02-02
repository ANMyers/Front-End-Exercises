"use strict";

var SandwichMaker = (function(original) {
	
	var meats = {
		balogna: 0.50,
		turkey: 0.30
	}
	
	SandwichMaker.getMeat = function(meat) {
		var price = meats[meat];
		return price;
	}

  return original;

})(SandwichMaker || {});