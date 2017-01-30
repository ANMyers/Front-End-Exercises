$(document).ready(function() {
  $('select').material_select();
  });

var productsObject;
var departmentsObject;
var productsObjectArray = [];
var departmentsObjectArray = [];

var departmentSelect = document.getElementById("select-department");
var discountSelect = document.getElementById("select-discount");


var loadProductsNDepartments = (function () {

  var productsLoader = new XMLHttpRequest();
      
  productsLoader.addEventListener("load", function() {

    productsObject = JSON.parse(event.target.responseText);

    for (var i = 0; i < productsObject.products.length; i++) {
      productsObjectArray[i] = productsObject.products[i];
    }

    console.log("list of products?", productsObjectArray);

  })

  productsLoader.open("GET", "../json/products.json");
  productsLoader.send();


  var departmentsLoader = new XMLHttpRequest();
      
  departmentsLoader.addEventListener("load", function() {

    departmentsObject = JSON.parse(event.target.responseText);

    for (var i = 0; i < departmentsObject.categories.length; i++) {
      departmentsObjectArray[i] = departmentsObject.categories[i];
    }

    console.log("list of departments?", departmentsObjectArray);

  });

  departmentsLoader.open("GET", "../json/departments.json");
  departmentsLoader.send();


  function populateDiscounts(discount, selectedID) {
      getPrices = document.getElementsByClassName("price");
      stringID = String(selectedID);

      for (var i = 0; i < getPrices.length; i++) {
        currentPriceClass = getPrices[i];
        currentItemId = currentPriceClass.id;
        currentItemCatId = currentItemId.substring(0, 1);
        currentItemPrice = currentItemId.substring(2);
        if (currentItemCatId === stringID) {
          subtractMe = currentItemPrice * discount;
          newPrice = currentItemPrice - subtractMe;
          currentPriceClass.textContent = newPrice.toFixed(2);
        }
      }

    }

  function populateDepartment(department, selectedID) {
    
    var fillWithItems = document.getElementById(department + "-list");
    var createdLabel = document.createElement("LABEL");
    var createdUL = document.createElement("UL");

    fillWithItems.innerHTML = "";

    createdLabel.innerHTML = department;
    fillWithItems.appendChild(createdLabel);

    for (var i = 0; i < productsObjectArray.length; i++) {
      var currentObject = productsObjectArray[i];
      if (currentObject.category_id === selectedID) {
        var productName = currentObject.name;
        var productPrice = currentObject.price;

        var finishedList = 
          `<li class="product">
            ${productName}
          </li>
          <li class="price" id="${selectedID}-${productPrice}">
            ${productPrice}
          </li>`;
        fillWithItems.innerHTML += finishedList;
      }
    }
  }

  $(function() {
    populateDepartment("Apparel", 1);
    populateDepartment("Furniture", 2);
    populateDepartment("Household", 3);
  });

  return {

    departmentSelected: function () {
      var selectedDepartment = departmentSelect.value;
      var selectedID;

      for (var i = 0; i < departmentsObjectArray.length; i++) {
        var currentObject = departmentsObjectArray[i];
        if (currentObject.name === selectedDepartment) {
          selectedID = currentObject.id;
        }
      }

      populateDepartment(selectedDepartment, selectedID);
    },


    discountSelected: function() {
      if (departmentSelect.value === "") {
        alert("please select a department")
        return;
      }

      var selectedDepartment1 = departmentSelect.value;
      var selectedDiscount1 = discountSelect.value;

      for (var i = 0; i < departmentsObjectArray.length; i++) {
        var currentObject = departmentsObjectArray[i];
        if (currentObject.season_discount === selectedDiscount1) {
          var discountPercent = currentObject.discount;
        }
        if (currentObject.name === selectedDepartment1) {
          var selectedID = currentObject.id;
        }
      }

      populateDiscounts(discountPercent, selectedID);
    }


  }




})();