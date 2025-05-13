
    window.addEventListener("load", () => {
        const dragItem = document.getElementById("dragItem");
        const dropZone = document.getElementById("dropZone");

        dragItem.addEventListener("dragstart", e => { //wordt afgevuurd wanneer je het rode element versleept
            //Hier bewaar je de string "dragItem"
            // onder het MIME-type "text/plain" in het dataTransfer-object.
            e.dataTransfer.setData("text/plain", "dragItem"); //je gaat de naam van het verslepen elemnet in het datatransfered objectstoppen
        });

        dropZone.addEventListener("dragover", e => {
            e.preventDefault(); // zonder dit werkt drop niet
        });//bij het verplaatsen mag de browser geen handelingen nemen, je voor komt het met prevent MOET

        dropZone.addEventListener("drop", e => {//er wordt een drop event uitgevoerd als je het rode vierkantje in een div sleept
            e.preventDefault();
            const id = e.dataTransfer.getData("text/plain");//geef de string die aan jou wordt gegeven -> wordt je id
            const draggedElement = document.getElementById(id);// het element day je wil verplaatsen ga je hier bij houden (kan tekst zijn een image een variabele...)
            dropZone.appendChild(draggedElement);
        });
    });


