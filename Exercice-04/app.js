// Pair ou impair
for (let I = 0; I < 20; I++) {
  if (I%2 != 0) {
    console.log(I + " est impair");
  } else {
    console.log(I + " est pair");
  }
}

// Multiplication Tables
for (let I = 0; I <10; I++) {
  console.log(I*9);
}

// Assigner des grades
// Switch or if - if else?
for (let I = 0; I <100; I++) {
  switch (true) {
    case (I > 90):
      console.log(I + ", votre rang est A");
      break;
    case (I > 80):
      console.log(I + ", votre rang est B");
      break;
    case (I > 70):
      console.log(I + ", votre rang est C");
      break;
    case (I > 65):
      console.log(I + ", votre rang est D");
      break;
    default:
      console.log(I + ", votre rang est F");
  }
}

// Pyramide
var Message = "";

for (let I = 0; I <5; I++) {
  Message += "* ";
  console.log(Message);
}
