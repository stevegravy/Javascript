// Pendu (mode ultra simplifié)
var letter = ["B","O","N","J","O","U","R"];
var guessedLetter = ["","","","","","",""];
var cpt = 0;

function guessLetter(firstTab,secondTab) {
  let testLetter = prompt("Quel lettre voulez-vous tester?");
  let letterFound = "";
  let letterNotFound = 0;

  for (let I = 0; I <firstTab.length; I++) {
    if (firstTab[I] == testLetter) {
      secondTab[I] = firstTab[I];
    } else {
      letterNotFound += 1;
    }
    letterFound += secondTab[I];
  }
  
  console.log(letterFound);

  if (letterNotFound == 7) {
    console.log("Cette lettre n'est pas dans le mot.");
    cpt += 1;
  }

  if (letterFound != "BONJOUR") {
    guessLetter(firstTab,secondTab);
  }

  return ("Félicitation vous avez gagné avec " + cpt + " erreur(s).");
}


console.log("Voici le jeux de pendu de votre vie !!!!");
console.log(guessLetter(letter,guessedLetter));
