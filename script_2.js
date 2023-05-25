//Exercice :
// Un prompt s'affiche avec la question suivante
//"De quel nombre veux-tu calculer la factorielle ?"
// Utilisateur rentre un nombre (par ex 4)
// Dans la console le résultat suivant est affiché
//"Le résultat est : 24"


while (true) {
  let number = prompt("De quel nombre veux-tu calculer la factorielle ?");
  // tant que cette condition est respecté (un nombre n'est pas rentré) on pose la question et on indique dans la console que c'est trop vraiment keskonveu !  
  if(isNaN(number)) {
    console.log("Un nombre on a dit !");
  } else {
    let factorial = 1
    for(let count = 1; count <= number; count++) {
      factorial *= count;
    }
    
  console.log(`Le résultat est : ${factorial}`);
  break;
  }
}