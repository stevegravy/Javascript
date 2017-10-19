class PNG {
  constructor (name,age,items_to_give) {
    this.name = name;
    this.age = age;
    this.items_to_give = items_to_give;
  }
}

class weapon {
  constructor (title,physic,magic,minLevel,available) {
    this.title = title;
    this.physic = physic;
    this.magic = magic;
    this.minLevel = minLevel;
    this.available = available;
  }
}

class character {
  constructor(name,level,life,weapon) {
    this.name = name;
    this.level = level;
    this.life = life;
    this.weapon = weapon;
    this.attack = function () {
      return this.name + " attaque avec l'arme " + this.weapon.name + 
  	     ", les dégats sont de " + (this.weapon.damage * this.level);
    }
    this.receiveDamage = function (damage) {
      this.life -= damage;
      return "Vous avez perdu " + (damage) + " points de vie.";
    }
  }
}

// List the contents of an object
function listObj(obj) {
  for (key in obj) {
    console.log(key + " : " + obj[key]);
  }
}

// Choose an item randomly in an array
function giveItem(obj) {
  return console.log(obj.items_to_give[Math.floor(Math.random()*3)]);
}

// Show all the items of an object weapon
function showItems(obj) {
  for (let I = 0; I < obj.length; I++) {
    console.log(obj[I]);
  }
}

// Show the available items of an object weapon
function showDispo(obj) {
  for (let I = 0; I < obj.length; I++) {
    if (obj[I].available == true) {
      console.log(obj[I]);
    } 
  }
}

// Show the items of a weapon object that are above the level 10 
function showLevelMin(obj) {
  for (let I = 0; I < obj.length; I++) {
    if (obj[I].minLevel >= 10) {
      console.log(obj[I]);
    } 
  }
}

// PNG
var firstPNG = new PNG("Mercuro Crome",22,["Bandage","seringue","médicament"]);

listObj(firstPNG);
giveItem(firstPNG);

// Shop
var shop = [new weapon("épée",18,8,8,true),new weapon("Hache",22,12,14,false),new weapon("sceptre",6,22,12,true)];

showItems(shop);
showDispo(shop);
showLevelMin(shop);

// Personnage
var mainCharacter = new character("Ewmar Rimis",10,1500,["épée",15]);
console.log(mainCharacter.attack());

// Adversaire
