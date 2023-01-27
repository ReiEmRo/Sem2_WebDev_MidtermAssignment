
var counter = 1;

function change() {

	document.getElementById("slideshow").innerHTML = "<img src='img/img"+counter+".jpg' id='fadeBlock'/>";
	
	switch(counter) {
		case 1: document.getElementById("caption").innerHTML = "<figcaption>Great Canyon views.</figcaption>";
		break;
		case 2: document.getElementById("caption").innerHTML = "<figcaption>Overlook rivers on the mountaintops.</figcaption>";
		break;
		case 3: document.getElementById("caption").innerHTML = "<figcaption>Great city views.</figcaption>";
		break;
		case 4: document.getElementById("caption").innerHTML = "<figcaption>Hike through lush meadows.</figcaption>";
		break;
		case 5: document.getElementById("caption").innerHTML = "<figcaption>Kayaking in still waters.</figcaption>";
		break;
		case 6: document.getElementById("caption").innerHTML = "<figcaption>Pleasant boat rides in Venice.</figcaption>";
		break;
		case 7: document.getElementById("caption").innerHTML = "<figcaption>Beach trip with the family.</figcaption>";
		break;
		case 8: document.getElementById("caption").innerHTML = "<figcaption>Beautiful rivers cutting between buildings.</figcaption>";
		break;
		case 9: document.getElementById("caption").innerHTML = "<figcaption>Many photo opportunities.</figcaption>";
		break;
		case 10: document.getElementById("caption").innerHTML = "<figcaption>Relax and take a break.</figcaption>";
		this.counter = 0;
		break;
	}
	setTimeout('change()', 3000);
	counter++;
}