const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

// question 1 ------------------------------
console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?");

// on initialise une variable à 0
let booksNeverRented = 0

// cette variable sera incrémenté à chaque fois que l'attribut rented est égal à 0 (ou inférieur on sait jamais...)
books.forEach(book => {
  if (book.rented <= 0) {
    booksNeverRented++;
  }
})

// si la variable est toujours égale à 0 cela veut dire que tous les livres ont été empruntés au moins une fois
if (booksNeverRented === 0) {
  console.log("Tous les livres ont été empruntés au moins une fois.")
} else {
  console.log("Certains livres n'ont jamais été empruntés.")
}


// question 2 ------------------------------
console.log("");
console.log("Quel est le livre le plus emprunté ?");


// on initialise deux variables
let mostRentedBook = "";
let numberOfRent = 0;

// cette variable prendra à chaque fois le nom du livre si l'attribut rented à une valeur supérieure à la valeur actuelle
books.forEach (book => {
  if (book.rented > numberOfRent) {
    numberOfRent = book.rented;
    mostRentedBook = book.title;
  }
})

console.log(mostRentedBook);

// question 3 ------------------------------
console.log("");
console.log("quel est le livre le moins emprunté ?");

// on initialise deux variables dont la variable lessNumberOfRent qui prend initialement la valeur rented de la première ligne du tableau
let lessRentedBook = "";
let lessNumberOfRent = books[0].rented;

// cette variable prendra à chaque fois le nom du livre si l'attribut rented à une valeur inférieure à la valeur actuelle
books.forEach (book => {
  if (book.rented < lessNumberOfRent) {
    lessNumberOfRent = book.rented;
    lessRentedBook = book.title;
  }
})

console.log(lessRentedBook);

// question 4 ------------------------------
console.log("");
console.log("Trouve le livre avec l'ID 873495 :");

let bookID873495 = books.filter(book => { return book.id === 873495});
console.log("Le livre avec l'ID 873495 est " + bookID873495[0].title + " !");

// question 5 ------------------------------
console.log("");
console.log("Supprime le livre avec l'ID 133712 :");

// filter crée un nouvel array, donc pour que ça fonctionne sur l'actuel on applique arrayName = arrayName.filter...
// dans ce cadre vu que la variable a été défini avec const, ben ça marche pas vu qu'on peut pas la modifier, je crée donc newBooks

newBooks = books.filter(book => book.id !== 133712);
console.log(newBooks);

// question 6 ------------------------------
console.log("");
console.log("Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé) :");

newBooks.sort((a,b) => a.title.localeCompare(b.title));
console.log(newBooks)
