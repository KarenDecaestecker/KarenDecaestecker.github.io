const setup = () => {

    document.querySelectorAll("li");
    for(var i =0; i < items.length; i++){
        items[i].setAttribute("class", "listItem")
    }

    const style1 = document.createElement("style");
    style.textContent = `.listitem { color: red; }`;

    let myPic= document.createElement('img');
    myPic.setAttribute("src", 'https://variety.com/wp-content/uploads/2023/06/GettyImages-1492597597.jpg', )

}
window.addEventListener("load", setup);
