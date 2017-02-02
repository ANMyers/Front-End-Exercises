"use strict";

var SandwichMaker = (function(original) {
	
	var currentPrice = 0;

	return {
		addTopping: function(passMe, topping) {
			var priceToAdd = passMe(topping);
			currentPrice = (Number(currentPrice) + priceToAdd).toFixed(2);
			document.getElementById("output").innerHTML = currentPrice;
		},
		removeTopping: function(potato, topping) {
			var priceToRemove = potato(topping);
			currentPrice = (Number(currentPrice) - priceToRemove).toFixed(2);
			document.getElementById("output").innerHTML = currentPrice;
		}
	}

})(SandwichMaker || {});