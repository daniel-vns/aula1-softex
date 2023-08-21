const readlineSync = require('readline-sync');

let nota1 = 7;
let nota2 = 9;
let nota3 = 8;
let media;
let soma;

soma = nota1 + nota2 + nota3;
media = soma / 3;

media >=7 ? console.log(`aluno aprovado com nota ${media}`) : console.log(`aluno reporvado com nota ${media}`);

let nota_1 = readlineSync.questionInt("digite uma nota: ");
let nota_2 = readlineSync.questionInt("digite outra nota: ");

media = (nota_1 + nota_2) / 2;

let nota_3 = 21 - (nota_1 + nota_2);

console.log(`sua primeira nota é ${nota_1} e sua segunda nota é ${nota_2}, sendo assim sua média é ${media}, portanto a nota mínima para você passar com média 7 é ${nota_3}`);