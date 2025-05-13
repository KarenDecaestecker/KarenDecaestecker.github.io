/*// Plaats alle benodigde Javascript code in dit bestand.
// Zorg ervoor dat je alle functionaliteit die in de opgave gevraagd wordt voorziet.*/


const toonFilms = () => {
    const movieList = document.getElementById("movielist");

    movies.forEach((movie) => {
        const movieDiv = createElement("div", "movie");
        const title = createElementandText("p", "title", movie.title);
        const image = createElementandText("img", "image", movie.imageUrl);
        image.src = movie.imageUrl;
        const description = createElementandText("p", "description", movie.description);

        const buttons = [];

        const likeButton = createIconButton("fas fa-thumbs-up", "unset likebutton", () => {
            likeCounts[movie.title]++;
            likeCountDisplay.textContent = `Likes: ${likeCounts[movie.title]}`;
        });

        const dislikeButton = createIconButton("fas fa-thumbs-down", "unset dislikebutton", () => {
            dislikeCounts[movie.title]++;
            dislikeCountDisplay.textContent = `Dislikes: ${dislikeCounts[movie.title]}`;
        });

        /*const likeButton = createIconButton("fas fa-thumbs-up", "unset likebutton", () => like(movie.title));
        likeButton.push(likeButton);

        const dislikeButton = createIconButton("fas fa-thumbs-down", "unset dislikebutton", () => dislike(movie.title));
        likeButton.push(dislikeButton);*/

        movieDiv.appendChild(title);
        movieDiv.appendChild(image);
        movieDiv.appendChild(description);


        movieDiv.appendChild(likeButton);
        movieDiv.appendChild(dislikeButton);

        movieList.appendChild(movieDiv);

    });


    const like = (movieTitle) => {
        if (!likeCounts[movieTitle]) {
            likeCounts[movieTitle] = 0;
        }
        likeCounts[movieTitle]++; // Increase the count

    };
    const likeCounts = {};
    const dislikeCounts = {};


};
/*
const createElement = (tag, className, textContent = "") => {
    const element = document.createElement(tag);

    return element;
};*/

const createElement = (element, className) => {
    let e = document.createElement(element);
    e.setAttribute("class", className);
    return e;
};


const createElementandText = (element, className, text) => {
    let e = createElement(element, className);
    e.appendChild(document.createTextNode(text));
    return e;
};
const createIconButton = (iconClass, buttonClass, onClick) => {
    const button = createElement("a", buttonClass);
    const icon = createElement("i", iconClass);
    button.appendChild(icon);
    button.addEventListener("click", onClick);
    return button;
};

document.addEventListener("DOMContentLoaded", toonFilms);
