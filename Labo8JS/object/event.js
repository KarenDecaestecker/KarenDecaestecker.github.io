const setup = () => {
    console.log("setup");
    let evenementen = {
        naam: "Codeer Workshop Javascript",
        datum: new Date(2025, 3, 15), // 15 april 2025
        locatie: "Kortrijk",
        deelnemers: ["John", "Maria", "Ahmed", "Sophie"],
    };
    evenementInfo(evenementen);

    const evenementInfo = (event) =>{

        console.log("Naam: " + evenementen.naam);
        console.log("Datum: " + evenementen.datum.toDateString());
        console.log("Locatie: " + evenementen.locatie);
        console.log("Deelnemers: " + evenementen.deelnemers.join(" , "));
        console.log("Dagen tot evenement: " + dagentotEvenement(event));

    };
   const dagentotEvenement = (event) => {
        return Math.ceil((event.datum -new Date()) / 86400000);
   };


}
window.addEventListener("load", setup);
