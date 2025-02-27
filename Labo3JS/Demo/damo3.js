
const setup = () => {
    let btnTry = document.getElementById("btnTry");

    // Event-based programming
    btnTry.addEventListener("mouseover", mouseHover);
    btnTry.addEventListener("click", onClick);
    btnTry.addEventListener("mouseout", mouseOut);

    // eventListeners CSS
    document.getElementById("btnWithoutBullets")
        .addEventListener("click", withoutBullets);

    document.getElementById("btnWithBullets")
        .addEventListener("click", withBullets);

    //eventListeners difference between "textContent" and "innerHTML"

    document.getElementById("btnContent")
        .addEventListener("click", changeContent);

// mouseHoverFunction
    const mouseHover = () => {
        document.getElementById("event").innerHTML += "Mouse Hovered!<br>";

    }

// onClickFunction
    const onClick = () => {
        document.getElementById("event").innerHTML += "Mouse Clicked!<br>";
    }

// mouseOutFunction

    const mouseOut = () => {
        document.getElementById("event").innerHTML += "Mouse Out!<br>";
    }

    const withoutBullets = () => {
        let listItems = document.getElementsByTagName("li");
        for (let i = 0; i < listItems.length; i++)
        { //1ste manier
          /*  ListItems[i].style.listStyle = "none";
            ListItems[i].style.background= "red";*/
            listItems[i].className = "ListItemsStyleNone colorRed";


    /*const withBullets = () => {
        let listItems = document.getElementsByTagName("li");
        for (let i = 0; i < listItems.length; i++){
            listItems[i].style.listStyle = "disc";
            listItems[i].style.background= "white";
        }
    }*/
            /*let listItems = document.getElementsByTagName("li");
            for (let i = 0; i < listItems.length; i++){
                listItems[i].className = "ListItemsStyleNone colorWhite";
            }*/
//derde manier
            listItems[i].classList.remove("listItemsStyleDisc");
            listItems[i].classList.remove("colorWhite");
            listItems[i].classList.add("listItemsStyleNone");
            listItems[i].classList.add("colorRed");
            console.log("output" + listItems[i].className)



            // difference between "textContent" and "innerHTML"
            const changeContent = () => {
                document.getElementById("textContent")
                    .textContent ="<a href='https://www.vives.be'>VIVES</a>";
                document.getElementById("innerHTML")
                    .innerHTML ="<a href='https://www.vives.be'>VIVES</a>";
            }


            window.addEventListener("load", setup);

        }}}
