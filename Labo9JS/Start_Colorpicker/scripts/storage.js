

const storeSliderValues= () => {
let red = document.getElementById("sldRed").value;
let blue = document.getElementById("sldBlue").value;
let green = document.getElementById("sldGreen").value;

    let rgb = {
        red: red,
        blue: blue,
        green: green
    };


/*let slidersbw = {};
let slidersJSON;


slidersbw.red = parseInt(document.getElementById("sldRed").value);
slidersbw.green = parseInt(document.getElementById("sldGreen").value);
slidersbw.blue = parseInt(document.getElementById("sldBlue").value);
*/


/*slidersJSON*/ let jsonText = JSON.stringify(rgb);
localStorage.setItem("Karen.settingsSliders", jsonText)
};

const restoreSliderValues = () => {
let slidersbw;
let jsonText = localStorage.getItem("Karen.settingsSliders");
    if(jsonText === undefined){
        slidersbw = {
            red : 0,
            green : 0,
            blue :0
        }
    }else{
        slidersbw = JSON.parse(jsonText);
    }

};

const storeSwatches = () => {
    let rgbColors = [];
    let swatches = document.getElementsByClassName("swatch");

    for (let i = 0; i < swatches.length; i++) {
        let rgb = {
            red: swatches[i].getAttribute("data-red"),
            green: swatches[i].getAttribute("data-green"),
            blue: swatches[i].getAttribute("data-blue")
        };
        rgbColors.push(rgb);
    }
    let jsonText = JSON.stringify(rgbColors);
    localStorage.setItem("Karen.settingsSwatches", jsonText);
    };

const restoreSwatches = () => {
jsonText = localStorage.getItem("Karen.settingsSwatches");
if(jsonText != null){
  let rgbColors = JSON.parse(jsonText)  ;
  for(let i = 0; i < rgbColors.length; i++){
      let rgb = rgbColors[i];
      addSwatchComponent(rgb.red, rgb.green, rgb.blue);
  }
}};
