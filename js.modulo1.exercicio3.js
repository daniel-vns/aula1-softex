const readlineSync = require('readline-sync');

let media;

nota1 = readlineSync.questionInt("digite a primeira nota");
nota2 = readlineSync.questionInt("digite a primeira nota");
nota3 = readlineSync.questionInt("digite a primeira nota");

media = (nota1 + nota2 + nota3) / 3;

console.log(`a media é ${media}`);