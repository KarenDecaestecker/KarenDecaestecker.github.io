const setup = () => {
    let myButton = document.getElementById('myButton');
    console.log(myButton.className);
    myButton.className= 'button secondary';
}
window.addEventListener("load", setup);
