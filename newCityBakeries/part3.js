
function sheetChosen() {
	document.getElementById("fields").style.display = "inline";
	document.getElementById("length").disabled = false;
	document.getElementById("width").disabled = false;
	document.getElementById("radius").disabled = true;
}

function roundChosen() {
	document.getElementById("fields").style.display = "inline";
	document.getElementById("radius").disabled = false;
	document.getElementById("length").disabled = true;
	document.getElementById("width").disabled = true;
}

function calcTotal() {
	var chosen = document.querySelector("input[name=cake]:checked").value;
	var layers = document.getElementById("layers").value;
	var basePrice = 0;
	var area = 0;
	var total = 0;
	var order = "";

	if (chosen == "Sheet") {
		basePrice = 18;
		area = (document.getElementById("length").value * document.getElementById("width").value) - 900;
		order += "<table><tr><td> Sheet cake " + document.getElementById("length").value + "cm length and " + 
		document.getElementById("width").value + "cm width with " + layers + " layers: </td>";
	}
	else {
		basePrice = 15;
		area = Math.ceil(3.14 * Math.pow(document.getElementById("radius").value, 2)) - 707;
		order += "<table><tr><td> Round cake " + document.getElementById("radius").value + 
		"cm with " + layers + " layers: </td>";
	}

	if (layers > 1) {
		total += (basePrice + (area * 0.02)) * (1 + ((layers - 1) * 0.5));
		order += "<td>$" + total.toFixed(2) + "</td></tr>";
	}
	else {
		total += basePrice + (area * 0.02);
		order += "<td>$" + total.toFixed(2) + "</td></tr>";
	}

	if(document.querySelector("input[name=creamCheese]:checked")){
		order += "<tr><td>Cream cheese icing</td><td>$5</td></tr>";
		total += 5;
	}
	if(document.querySelector("input[name=fruitAndAlmonds]:checked")){
		order += "<tr><td>Fruit and Almond toppings</td><td>$7</td></tr>";
		total += 7;
	}
	if(document.querySelector("input[name=jamFilling]:checked")){
		order += "<tr><td>Fruit Jam filling</td><td>$4</td></tr>";
		total += 4;
	}
	
	order += "<tr><td>Total: </td><td>$" + total.toFixed(2) + "</td></tr></table>";
	document.getElementById("output").style.display = "inline";

	document.getElementById("output").innerHTML = "<br><hr>" + 
		document.getElementById("fname").value + " " + document.getElementById("lname").value + "<br>" + 
		document.getElementById("address").value + "<br>" + 
		document.getElementById("postCode").value + "<br>" +
		document.getElementById("phoneNum").value + "<br>" +
		document.getElementById("email").value + "<br>" + "<br>" + "Your order: " + "<br>" + "<br>";

	document.getElementById("output").innerHTML += order;
}