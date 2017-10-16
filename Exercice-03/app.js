// Calculs
function add(a,b) {
  return a + b;
}

function minus(a,b) {
  return a - b;
}

function multi(a,b) {
  return a * b;
}

function purcent(valeur,purcentage) {
  return valeur * (purcentage/100);
}

function speed(dist,time) {
  return dist/time;
}

console.log(add(3,4) + " " + minus(5,3) + " " + multi(2,2) + " " + purcent(100,25) + " " + speed(50,2) + "km/h")
