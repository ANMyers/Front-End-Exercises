"use strict";

var SandwichMaker = (function(original) {
	
	var veggies = {
		lettuce: 0.10,
		olives: 0.05
	}
	
	
	SandwichMaker.getVeggie = function(veggie) {
		var price = veggies[veggie];
		return price;
	}

  return original;

})(SandwichMaker || {});