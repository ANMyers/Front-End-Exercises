
function coinCounter () {

	var quartersPrint = document.getElementById("quarters-return");
	var dimesPrint = document.getElementById("dimes-return");
	var nickelsPrint = document.getElementById("nickels-return");
	var penniesPrint = document.getElementById("pennies-return");
	
	var initialValueString = document.getElementById("inputAmount").value;
	var initialValue = Number(initialValueString);

	var coinPurse = {};

	coinPurse.quarters = 0;
	coinPurse.dimes = 0;
	coinPurse.nickels = 0;
	coinPurse.pennies = 0;

	initialValue = initialValue * 100;

	var quarterCheck = Math.floor(initialValue / 25);
	coinPurse.quarters = quarterCheck;

	var dimeSetup = Math.floor(Number(initialValue % 25));
	var dimeCheck = Math.floor(dimeSetup / 10);
	coinPurse.dimes = dimeCheck;

	// console.log("dimeSetup: ", dimeSetup);

	var nickelSetup = Math.floor(Number(dimeSetup % 10));
	var nickelCheck = Math.floor(nickelSetup / 5);
	coinPurse.nickels = nickelCheck;

	var pennieSetup = Math.floor(Number(nickelSetup % 5));
	var pennieCheck = Math.floor(pennieSetup / 1);
	coinPurse.pennies = pennieCheck;

	console.log("Coin Purse", coinPurse);

	quartersPrint.innerHTML = coinPurse.quarters;
	dimesPrint.innerHTML = coinPurse.dimes;
	nickelsPrint.innerHTML = coinPurse.nickels;
	penniesPrint.innerHTML = coinPurse.pennies;


}

var clicker = document.getElementById("submit-button");
clicker.addEventListener('click', coinCounter);

// console.log("remainder test: ", (0.56 % 0.25).toFixed(2));










