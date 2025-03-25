const setup = () => {
    const invoerTekst = document.getElementById('invoer');
    const invoer= addEventListener('drop', show);
    let invoer2= letterinvoer.value;
    };

    for(i = 0; i < letterinvoer.length; i++) {
    if(letterinvoer.value == " ") {
        let letter = letterinvoer.value;
        let output = "U moet iets invullen";
    }else{
        output = "Letter" + letter + "komt 1 keer voor in uw tekst";
    }
    let img =document.createElement('img');

    img= addEventListener('click',show );
    const show = () => {
        return img;

    }
}
window.addEventListener("load", setup);
