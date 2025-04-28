

const storeSliderValues = () => {
    // lees de waarden vd sliders af
    let red = document.getElementById("sldRed").value;
    let green = document.getElementById("sldGreen").value;
    let blue = document.getElementById("sldBlue").value;

    let rgb = {
        // stopt ze in een object
        red: red,
        green: green,
        blue: blue
    };


    // bewaar dit object in local storage

    let jsonText = JSON.stringify(rgb);
    localStorage.setItem("VIVES.be.colorpicker.sliders", jsonText);


};

const restoreSliderValues = () => {

    let jsonText = localStorage.getItem("VIVES.be.colorpicker.sliders");

    if (jsonText) {
        let values = JSON.parse(jsonText);

        // Zet de sliderwaarden terug op basis van de opgeslagen waarden
        document.getElementById("sldRed").value = values.red;
        document.getElementById("sldGreen").value = values.green;
        document.getElementById("sldBlue").value = values.blue;
    }

};

const storeSwatches = () => {
    // bouw een array met kleurinfo objecten
    let swatches = document.getElementsByClassName("swatch");
    let rgbColors = [];  // Declareer de rgbColors array hier

    for (let i = 0; i < swatches.length; i++) {
        let swatch = swatches[i];

        let red = swatch.getAttribute("data-red");
        let green = swatch.getAttribute("data-green");
        let blue = swatch.getAttribute("data-blue");

        // Zorg ervoor dat de kleuren bestaan voordat je ze toevoegt
        if (red && green && blue) {
            let rgb = {
                red: red,
                green: green,
                blue: blue
            };
            rgbColors.push(rgb);
        }
    }

    // Zet de array met kleuren in localStorage
    let jsonText = JSON.stringify(rgbColors);
    localStorage.setItem("VIVES.be.colorpicker.swatches", jsonText);
};

const restoreSwatches = () => {
    jsonText = localStorage.getItem("VIVES.be.colorpicker.swatches");
    if(jsonText != null) {
        let rgbColors = JSON.parse(jsonText);
        for (let i = 0; i < rgbColors.length; i++) {
            //voeg voor elke bewaarde kleur een swatch toe
            let rgb = rgbColors[i];
            addSwatchComponent(rgb.red, rgb.green, rgb.blue);
        }
    }

};
