// Pendu (mode ultra simplifié)
var letter = ["B","O","N","J","O","U","R"];
var guessedLetter = ["","","","","","",""];

function guessLetter(firstTab,secondTab) {
  var end = true;
  var cpt = 0;
  console.log("Bienvenu dans la partie de pendu de votre vie!!!");

  while (end) {
    var testLetter = prompt("Quel lettre voulez-vous tester?");
    var letterFound = "";
    var letterNotFound = 0;
    	  
    for (let I = 0; I <firstTab.length; I++) {
      if (firstTab[I] == testLetter) {
        secondTab[I] = firstTab[I];
      } else {
        letterNotFound += 1;
      }
      letterFound += secondTab[I];
    }

    if (letterNotFound == 7) {
      console.log("Cette lettre n'est pas dans le mot.");
      cpt += 1;
    }

    if (letterFound == "BONJOUR") {
      end = false;
    }

    console.log(letterFound);
  } 

  return ("Félicitation vous avez gagné avec " + cpt + " erreurs.");
}

console.log(guessLetter(letter,guessedLetter));
