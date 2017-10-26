// Exercice 11
var request = new XMLHttpRequest();
request.open ('GET', ' https://raw.githubusercontent.com/becodeorg/Lovelace-promo-2/master/Parcours/JavaScript/11-AJAX/files/data.json ');

request.onload = function() {
  let data = JSON.parse(request.responseText);
  console.log(data);

  let dataScore = data.map(function (obj) {
    nbr = Math.floor(Math.random() * 1000) + 1;
    obj.score = nbr; 
    return obj;
  });

  console.log(dataScore);
  let dataSort = dataScore.sort(function (a, b) {
    return a.score - b.score;
  });

  console.log(dataSort);

  dataScore.forEach(function(obj) {
    if (obj.score < 500) {
      console.log(obj);
    }
    else if (obj.score < 750) {
      console.log(obj);
    }
    else if (obj.score >= 750) {
      console.log(obj);
    }
  });

  dataCountry = data.filter(function (obj) {
    return obj.country == "Bahrain";
  });

  console.log(dataCountry);
  console.log(data.length);
  console.log(dataSort[0]); 
  console.log(dataSort[99]);
}

request.send();
