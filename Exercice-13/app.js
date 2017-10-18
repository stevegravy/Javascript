// Exerice 1
var colorKey = function (event) {
   var perso = document.getElementById("character");
   switch (event.keyCode) {
    case 97:
      perso.style.backgroundColor = "red";
      break;
    case 98:
      perso.style.backgroundColor = "blue";
      break;
    case 99:
      perso.style.backgroundColor = "green";
      break;
    case 100:
      perso.style.backgroundColor = "purple";
      break;
    case 101:
      perso.style.backgroundColor = "cyan";
      break;
    case 102:
      perso.style.backgroundColor = "black";
      break;
    case 103:
      perso.style.backgroundColor = "pink";
      break;
    case 104:
      perso.style.backgroundColor = "yellow";
      break;
    case 105:
      perso.style.backgroundColor = "darkblue";
  }
}

window.addEventListener('keydown',colorKey);

// Exercice 2
var highlightAddKey = function (event) {
   switch (event.keyCode) {
    case 37:
      document.getElementById("left").classList.add("highlight");
      break;
    case 38:
      document.getElementById("up").classList.add("highlight");
      break;
    case 39:
      document.getElementById("right").classList.add("highlight");
      break;
    case 40:
      document.getElementById("down").classList.add("highlight");
      break; 
    }
}

var highlightRemoveKey = function (event) {
   switch (event.keyCode) {
    case 37:
      document.getElementById("left").classList.remove("highlight");
      break;
    case 38:
      document.getElementById("up").classList.remove("highlight");
      break;
    case 39:
      document.getElementById("right").classList.remove("highlight");
      break;
    case 40:
      document.getElementById("down").classList.remove("highlight");
      break; 
    }
}

window.addEventListener('keydown',highlightAddKey);
window.addEventListener('keyup',highlightRemoveKey);
