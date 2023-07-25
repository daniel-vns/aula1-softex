let carta1 = 10;
let carta2 = 12;
let banco_carta1 = 2;
let banco_carta2 = 5;
let banco_carta3 = 6;
let banco_carta4 = 8;
let soma = carta1+carta2;
let soma_banco = banco_carta1+banco_carta2+banco_carta3+banco_carta4;

if(soma>21){
    console.log("você perdeu");
}
console.log("total de pontos é", soma);

if(soma_banco>21 || soma <=21 && soma>soma_banco){
    console.log("você venceu");
}else {
    console.log("o banco ganhou");
}
