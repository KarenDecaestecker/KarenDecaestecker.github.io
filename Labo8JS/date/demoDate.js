const setup = () => {
    let start = new Date('2025-04-01T12:10:30');
    console.log(start)

    //dag van de week (elke dag van de week krijgt een nummer, zo kan je bepalen wanneer een dag een weekend is en wanneer niet
    console.log((start.getDay()));

    //maand (januari is 0 dus daarom de +1)
    console.log((start.getMonth() + 1));

    //jaar
    console.log((start.getFullYear()));

// zelf de weergave van je tijd veranderen als je wil dat het veranderd
    console.log(start.getDate() + "-"
        + (start.getMonth() + 1) + "-"
        + start.getFullYear() + " " + start.getHours()
        + ":" + start.getMinutes() + ":" + start.getSeconds());
   let datum = new Date(2025, 0, 1);
   console.log(datum);

   let event = new Date();

   console.log("toString" + event.toString());

   //geen rekening let de tijdzones
    console.log("toISOString" + event.toISOString());


    console.log("toDateString" + event.toDateString());
    console.log("TotimeString" + event.toTimeString());

    let eventbirth = new Date();
    let birth  = new Date(2006, 6, 3);
    let dayslived = ((eventbirth - birth) / 86400000)/365;

    console.log(dayslived);
}
window.addEventListener("load", setup);
