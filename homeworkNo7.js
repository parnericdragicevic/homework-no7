 /* Zadatak 1. */
 
var article = process.argv[2];

console.log(article);

/* used if */
if (article === "ZORA" || article === "JUTRO" || article ==="PRIJEPODNE")  {
    console.log("Dobro jutro");
}
else if (article === "POPODNE" || article === "PREDVECER")  {
    console.log("Dobar dan");
}
else if (article === "NOC")  {
    console.log("Dobra večer");
}
else {
    console.log("Koje je to doba dana?");
}

/* used switch */
switch (article) { 
    case "ZORA":
    case "JUTRO": 
    case "PRIJEPODNE":
    console.log("Dobro jutro");
    break;
    case "POPODNE": 
    case "PREDVECER":
    console.log("Dobar dan");
    break;
    case "NOC":
    console.log("Dobra večer");
    default: 
    console.log("Koje je to doba dana?");
}
 
/* Zadatak 2 */
var age = +process.argv[2];
var korisnik = age<=18 ? "maloljetan" : "punoljetan"


if (!age) {
  console.log("Pogrešan unos");   
}
else if (korisnik === "maloljetan") {
  console.log("Korisnik je maloljetan");
}
else if (korisnik === "punoljetan") {
  console.log("Korisnik je punoljetan");
}
 /* Zadatak 3 */
var enteredNumber = +process.argv [2]
var randomNumber = Math.ceil(Math.random() * 9);
console.log(randomNumber);
if (isNaN(enteredNumber)) {
    enteredNumber=7
}
console.log(enteredNumber);
if (enteredNumber === randomNumber) {
    console.log("Jackpot");
}
else {
    console.log("Više sreće drugi put");
}