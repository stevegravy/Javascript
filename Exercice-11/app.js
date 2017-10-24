// Exercice 11
let request = new XMLHttpRequest();
request.open ('GET', ' https://raw.githubusercontent.com/becodeorg/Lovelace-promo-2/master/Parcours/JavaScript/11-AJAX/files/data.json ');

request.onload = function() {
  let data = JSON.parse(request.responseText);
  console.log(data);

  let data_with_scores = data.map(function (objet) {
    random_nb = Math.floor(Math.random() * 1000) + 1;
    objet.score = random_nb;
    return objet;
  });

  console.log(data_with_scores);
  let data_sorted = data_with_scores.sort(function (a, b) {
    return a.score - b.score;
  });

  console.log(data_sorted);

  data_with_scores.forEach(function(objet) {
    if (objet.score < 500) {
      console.log(objet);
    }
    else if (objet.score < 750) {
      console.log(objet);
    }
    else if (objet.score >= 750) {
      console.log(objet);
    }
  });

  data_filtered = data.filter(function (objet) {
    return objet.country == "Bahrain";
  });

  console.log(data_filtered);
  console.log(data.length);
  console.log(data_sorted[0]); 
  console.log(data_sorted[99]);
}

request.send();
