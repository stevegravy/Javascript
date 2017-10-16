// Minimum et Maximum
var tabOne = [7,5,-12,6,32,18,14,-2];
var tabTwo = [-3,9,21,36,27,54,17,35];

console.log("Le min du premmier tableau " + Math.min(...tabOne) + " et le max du deuxième tableau " + Math.max(...tabTwo));

// Aléatoire 1
var floatBateau = 10.4;
var couleBateau = Math.floor(floatBateau);
var voleBateau = Math.ceil(floatBateau);

console.log(floatBateau + " " + couleBateau + " " + voleBateau);

// Aléatoire 2
var one = (Math.random()*50)+51;
var two = Math.random();
var three = Math.random()*11;

console.log(one + " " + two + " " + three);

// Aléatoire 3
var tab = ["Goro","Johnny Cago","Kano","Liu Kano","Raiden","Reptil","Scorpion","Shang Tsun","Sonya","Sub-Zero"];

console.log(tab[Math.floor(Math.random()*tab.length)]);
