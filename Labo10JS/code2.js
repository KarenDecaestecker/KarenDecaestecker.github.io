const setup = () => {
    document.querySelector('button').addEventListener('click', function() {
        const invoer = document.querySelector('input').value.trim();
        const validPrefixes = {
            "/g": "https://www.google.com/search?q=",
            "/y": "https://www.youtube.com/results?search_query=",
            "/x": "https://x.com/hashtag/",
            "/i": "https://www.instagram.com/explore/tags/"
        };

        if (!invoer.startsWith('/')) {
            alert('Invalid command');
            return;
        }

        const parts = invoer.split(' ');
        if (parts.length < 2) {
            alert('Command format incorrect. Provide a search term.');
            return;
        }

        const prefix = parts[0];
        const query = encodeURIComponent(parts.slice(1).join(' '));

        if (!validPrefixes.hasOwnProperty(prefix)) {
            alert('Unknown command prefix');
            return;
        }

        const url = validPrefixes[prefix] + query;
        window.open(url, '_blank');

        createCardAndAppend(prefix, query, url);
        saveLocalStorage(prefix, query, url);
    });

    loadHistory();
};

const createCardAndAppend = (title, commandSuffix, url) => {
    let col4 = createElementWithClassName("div", "col-4");
    let card = createElementWithClassName("div", "card");
    card.classList.add(title.slice(1) + "-card");

    let cardBody = createElementWithClassName("div", "card-body");
    let cardTitle = createElementWithClassNameAndText("h5", "card-title", title.slice(1));
    let cardText = createElementWithClassNameAndText("p", "card-text", commandSuffix);
    let linkGo = createLinkButton(url);

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(linkGo);
    card.appendChild(cardBody);
    col4.appendChild(card);

    document.querySelector("#cardContainer").appendChild(col4);
};

const createLinkButton = (url) => {
    let linkGo = document.createElement("a");
    linkGo.setAttribute("href", url);
    linkGo.setAttribute("target", "_blank");
    linkGo.setAttribute("class", "btn btn-primary");
    linkGo.appendChild(document.createTextNode("Go!"));
    return linkGo;
};

const createElementWithClassName = (element, className) => {
    let e = document.createElement(element);
    e.setAttribute("class", className);
    return e;
};

const createElementWithClassNameAndText = (element, className, text) => {
    let e = createElementWithClassName(element, className);
    e.textContent = text;
    return e;
};

const saveLocalStorage = (title, commandSuffix, url) => {
    let history = JSON.parse(localStorage.getItem("searchHistory")) || [];
    history.push({ title, text: commandSuffix, url });
    localStorage.setItem("searchHistory", JSON.stringify(history));
};

const loadHistory = () => {
    let history = JSON.parse(localStorage.getItem("searchHistory")) || [];
    history.forEach(entry => {
        createCardAndAppend(entry.title, entry.text, entry.url);
    });
};

window.addEventListener("load", setup);













