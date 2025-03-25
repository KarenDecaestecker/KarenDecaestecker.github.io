const setup = () => {
    let par =document.querySelectorAll("p")[0];
    let y = par.childNodes[0];
    par.removeChild(y);
    let newNode = document.createTextNode("Good Job!");
    par.appendChild(newNode);


}
window.addEventListener("load", setup);
