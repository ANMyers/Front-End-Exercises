"use strict";

var categoryObject;
var typesArray = [];
var productArray = [];

function loadCategories() {
	return new Promise((resolve, reject) => {
		$("#fill-me").empty();
		$("#fill-me").addClass("fill-me");

		var catObj = $.ajax({url: "json/categories.json", success: printAccordingly, error: reject});
	
		function printAccordingly(catObject) {
			let category = $("#category-pick").val();
			for (var i = 0; i < catObject.categories.length; i++) {
				if (catObject.categories[i].name === category) {
					categoryObject = catObject.categories[i];
					let putToHtml = `<div class="row category" id="type-fill">
										<legend class="text-center">${catObject.categories[i].name}</legend>
										</div>`;
					$("#fill-me").append(putToHtml);
				}
			}
		resolve();
		}
	})

}

let loadTypes = () => {
	return new Promise((resolve, reject) => {
		typesArray = [];
		var typeObj = $.ajax({url: "json/types.json", success: printTypes, error: reject});
		function printTypes(typeObject) {
			for (var i = 0; i < typeObject.types.length; i++) {
				if (typeObject.types[i].id === categoryObject.id) {
					typesArray.push(typeObject.types[i]);
					let printInCat = `<div class="col-xs-4 type" id="type${typeObject.types[i].category}">
										<h4 class="text-center">${typeObject.types[i].name}</h4>
									</div>`;
					$("#type-fill").append(printInCat);
				}
			}
		resolve();
		}
	})

}

let loadProducts = () => {
	return new Promise((resolve, reject) => {
		productArray = [];
		var productObj = $.ajax({url: "json/products.json", success: printProducts, error: reject});
		function printProducts(productObject) {
			var products = productObject.products[0];

			for (var i = 0; i < typesArray.length; i++) {

				for (var name in products) {
					var UnOrdList = document.createElement("UL");
					UnOrdList.classList.add("list-of-products");
					if (typesArray[i].category === products[name].type) {
						var id = products[name].type;
						var findMe = String("type" + id)
						var divToInput = document.getElementById(findMe);
							let HereGoesNothing = 	`<li><p class="name">${products[name].name}:</p></li>
													<li><p>${products[name].description}</p></li>`;
						UnOrdList.innerHTML += HereGoesNothing;
						divToInput.appendChild(UnOrdList);
					}
				}
			}
		resolve();
		}
	})
}

$("#category-pick").on('change', function() {
	loadCategories().then(loadTypes, console.error).then(loadProducts, console.error);
})



//loadCategories().then(loadTypes, console.error).then(loadProducts, console.error)







