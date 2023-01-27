
function converter() {
	var num = document.getElementById("inputAmt").value;
	var from = document.getElementById("From").value;
	var to = document.getElementById("To").value;

// Symbol for currency
	var symbol = "";
	if (to == "EUR") 
		symbol = "€";
	else
		symbol = "$";

// Holds the converted number
	var convertedNum = 0;
	var ratio = "";

// if converting from and to the same currency 
	if (from == to) {
		convertedNum = num;
		ratio = "(1:1)";
	}

// ALL CURRENCY VALUES TAKEN ON JUNE 29th 2021 5PM
	else if (to == "EUR") {
		switch(from) {
			case "USD": convertedNum = num / 1.19; ratio = "(1:1.19)";
			break;
			case "CAD": convertedNum = num / 1.48; ratio = "(1:1.48)";
			break;
			case "Bitcoin": convertedNum = num / 0.00003305218; ratio = "(1:0.00003305)";
			break;
			case "Etherium": convertedNum = num / 0.00055; ratio = "(1:0.00055)";
			break;
		}
	}

	else if (to == "USD") {
		switch(from) {
			case "EUR": convertedNum = num / 0.84; ratio = "(1:0.84)";
			break;
			case "CAD": convertedNum = num / 1.24; ratio = "(1:1.24)";
			break;
			case "Bitcoin": convertedNum = num / 0.000028; ratio = "(1:0.000028)";
			break;
			case "Etherium": convertedNum = num / 0.00046; ratio = "(1:0.00046)";
			break;
		}
	}
	
	else if (to == "CAD") {
		switch(from) {
			case "EUR": convertedNum = num / 0.675675; ratio = "(1:0.676)";
			break;
			case "USD": convertedNum = num / 0.806; ratio = "(1:0.806)";
			break;
			case "Bitcoin": convertedNum = num / 0.000022; ratio = "(1:0.000022)";
			break;
			case "Etherium": convertedNum = num / 0.00037; ratio = "(1:0.00037)";
			break;
		}
	}

	else if (to == "Bitcoin") {
		switch(from) {
			case "EUR": convertedNum = num * 0.00003305218; ratio = "(1:30,255)";
			break;
			case "USD": convertedNum = num * 0.000028; ratio = "(1:35,714)";
			break;
			case "CAD": convertedNum = num * 0.000022; ratio = "(1:45,455)";
			break;
			case "Etherium": convertedNum = num * 0.060864; ratio = "(1:16.43)";
			break;
		}
	}

	else if (to == "Etherium") {
		switch(from) {
			case "EUR": convertedNum = num * 0.00055; ratio = "(1:1,818)";
			break;
			case "USD": convertedNum = num * 0.00046; ratio = "(1:2,174)";
			break;
			case "CAD": convertedNum = num * 0.00037; ratio = "(1:2,702)";
			break;
			case "Bitcoin": convertedNum = num * 16.43; ratio = "(1:0.06086)";
			break;
		}
	}

	convertedNum = parseFloat(convertedNum).toFixed(2);
	document.getElementById("outputAmt").innerHTML = symbol + convertedNum + " " + to;
	document.getElementById("ratio").innerHTML = ratio;
}
