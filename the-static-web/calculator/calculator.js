
var addButton = document.getElementById("add-button");
var subtractButton = document.getElementById("subtract-button");
var multiplyButton = document.getElementById("multiply-button");
var divideButton = document.getElementById("divide-button");

function inBetweenFunction () {
	var output = document.getElementById("output-answer");
	var firstNumber = Number(document.getElementById("input-firstValue").value);
	var secondNumber = Number(document.getElementById("input-secondValue").value);

	if (event.target.id === "add-button") {
		var outputMe = addMe(firstNumber, secondNumber);
	} else if (event.target.id === "subtract-button") {
		var outputMe = subtractMe(firstNumber, secondNumber);
	} else if (event.target.id === "multiply-button") {
		var outputMe = multiplyMe(firstNumber, secondNumber);
	} else if (event.target.id === "divide-button") {
		var outputMe = divideMe(firstNumber, secondNumber);
	}

	var removeLastFromMe = document.getElementsByTagName("p");
	 if (removeLastFromMe.length > 2) {
	 	removeLastFromMe[0].remove();
	 }

	var outputText = document.createTextNode(outputMe);
	var outputField = document.createElement("p");
	outputField.appendChild(outputText);
	output.appendChild(outputField);

	console.log(removeLastFromMe);

}

function addMe (potato, tomato) {
	var answer = potato + tomato;
	return answer;
}

function subtractMe (onion, burrito) {
	var answer = onion - burrito;
	return answer;
}

function multiplyMe (taco, hamburger) {
	var answer = taco * hamburger;
	return answer;
}

function divideMe (tv, laptop) {
	var answer = tv / laptop;
	return answer;
}

addButton.addEventListener('click', inBetweenFunction);
subtractButton.addEventListener('click', inBetweenFunction);
multiplyButton.addEventListener('click', inBetweenFunction);
divideButton.addEventListener('click', inBetweenFunction);