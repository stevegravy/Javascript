// Langues
var Langues = "fr";
var Message;

if (Langues == "fr") {
  Message = "Bonjour tout le monde";
} else if (Langues == "es") {
  Message = "Hola, mundo";
} else if (Langues == "en") {
  Message = "Hello World";
} else {
  Message = "Erreur!!!";
}

console.log(Message);

// Affichage du score
var Score = 50;
var Result;

if (Score >= 90) {
  Result = "A";
} else if (Score < 90 && Score > 50) {
  Result = "B";
} else if (Score <= 50) {
  Result = "C";
}

console.log(Result);

// Mettre au pluriel
var motSingulier = "mot";
var NbrMot = 5;
var Result;

if (NbrMot != 1) {
  Result = "mots";
} else {
  Result = "mot";
}

console.log(Result);
