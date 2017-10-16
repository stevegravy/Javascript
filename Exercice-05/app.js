// Addition
let tab = [1,2,3,4,5,6,7,8,9];
let sum = 0;

for (let I = 0; I <tab.length; I++) {
  sum += tab[I];
}
console.log(sum);

// Vos meilleurs choix
let tabNom = ["Stalone","Watanabe","Jésus"];
let order = ["premier","deuxième","troisième"];

for (let I = 0; I <tabNom.length; I++) {
  console.log("Le " + order[I] + " est " + tabNom[I]);
}

// Clone
let tabMario = ["Mario","Luigi","Peach"]
let tabBrowser = tabMario.slice(0);

tabBrowser.push("Browser");
console.log(tabMario + " | " + tabBrowser);
