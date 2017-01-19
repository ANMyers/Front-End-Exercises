//////////// Variables ///////////////////

var outputDegrees = document.getElementById("convertedDegrees");
var convertButton = document.getElementById("submit-button");
var clearButton = document.getElementById("clear-button");
var inputField = document.getElementById("degreesToConvert");

//////////// Add Colors ///////////////////

function colorCelsius() {

	var celsiusTemp = Number(document.getElementById("convertedDegrees").value);

	if (celsiusTemp > 32) {
		document.getElementById("convertedDegrees").style.color="red";

	} else if (celsiusTemp < 0) {
		document.getElementById("convertedDegrees").style.color="blue";

	} else {
		document.getElementById("convertedDegrees").style.color="green";

	}
}

function colorFahrenheit() {
	var fehrenheitTemp = Number(document.getElementById("convertedDegrees").value);

	if (fehrenheitTemp > 90) {
		document.getElementById("convertedDegrees").style.color="red";

	} else if (fehrenheitTemp < 32) {
		document.getElementById("convertedDegrees").style.color="blue";

	} else {
		document.getElementById("convertedDegrees").style.color="green";

	}
}

//////////// Converts ///////////////////

function CeltoFahrenheit (potato) {

	celsiusTempConverted = (((potato * 9) / 5) + 32);
	outputDegrees.innerHTML = celsiusTempConverted;
	colorCelsius();

}

function FahtoCelsius (potato) {

	fehrenheitTempConverted = (((potato - 32) * 5) / 9);
	outputDegrees.innerHTML = fehrenheitTempConverted;
	colorFahrenheit();

}

//////////// Determines Conversion ///////////////////

function determineConverter () {

	var celsiusChecked = document.getElementById("Celsius").checked;
	var fahrenheitChecked = document.getElementById("Fahrenheit").checked;
	var TempInput = document.getElementById("degreesToConvert").value;

	if (TempInput === "") {
		alert("Please enter a degrees to be converted.")

	} else if (celsiusChecked === true) {
		CeltoFahrenheit(Number(TempInput));

	} else if (fahrenheitChecked === true) {
		FahtoCelsius(Number(TempInput));

	} else {
		alert("Please select either Celsius or Fahrenheit.");

	}
}

/////////// Clears Input ///////////////////

function clearInput () {
	var TempInputNum = document.getElementById("degreesToConvert").value;

	if (TempInputNum !== "") {
		document.getElementById("degreesToConvert").value = "";
	}
}

//////////// Event Listeners ///////////////////

convertButton.addEventListener("click", determineConverter);
clearButton.addEventListener("click", clearInput);
inputField.addEventListener('keyup', function (e) {
    if (e.which == 13) {
        determineConverter();
    }
});











