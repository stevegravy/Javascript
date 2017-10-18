// Juste prix
var cpt = 0;

function randomNbr(a,b) {
  return Math.floor(Math.random()*(b-a)+a);
}

function testNbr(a) {
  let inputNbr = parseInt(prompt("Entrer un nombre: "));
  if (inputNbr < a) {
    cpt++;
    console.log("C'est plus");
  } else if (inputNbr > a) {
    console.log("C'est moins");
    cpt++;
  } 

  if (inputNbr != a) {
    testNbr(a);
  }

  return cpt;
}

var nbr = randomNbr(20,80)
console.log(nbr);
console.log("C'est juste tu as trouvé en " + testNbr(nbr) + " coup(s)");
