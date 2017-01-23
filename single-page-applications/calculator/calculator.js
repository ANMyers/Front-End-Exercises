
var addButton = document.getElementById("add-button");
var subtractButton = document.getElementById("subtract-button");
var multiplyButton = document.getElementById("multiply-button");
var divideButton = document.getElementById("divide-button");
var repeatButton = document.getElementById("repeat");
var lastAnswer;

function handOff(unicorn, daises, butterflies) {
	var pleaseReturn = butterflies(unicorn, daises)
	return pleaseReturn;
}

function inBetweenFunction () {
	var output = document.getElementById("output-answer");
	var firstNumber = Number(document.getElementById("input-firstValue").value);
	var secondNumber = Number(document.getElementById("input-secondValue").value);

	if (event.target.id === "add-button") {
		var outputMe = handOff(firstNumber, secondNumber, addMe);
		lastAnswer = outputMe;
	} else if (event.target.id === "subtract-button") {
		var outputMe = handOff(firstNumber, secondNumber, subtractMe);
		lastAnswer = outputMe;
	} else if (event.target.id === "multiply-button") {
		var outputMe = handOff(firstNumber, secondNumber, multiplyMe);
		lastAnswer = outputMe;
	} else if (event.target.id === "divide-button") {
		var outputMe = handOff(firstNumber, secondNumber, divideMe);
		lastAnswer = outputMe;
	}

	var removeLastFromMe = document.getElementsByTagName("p");
	 if (removeLastFromMe.length > 2) {
	 	removeLastFromMe[0].remove();
	 }

	var outputText = document.createTextNode(outputMe);
	var outputField = document.createElement("p");
	outputField.appendChild(outputText);
	output.appendChild(outputField);

}

function addMe (potato, tomato) {
	if (repeatButton.checked === true) {
		var repeated =  lastAnswer + tomato;
		return repeated;
	} else {
		var answer = potato + tomato;
		return answer;
	}
}

function subtractMe (onion, burrito) {
	if (repeatButton.checked === true) {
		var repeated = lastAnswer - burrito;
		return repeated;
	} else {
		var answer = onion - burrito;
		return answer;
	}
}

function multiplyMe (taco, hamburger) {
	if (repeatButton.checked === true) {
		var repeated = lastAnswer * hamburger;
		return repeated;
	} else {
		var answer = taco * hamburger;
		return answer;
	}
}

function divideMe (tv, laptop) {
	if (repeatButton.checked === true) {
		var repeated = lastAnswer / laptop;
		return repeated;
	} else {
		var answer = tv / laptop;
		return answer;
	}
}

addButton.addEventListener('click', inBetweenFunction);
subtractButton.addEventListener('click', inBetweenFunction);
multiplyButton.addEventListener('click', inBetweenFunction);
divideButton.addEventListener('click', inBetweenFunction);

////////////  Testing Three Parameters ////////////////////





