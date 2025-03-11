const setup = () => {
    let btnToon = document.getElementById("btnToon");
    btn.addEventListener("click", toonTrigrams);
};
    const toonTrigrams = () => {

        let word = document.getElementById('txtWord').value;
        getTrigrams(word);
    };
    const toonTrigrams = () => {
        let txtTekst = document.getElementById('txtTekst');
        let tekst = txtTekst.value;
        let lstTigrams = document.getElementById('lstTigrams');
        let trigrams = document.getElementById('triagrams');
        let output = "";
        for (let i = 0; i < trigram.length; i++) {
            output += "<li>" + trigrams[i] + "</li>";
        }
        lstTigrams.innerHTML = output;
    };
    const getTrigrams = (tekst)
        let result=[];
    let trigram;
        for (let i = 0; i < tekst.length -3; i++) {
          console.log(tekst.slice(i, i+3));
          result.push(trigram);
        }

    };

}

    let woord= "onoorbaar";


   /* console.log(woord.slice(0,3));
    console.log(woord.slice(1,4));
    console.log(woord.slice(2,5));
    console.log(woord.slice(3,6));
    console.log(woord.slice(4,7));
    console.log(woord.slice(5,8));
    console.log(woord.slice(6,9));*/
}


window.addEventListener("load", setup);
