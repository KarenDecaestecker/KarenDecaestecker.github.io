const setup = () => {


  let lblCursus = document.getElementById('lblCursus');
   /* lblCursus.className = "cursus";*/
    lblCursus.addEventListener("mouseover",change)
    let btnSend = document.getElementById('btnSend');
    btnSend.addEventListener("click", show);
}
const show = () => {
    let txtName = document.getElementById('txtName');

    if (txtName.value !== "")
    {alert("jouw naam is " + txtName.value);
        /*alert('jouw naam is ' + $(txtName.value));*/
    }
    else
    {
        alert("gelieve je naam in te vullen")
    }
}
window.addEventListener("load", setup);

const change = () => {
    let lblCursus = document.getElementById('lblCursus');
    lblCursus.className = "cursus";
}