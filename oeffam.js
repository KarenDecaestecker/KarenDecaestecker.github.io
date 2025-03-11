const setup = () => {
    let familieleden = [];
    familieleden.push('Papa');
    familieleden.push('Mama');
    familieleden.push('Annelien');
    familieleden.push('Hannelore');
    familieleden.push('Karen');
    console.log(familieleden.length);
    let nieuw = familieleden.slice(1,3,5);
    console.log(nieuw);
    console.log(familieleden.join('-'));

}
window.addEventListener("load", setup);
