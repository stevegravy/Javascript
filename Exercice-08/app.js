// PNG
class PNG {
  constructor (name,age,items_to_give) {
    this.name = name;
    this.age = age;
    this.items_to_give = items_to_give;
  }
}

var firstPNG = new PNG("Mercuro Crome",22,["Bandage","seringue","médicament"]);

for (key in firstPNG) {
  console.log(key + " : " + firstPNG[key]);
}

function giveItem(obj) {
  return console.log(obj.items_to_give[Math.floor(Math.random()*3)]);
}

giveItem(firstPNG);

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

function showItems() {
  for (let I = 0; I < shop.length; I++) {
    console.log(shop[I]);
  }
}

function showDispo() {
  for (let I = 0; I < shop.length; I++) {
    if (shop[I].available == true) {
      console.log(shop[I]);
    } 
  }
}

function showLevelMin() {
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
var mainCharacter = {
  name: "Ewmar Rimis",
  level: 10,
  life: 300,
  weapon: {name:"épée",damage:15},
  attack: function () {
    return mainCharacter.name + " attaque avec l'arme " + mainCharacter.weapon.name + 
	   " les dégats sont de " + (mainCharacter.weapon.damage * mainCharacter.level);
  }
}

console.log(mainCharacter.attack());

