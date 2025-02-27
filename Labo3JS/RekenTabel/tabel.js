const setup = () => {
    const prijzen = document.getElementsByClassName("prijs");
    const aantallen = document.getElementsByClassName("aantal");
    const btwTotaal = document.getElementsByClassName("btw");
    const subtotalen = document.getElementsByClassName("subtotaal");
    const totaal = document.getElementById('totaal');
    const herberekenbtn = document.getElementById("hereberkenknop");

    herberekenbtn.addEventListener("click", () => {
        let totaalBedrag = 0;

        for (let i = 0; i < prijzen.length; i++) {
            let prijs = parseFloat(prijzen[i].textContent.replace(" Eur",""));
            let btw = parseFloat(btwTotaal[i].textContent.replace("%",""));
            let aantal = parseInt(aantallen[i].value);
            let subtotaal = aantal * prijs * (1 + (btw /100));
            subtotalen[i].textContent = subtotaal.toFixed(2) + " Eur";

            totaalBedrag +=subtotaal;
        }
        totaal.textContent = totaalBedrag.toFixed(2) + " Eur";
    });
}
window.addEventListener("load", setup);
