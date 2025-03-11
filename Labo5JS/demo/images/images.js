const setup = () => {
    document.getElementById("imgPhoto").addEventListener("mouseover",change)
}
const change = () => {
    let photo = document.getElementById("imgPhoto")
    photo.src = "https://m.media-amazon.com/images/I/81VxAGc1DBL.png";
    photo.alt = "Landscape";
    photo.ClassName = "sizePhoto";
    document.getElementById("txtText").innerHTML = 'Aesthetic';
}

window.addEventListener("load", setup);
