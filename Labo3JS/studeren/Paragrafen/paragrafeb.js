const setup = () => {
    const alinea = document.getElementsByClassName("belangerijke");

    for(let i = 0;i <alinea.length; i++){
        alinea[i].className += " opvallend";
}

}
window.addEventListener("load", setup);
