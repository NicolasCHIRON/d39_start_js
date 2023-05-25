const arn1 = "CCGUCGUUGCGCUACAGC";
const arn2 = "CCUCGCCGGUACUUCUCG";

testString = arn1;
codonsArray = [];

console.log("Transformation d'un ARN en protéine !")

// on découpe en morceau de 3 qu'on glisse dans un Array

for(count = 0; count <= (testString.length/3 - 1); count++) {
  codonsArray.push(testString[count * 3]+testString[1 + count * 3]+testString[2 + count * 3]);
}

// on fait la transformation

aminoAcidArray = [];

codonsArray.forEach(line => {
  switch(line) {
    case "UCU":
    case "UCC":
    case "UCA":
    case "UCG":
    case "AGU":
    case "AGC":
      aminoAcidArray.push("Sérine");
      break;
    case "CCU":
    case "CCC":
    case "CCA":
    case "CCG":
      aminoAcidArray.push("Proline");
      break;
    case "UUA":
    case "UUG":
      aminoAcidArray.push("Leucine");
      break;
    case "UUU":
    case "UUC":
      aminoAcidArray.push("Phénylalanine");
      break;
    case "CGU":
    case "CGC":
    case "CGA":
    case "CGG":
    case "AGA":
    case "AGG":
      aminoAcidArray.push("Arginine");
      break;
    case "UAU":
    case "UAC":
      aminoAcidArray.push("Tyrosine");
      break;
    default:
      console.log("Un des codons ne correspond pas à un acide aminé !");
      break;
  }
})

// on colle le tout !

finalString = aminoAcidArray.join("-")
console.log(finalString);