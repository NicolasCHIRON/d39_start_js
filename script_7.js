// et voici... l'acné-bot !

ask = prompt("Et voici l'acné-bot, n'hésitez pas à lui parler")

// on déclare une variable pour le test des majuscules
numberOfUpperCase = 0

// test des majuscules
for (character = 0; character <= (ask.length - 1); character++) {
  if (ask[character] === ask[character].toUpperCase()){
  numberOfUpperCase++;
  }
};

// la liste des conditions
if (ask.slice(-1) === "?") {
  console.log("Ouais Ouais ...");
} else if (numberOfUpperCase === ask.length && ask.length > 0) {
  console.log("Pwa, calme-toi...")
} else if (ask.indexOf("Fortnite") !== -1) {
  console.log("on s'fait une partie soum-soum ?");
} else if (ask === "") {
  console.log("t'es en PLS ?");
} else {
  console.log("balek.");
}
