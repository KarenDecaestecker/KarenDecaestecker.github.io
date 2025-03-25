const Create = () => {
    let para = document.createElement("p");
};

const setup = () => {
    document.getElementById("btnCreate")
        .addEventListener("click", Create);
};

window.addEventListener("load", setup);
 3