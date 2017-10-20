class PNG {
  constructor (name,age,items_to_give) {
    this.name = name;
    this.age = age;
    this.items_to_give = items_to_give;
  }
}

class weapon {
  constructor (title,physic,magic,damage,minLevel,available) {
    this.title = title;
    this.physic = physic;
    this.magic = magic;
    this.damage = damage;
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
    this.attack = function (opponent) {
      opponent.life -= this.weapon.damage * this.level;
      console.log(this.name + " attack with the weapon " + this.weapon.title + 
  	     ", the damage are " + (this.weapon.damage * this.level));
      opponent.receiveDamage(this.weapon.damage * this.level)
    }
    this.receiveDamage = function (damage) {
      console.log(this.name + " lost " + (damage) + " points of life");
      console.log(this.name + " now has " + this.life + " points of life")
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
var firstPNG = new PNG("Mercuro Crome",22,["bandage","syringe","medicine"]);

listObj(firstPNG);
giveItem(firstPNG);

// Shop
var shop = [new weapon("sword",18,8,12,8,true),new weapon("axe",22,12,15,14,false),new weapon("scepter",6,22,13,12,true)];

showItems(shop);
showDispo(shop);
showLevelMin(shop);

// Personnage
var mainCharacter = new character("Ewmar Rimis",10,1500,shop[0]);

// Adversaire
var opponentCharacter = new character("Nox the time master",8,1800,shop[2]);
mainCharacter.attack(opponentCharacter);

