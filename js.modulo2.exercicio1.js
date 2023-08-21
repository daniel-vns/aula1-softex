const readlineSync = require('readline-sync');


let numero1 = readlineSync.questionInt("digite um número: ");
let numero2 = readlineSync.questionInt("digite outro número: ");
let operador = readlineSync.question("digite a operação que você deseja realizar: ");


switch(operador){
    case "+":
        console.log(`o resultado é uma soma sendo a resposta = ${numero1 + numero2}`);
        break;
    case "-":
        console.log(`o resultado é uma subtração sendo a resposta = ${numero1 - numero2}`);
        break;
    case "*":
        console.log(`o resultado é uma multiplicação sendo a resposta = ${numero1 * numero2}`);
         break;
    case "/":
        console.log(`o resultado é uma divisão sendo a resposta = ${numero1 / numero2}`);
        break;
    default:
        console.log("operação inexistente");
        break;
}   
