const { log } = require("console");

const meuArray = [10,20,30,40,50];
segundoElmento = meuArray[1];
console.log(segundoElmento);

const frutas = ["maçã", "banana", "laranja", "uva", "manga"];
console.log(frutas.length);

frutas.push("pera");
console.log(frutas);

frutas.splice(0,1);
console.log(frutas);

const numeros = [10,20,30,40,50];
if (numeros.includes(25) == true){
    console.log("numero encontrado");
}else{
    console.log("numero nao encontrado");
}

const num = [1,2,3,4,5];
const num1 = [1,2,3,4,5];

const num2 = num.concat(num1);
console.log(num2);

const numero = [1,2,3,4,5,6,7,8,9,10];
const numero1 = numero.filter(x => x%2==0);
console.log(numero1);

const number = [3,1,4,1,5,9,2,6,5,3,5];
number.sort();
console.log(number);

const fruta = ["maçã", "banana", "laranja", "uva"];
console.log(fruta.indexOf("laranja"));

function funcao (a){
    return funcao;
}

console.log(Array.isArray(funcao));