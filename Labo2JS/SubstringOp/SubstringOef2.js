const setup = () => {
    document.getElementById("inputText").addEventListener("input", SubstringVernieuwen);
    document.getElementById("startIndex").addEventListener("input", SubstringVernieuwen);
    document.getElementById("endIndex").addEventListener("input", SubstringVernieuwen);
    SubstringVernieuwen();
}
window.addEventListener("load", setup);
document.addEventListener("DOMContentLoaded", function () {
function SubstringVernieuwen() {
    let invoer = document.getElementById("invoer").value;
    let start = parseInt(document.getElementById("start").value);
    let einde = parseInt(document.getElementById("einde").value);
}}
    if (!isNaN(start) && !isNaN(einde) && start >= 0 && einde > start && start < invoer.length) {
        document.getElementById("output").textContent = invoer.substring(start, einde);
    } else {
        document.getElementById("output").textContent = "(geen output)";
    }
}