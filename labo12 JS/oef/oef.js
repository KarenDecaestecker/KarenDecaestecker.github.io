let tasks = [];

const setup = () => {
    loadTasks();
    renderTasks();
    setupEventListeners();
};

const loadTasks = () => {
    const saved = localStorage.getItem('VIVES-TODO');
    if (saved) tasks = JSON.parse(saved);
};

const setupEventListeners = () => {
    document.getElementById('btnToDo').addEventListener('click', handleForm);

    document.querySelectorAll('.column').forEach(col => {
        const status = col.dataset.status;
        //Het dragover-event wordt geactiveerd wanneer een gesleept element over een geldig dropgebied beweegt
        //Zonder het dragover-event kunnen we het drop-event niet uitvoeren. Dit is omdat de standaard browseractie voor
        // het dragover-event niet toestaat dat de gebruiker iets daadwerkelijk "dropt".
        //Om de drop-actie toe te staan, moet je e.preventDefault() aanroepen in de dragover-event handler. H
        // ierdoor wordt de standaard browseractie (die het droppen verhindert) voorkomen.
        //Wanneer een gebeurtenis (zoals click, submit, dragover, enz.) plaatsvindt, heeft de browser daar vaak een standaardgedrag aan gekoppeld.
        // Soms wil je dat standaardgedrag overschrijven — dan gebruik je preventDefault().
        col.addEventListener('dragover', e => e.preventDefault());
        col.addEventListener('drop', e => handleDrop(e, status));
    });
};


/*function maakTask() {
    const input = document.getElementById("task1");
    const task = document.createElement("div");
    task.className = "card";
    task.textContent = input;
    document.getElementById("cardContainer").appendChild(card);


}*/
    const handleForm = () => {
        const title = document.getElementById('title').value.trim();
        const description = document.getElementById('description').value.trim();
        const task = {
            title: title,
            description: description,
            createdAt: new Date().toLocaleString(),
            status: 'todo'};

        tasks.push(task);
        saveAndRender();
        
    };

    const saveAndRender = () => {
        localStorage.setItem("Vives Todo", JSON.stringify(tasks));

        renderTasks();
    };

   /* taken
        .forEach(task => {
        const taskDiv = document.createElement('div');
        taskDiv.
        }*/

    const renderTasks = () => {
        document.getElementById('todo').innerHTML = '';
        document.getElementById('inprogress').innerHTML = '';
        document.getElementById('done').innerHTML = '';

    }


/*window.addEventListener("load", setup);
geef eens de datattribute, status*/