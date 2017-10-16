// PNG
var PNG = {
  name: "Mercuro Crome",
  age: 22,
  items_to_give: ["bandage","seringue","médicament"]
}

for (key in PNG) {
  console.log(key + " : " + PNG[key]);
}

function giveItem () {
  return console.log(PNG.items_to_give[Math.floor(Math.random()*3)]);
}

giveItem();

// Shop
class caract {
  constructor (title,physic,magic,minLevel,available) {
    this.title = title;
    this.physic = physic;
    this.magic = magic;
    this.minLevel = minLevel;
    this.available = available;
  }
}

var shop = [new caract("épée",18,8,8,true),new caract("Hache",22,12,14,false),new caract("sceptre",6,22,12,true)];

function showItems () {
  for (let I = 0; I < shop.length; I++) {
    console.log(shop[I]);
  }
}

function showDispo () {
  for (let I = 0; I < shop.length; I++) {
    if (shop[I].available == true) {
      console.log(shop[I]);
    } 
  }
}

function showLevelMin () {
  for (let I = 0; I < shop.length; I++) {
    if (shop[I].minLevel >= 10) {
      console.log(shop[I]);
    } 
  }
}

showItems();
showDispo();
showLevelMin();

// Personnage


// Adversaire

