const setup = () => {
    let btnLo = document.getElementById('btnLo');
    btnLo.addEventListener('click', opConsoleTonen);
};
const opConsoleTonen = () => {
    let btnLo = document.getElementById('geschreven');
    let zin= geschreven.value;
    let spaties= extraSpaties(zin);
    console.log(spaties);
};
const extraSpaties = (geschreven) => {
    let result="";

    for(let i=0;i<geschreven.length;i++){
        result+= geschreven.charAt(i);
        result+=" ";}
    return result;
}
window.addEventListener("load", setup);
