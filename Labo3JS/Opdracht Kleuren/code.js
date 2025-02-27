/*const setup = () => {
	let colorDemos=document.getElementsByClassName("colorDemo");
	let sliders = document.getElementsByClassName("slider");


const update = () => {
	let sliders = document.getElementsByClassName("slider");
	let value=sliders[0].value;
	console.log("de waarde van de slider is momenteel : "+value);
}

// dit is de eerste regel code die uitgevoerd wordt,
// de bovenstaande functie declaraties introduceren
// enkel de functies en voeren ze niet uit natuurlijk.
//
// Onderstaande zorgt ervoor dat de setup functie wordt
// uitgevoerd zodra de DOM-tree klaar is.


];

for(let i = 0; i < sliders.length; i++){
	sliders[i].addEventListener("change", update);
	sliders[i].addEventListener("input", update);
}
update();
}*/


window.addEventListener("load", () => {
	const sliders = {
		red: document.getElementById('sldRed'),
		green: document.getElementById("sldGreen"),
		blue: document.getElementById("sldBlue")
}
	const cijfertjes = {
		red: document.getElementById("lblRed"),
		green: document.getElementById("lblGreen"),
		blue: document.getElementById("lblBlue")
	}
	let swatch = document.getElementById("swatch");

	/*const update = () => {
		let red = document.getElementById("sldRed").value;
		let green = document.getElementById("sldGreen").value;
		let blue = document.getElementById("sldBlue").value;*/


	const updateColor = () => {
		let red = sliders.red.value;
		let green = sliders.green.value;
		let blue = sliders.blue.value;

		cijfertjes.red.textContent = red;
		cijfertjes.green.textContent = green;
		cijfertjes.blue.textContent = blue;

        swatch.style.backgroundColor = `rgb(${red},${green},${blue})`;
	};
	
// we moeten zowel op het input als het change event reageren,
// zie http://stackoverflow.com/questions/18544890
	Object.values(sliders).forEach(slider => {
	slider.addEventListener("input", updateColor);
	slider.addEventListener("change", updateColor);
	});
	
updateColor();
});