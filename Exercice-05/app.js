// Addition
var tab = [1,2,3,4,5,6,7,8,9];
var sum = 0;

for (let I = 0; I <tab.length; I++) {
  sum += tab[I];
}
console.log(sum);

// Vos meilleurs choix
var tabNom = ["Stalone","Watanabe","Jésus"];
var order = ["premier","deuxième","troisième"];

for (let I = 0; I <tabNom.length; I++) {
  console.log("Le " + order[I] + " est " + tabNom[I]);
}

// Clone
var tabMario = ["Mario","Luigi","Peach"]
var tabBrowser = tabMario.slice(0);

tabBrowser.push("Browser");
console.log(tabMario + " | " + tabBrowser);
