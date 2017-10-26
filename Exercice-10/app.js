// Exercice 1 : Manipulation de classes
var body = document.getElementsByTagName("body")[0];
body.removeAttribute("class");
body.setAttribute("class", "bg-olive");

var firstParagraph = document.getElementById("first-paragraph");
firstParagraph.removeAttribute("class");
firstParagraph.setAttribute("class", "aqua");

var bgSilver = document.getElementsByClassName("bg-silver");
bgSilver.className = "bg-silver bg-teal";
bgSilver.className = "bg-teal";

document.getElementsByTagName("blockquote")[0].className = "bg-white";    

// Exercice 2 : Selecteurs CSS
document.querySelector("#my-table").className = "bg-purple";

var p = document.querySelectorAll("p");
for (let I=0; I<p.length; I++) {
  p[I].classList.add("shadow")
}

// Exercice 3
var pre = document.querySelectorAll("pre");
for (I=0; I<pre.length; I++) {
  pre[I].style.color = "black";
  pre[I].style.backgroundColor = "white";
  pre[I].style.borderTop = "3px solid red";
  pre[I].style.borderBottom = "3px solid red";
}

document.querySelector("h3").innerHTML = "<em>Itelic title ! yeah !</em>";
document.querySelector("h2").innerHTML = "<strong>HTML doens't work !</strong>";

// Exercice 4 : Création d'éléments
var ul = document.querySelector("ul");
var li = document.createElement("li");

li.innerHTML ="Mon meilleur ami est <a href='http://www.google.com'>Google</a>";
ul.appendChild(li);

document.querySelector("ul li:nth-of-type(1)").style.color = "black";

// Exercice 5 : Création et suppression de plusieurs éléments
ol = document.querySelector("ol");
while (ol.hasChildNodes()) {
  ol.removeChild(ol.firstChild)
}

var tab = ["Silent Teacher","Code Monkey", "CodeCombat"];
for (let I=0; I<tab.length; I++) {
  let liTab = document.createElement("li");
  liTab.innerHTML = tab[I];
  ol.appendChild(liTab);
}
