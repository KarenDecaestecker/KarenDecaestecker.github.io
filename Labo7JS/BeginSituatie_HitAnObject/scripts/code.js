
let global = {
    IMAGE_COUNT: 5, // aantal figuren
    IMAGE_SIZE: 48, // grootte van de figuur
    IMAGE_PATH_PREFIX: "images/", // map van de figuren
    IMAGE_PATH_SUFFIX: ".png", // extensie van de figuren
    MOVE_DELAY: 3000, // aantal milliseconden voor een nieuwe afbeelding verschijnt
    score: 0, // aantal hits
    timeoutId: 0 // id van de timeout timer, zodat we die kunnen annuleren
};

const setup = () => {

    console.log("Loaded");
    let playField = document.getElementById("playField");
    let startButton = document.getElementById("startButton");
    const imageElement = document.createElement("img");

    const getRandomPosition = () => {
        const maxX = 600 - global.IMAGE_SIZE;
        const maxY = 800 - global.IMAGE_SIZE;
        return {
            x: Math.floor(Math.random() * maxX),
            y: Math.floor(Math.random() * maxY)

            imageElement.src = `${global.IMAGE_PATH_PREFIX}${Math.floor(Math.random() * global.IMAGE_COUNT)}${global.IMAGE_PATH_SUFFIX}`;
            imageElement.style.left = `${x}px`;
            imageElement.style.top = `${y}px`;
        };


    };

    let placeNewImage = () => {
        const{ x,y } = getRandomPosition();

    }
    const startGame = () => {
        global.score = 0;
        placeNewImage();
        playField.appendChild(imageElement);
        global.timeout = setInterval(placeNewImage, global.MOVE_DELAY);
    };

    startButton.addEventListener("click", startGame);
};
}
window.addEventListener("load", setup);