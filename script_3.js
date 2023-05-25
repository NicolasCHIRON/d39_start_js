// Voici ce que devra afficher la console :

// "Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?"
//   // Utilisateur rentre un nombre (par ex 5)
//     #
//    ##
//   ###
//  ####
// #####

while (true) {
  let sizeOfPyramid = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");

// tant que cette condition est respecté (un nombre n'est pas rentré) on pose la question et on indique dans la console que c'est trop vraiment keskonveu !  
  if(isNaN(sizeOfPyramid)) {
    console.log("Merci de taper un nombre !")
  } else {
    for (let step = 1; step <= sizeOfPyramid; step++ ) {
      console.log(" ".repeat(sizeOfPyramid - step) + "#".repeat(step));
    }
    break;
  }
}