const setup = () => {
    // Haal de knop en output-div op
    let btnToon = document.getElementById('btnToon');
    let outputDiv = document.createElement('div');
    outputDiv.id = "output";
    document.body.appendChild(outputDiv); // Voeg output-div toe aan de pagina

    btnToon.addEventListener("click", toonResultaat);
};

const toonResultaat = () => {
    let resultaat = [];

    // Checkbox controleren
    let isRoker = document.getElementById('chkIsRoker').checked;
    resultaat.push(`<p><strong>Is roker:</strong> ${isRoker ? "Ja" : "Nee"}</p>`);

    // Geselecteerde moedertaal vinden
    let moedertaal = document.querySelector('input[name="rbtMoedertaal"]:checked').nextElementSibling.innerText;
    resultaat.push(`<p><strong>Moedertaal:</strong> ${moedertaal}</p>`);

    // Favoriete buurland ophalen
    let favorieteBuurland = document.getElementById('selFavorieteBuurland').value;
    resultaat.push(`<p><strong>Favoriete buurland:</strong> ${favorieteBuurland}</p>`);

    // Meerdere geselecteerde bestellingen ophalen
    let bestellingSelect = document.getElementById('selBestelling');
    let geselecteerdeBestellingen = [];
    for (let optie of bestellingSelect.options) {
        if (optie.selected) {
            geselecteerdeBestellingen.push(optie.innerText);
        }
    }
    resultaat.push(`<p><strong>Bestelling:</strong> ${geselecteerdeBestellingen.join(', ') || "Geen"}</p>`);

    // Resultaat tonen in de output-div
    document.getElementById("output").innerHTML = resultaat.join('');
};

window.addEventListener("load", setup);
