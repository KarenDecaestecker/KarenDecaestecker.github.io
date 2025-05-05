const setup = () => {
    document.querySelector('button').addEventListener('click', function(){ //werkt!!!!!
        const invoer = document.querySelector('input').value.trim();
        const validprefixes = ['/'];

        if(!invoer.startsWith('/')){
            alert('Invalid Command');
            return;
        }
        const parts = invoer.split(' ');
        const prefix = parts[0];

        if (!validprefixes.includes(prefix)) {
            alert('Unknown command prefix');
            return;
        }
        console.log('Valid command:', invoer);
    });





/*const createCardAndAppend  = (title, commandosuffix, url) => {
    let col4 = createElementWithClassName("div", "col-4");
    let card = createElementWithClassName("div", "card");
    card.classList.add(title.toLowerCase()+" card");
    let cardBody = createElementWithlassName("div", "card-body");
    let cardTitle = createElementWithClassNameAndText("h5", "card-title", title);
    let cardText = createElementWithClassNameAndText("p", "card-title", commandosuffix);
    let linkGo = createLinkButton(url);
    linkGo.classList.add(title.toLowerCase()+"-button");
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(linkGo);
    card.appendChild(cardBody);
    col4.appendChild()
}
}*/
    const createCardAndAppend  = (title, commandosuffix, url) => {
        let col4 = createElementWithClassName("div", "col-4");
        let card = createElementWithClassName("div", "card");
        card.classList.add(title.toLowerCase()+" card");

        let cardBody = createElementWithClassName("div", "card-body");
        let cardTitle = createElementWithClassNameAndText("h5", "card-title", title);
        let cardText = createElementWithClassNameAndText("p", "card-text", commandosuffix);
        let linkGo = createLinkButton(url);

        linkGo.classList.add(title.toLowerCase()+"-button");
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        cardBody.appendChild(linkGo);
        card.appendChild(cardBody);
        col4.appendChild(card); // **Fix: kaart correct toevoegen**

        // **Fix: kaart toevoegen aan de pagina**
        document.querySelector("#cardContainer").appendChild(col4);
    }

    const voerCommandoUit = () =>{
    let txtCommandoInput = document.getElementById("txtCommando");
    let command = txtCommandoInput.value;

    let regex = command.match("\/[a-z]{1}[a-z]*");
    if(regex != null){} else {
        let commandPrefix = command.slice(0, 2);
        if (CommandPrefix = command.slice(3)) ;
    }else if (commandPrefix === '/x'){
//append voor de kaarten op te zoeken
    }
}

const createLinkButton = (url) => {
    let linkGo = document.createElement("a");
    linkGo.setAttribute("href", url);
    linkGo.setAttribute("target", "blank");
    linkGo.setAttribute("class", "btn btn-primary");
    linkGo.appendChild(document.createTextNode("Go!"));
}

const createElementWithClassname = (element, className) =>{
    let e = document.createElement(element);
    e.setAttribute("class", className);
    return e;
};
const createElementWithClassNameAndText = (element, className, text) => {
    let e = createElementWithClassname(element, className);
    e.textContent = text;
    return e;
};

const google = (commandoSuffix) => {
    let url = "" + commandoSuffix;
    window.open(url, 'blank');
    createCardAndAppend("Google", commandoSuffix, url);

    const saveLocalStorage = (title, commandoSuffix, url) => {
        let lsHistory;
        let historyObject = {
            title: title,
            text: commandoSuffix,
            url: url
        };
        lsHistory = JSON.parse(localStorage.getItem("vives.be.history"));
        if (!lsHistory) {
            lsHistory = [];
        }
        lsHistory.push(historyObject);
        localStorage.setItem("vives.be.history", JSON.stringify(history));
    }
}
};









const createCardAndAppend = (title, commandoSuffix, url) => {
    let col4 = createElementWithClassName("div","col-4");
    let card = createElementWithClassName("div","card");
    card.classList.add(title.toLowerCase()+"-card");
    let cardBody = createElementWithClassName("div","card-body");
    let cardTitle = createElementWithClassNameAndText("h5",
        "card-title", title);
    let cardText = createElementWithClassNameAndText("p",
        "card-text", commandoSuffix);
    let linkGo = createLinkButton(url);
    linkGo.classList.add(title.toLowerCase()+"-button");
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(linkGo);
    card.appendChild(cardBody);
    col4.appendChild(card);

    let row = document.querySelector("#resultContainer > .row");
    row.appendChild(col4);
};





const createElementWithClassName = (element, className) => {
    let e = document.createElement(element);
    e.setAttribute("class", className);
    return e;
};


const createElementWithClassNameAndText = (element, className, text) => {
    let e = createElementWithClassName(element, className);
    e.appendChild(document.createTextNode(text));
    return e;
};
window.addEventListener("load", setup);
