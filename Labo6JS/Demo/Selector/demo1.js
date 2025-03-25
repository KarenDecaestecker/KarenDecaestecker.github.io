const setup = () => {
    let lstparDiv = document.querySelector("#myDIV > .color");

    for(let i=0; i<lstparDiv.length; i++) {
        lstparDiv[i].addEventListener('click', changeDiv);
        const changeDiv = (e) => {
            e.target.className = "colorParDiv";
        }
    }
}
window.addEventListener("load", setup);
