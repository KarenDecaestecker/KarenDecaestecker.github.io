const setup = () => {
    let txtZin=document.getElementById("txtTekst");
    let zin = txtZin.value;
    let txtZoekWoord= document.getElementById("txtZoekWoord");
    let zoekWoord= txtZoekWoord.value;
    let txtTel= document.getElementById("txtTel");

    let tel= telVoorkomens(zin, zoekWoord);
    txtAantal.textContent = tel;
};
const telVoorkomens= (zin,ZoekWoord)=> {
    let result= 0;
    let idx= zin.indexOf(zoekWoord);
    while(idx!=-1){
        result++;
        idx= tekst.indexOf(zoekWoord, idx + zoekWoord.length);
    }
    return result
}
window.addEventListener("load", setup);
