const setup = () => {

    // Create an object
    let student = {}; // een leeg object
    student.firstName = "John";
    student.lastName = "Doe";
    student.age = new Date(2000, 1, 1);
    student.eyeColor = "blue";

    console.log(student.firstName);


//korter, grmakkelijker dan vier variabelen te moeten doorgeven
    let student1 = { // een leeg object
    firstName: "John",
    lastName: "Doe",
    age: new Date(2000, 1, 1);
    eyeColor: "blue"
};
    console.log(student1.firstName);
    console.Llog(student1.lastName)



// uitbreiding
    let student2 = {

        firstName: "John",

        lastName: "Doe",

        address : {

            zipCode : 8500,

            city : "Kortrijk"

        }
    };
    console.log(student2.address.zipCode);

    let tekst = JSON.stringify(student);
    console.log(tekst);
    //eerst wegschrijven voor je het in een cookie kan plaatsen

    let students = [
        {
            firstName: "John",
            lastName: "Doe",
            address: {
                zipCode: 8500,
                city: "Kortrijk"
            }
        },
        {
            firstName: "VIVES",
            lastName: "Doe",
            address: {
                zipCode: 8500,
                city: "Kortrijk"
            }
        }
    ]
    //omzetteb script object naar Json object
    tekst = JSON.stringify(students);
    console.log(tekst);

    //omzetten JSON objecten naar string objecten
    tekstJS = JSON.parse(tekst);
    console.log("JSONPArse " + tekstJS[0].firstName)

    tekst = JSON.stringify(student[1]);
    console.log(tekst);
}
window.addEventListener("load", setup);
