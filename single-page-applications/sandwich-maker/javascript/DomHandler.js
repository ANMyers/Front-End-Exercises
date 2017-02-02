"use strict";

var SandwichMaker = (function(original) {
	
	var meatCheck = document.getElementById("meat");
	var veggieCheck = document.getElementById("veggie");
	var breadCheck = document.getElementById("bread");
	var cheeseCheck = document.getElementById("cheese");
	var condimentCheck = document.getElementById("condiment");

	meatCheck.addEventListener('change', function(){
		if (event.target.checked === true) {
			SandwichMaker.addTopping(SandwichMaker.getMeat, event.target.name);
		} else {
			SandwichMaker.removeTopping(SandwichMaker.getMeat, event.target.name);
		}
	})

	veggieCheck.addEventListener('change', function(){
		if (event.target.checked === true) {
			SandwichMaker.addTopping(SandwichMaker.getVeggie, event.target.name);
		} else {
			SandwichMaker.removeTopping(SandwichMaker.getVeggie, event.target.name);
		}
	})

	breadCheck.addEventListener('change', function(){
		if (event.target.checked === true) {
			SandwichMaker.addTopping(SandwichMaker.getBread, event.target.name);
		} else {
			SandwichMaker.removeTopping(SandwichMaker.getBread, event.target.name);
		}
	})

	cheeseCheck.addEventListener('change', function(){
		if (event.target.checked === true) {
			SandwichMaker.addTopping(SandwichMaker.getCheese, event.target.name);
		} else {
			SandwichMaker.removeTopping(SandwichMaker.getCheese, event.target.name);
		}
	})

	condimentCheck.addEventListener('change', function(){
		if (event.target.checked === true) {
			SandwichMaker.addTopping(SandwichMaker.getCondiment, event.target.name);
		} else {
			SandwichMaker.removeTopping(SandwichMaker.getCondiment, event.target.name);
		}
	})

  return original;

})(SandwichMaker || {});