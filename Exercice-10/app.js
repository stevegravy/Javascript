// Exercice 1 : Manipulation de classes
var body = document.getElementsByTagName("body")[0];
body.removeAttribute("class");
body.setAttribute("class", "bg-olive");

var firstParagraph = document.getElementById("first-paragraph");
firstParagraph.removeAttribute("class");
firstParagraph.setAttribute("class", "aqua");

var bgSilver = document.getElementsByClassName("bg-silver");
bgSilver.className = "bg-silver bg-teal";
bgSilver.className = "bg-teal";

document.getElementsByTagName("blockquote")[0].className = "bg-white";    

// Exercice 2 : Selecteurs CSS
document.querySelector("#my-table").className = "bg-purple";

// Exercice 3


// Exercice 4 : Création d'éléments


// Exercice 5 : Création et suppression de plusieurs éléments

