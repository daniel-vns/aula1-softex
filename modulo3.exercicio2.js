let animal = [
    ["gato", "felino", "mia", 3],
    ["cachorro", "mamifero", "floque", 10],
    ["galinha", "ave", "cristal", 5]
];

for (let i = 0; i < animal.length; i++) {
    for (let j = 0; j < animal[i].length; j++) {
      console.log(animal[i][j]);
    }
}