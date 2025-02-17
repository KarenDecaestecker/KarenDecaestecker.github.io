const setup = () => {
    let familie = ["familielid1", "familielid2", "familielid3","familielid4","familielid5"];
    console.log(familie.length);
    for(let i = 0; i < familie.length; i=i+2) {
    console.log("familielid " + familie[i] );
    }


    const voegNaamToe = (leden) =>{
        let naam = prompt("voeg een naam toe");
        leden.push(naam);
    }
    voegNaamToe(familie);//pass-by-reference
    for (let i = 0; i < familie.length; i++) {
        console.log("familielid" + familie[i]); //pass-by-reference
    }
    console.log(familie.join(" - "));

}
window.addEventListener("load", setup);




