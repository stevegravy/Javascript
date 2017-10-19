// Exercice 11
var data = new XMLHttpRequest();
data.onload = function (event) {var dataObj = JSON.parse(this.responseText);};
data.open('get','https://raw.githubusercontent.com/becodeorg/Lovelace-promo-2/master/Parcours/JavaScript/11-AJAX/files/data.json',true);
data.send();

