var hoverMe = document.getElementsByClassName('hoverMe');

// Exercice 01
var hover = function (event) {
  for (let I=0;I<hoverMe.length;I++){
    hoverMe[I].style.opacity = "0";
  }
}

for (let I=0;I<hoverMe.length;I++){
  hoverMe[I].addEventListener("mouseover",hover);
}

// Exercice 02
var click = function (event) {
  for (let I=0;I<hoverMe.length;I++){
    hoverMe[I].style.opacity = "1";
  }
}

for (let I=0;I<hoverMe.length;I++){
  hoverMe[I].addEventListener("click",click);
}

// Exercice 03

