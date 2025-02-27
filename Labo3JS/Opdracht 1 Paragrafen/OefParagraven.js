const setup = () => {
    const paragraven = document.getElementsByClassName("belangerijk");
    for (let i = 0; i < paragraven.length; i++) {
        paragraven[i].className+=" opvallend";
    }

}
window.addEventListener("load", setup);
