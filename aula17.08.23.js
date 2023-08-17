const readlineSync = require('readline-sync');

let numero = readlineSync.questionInt("digite um numero: ");
let divisor = readlineSync.questionInt("digite um divisor: ");
let resultado;
try {
  if (divisor === 0) {
    throw "Erro: Divisão por zero";
  }
  resultado = numero / divisor;
  console.log(`o resultado da divisão é ${resultado}`);
} catch (e) {
  console.error("Erro: Divisão por zero ");
}

let numero = readlineSync.question("digite uma palavra: ");

try{
  if(isNaN(numero)){
    throw "Erro: Conversão inválida";
  }
  numero = parseInt(numero);
  console.log(numero);
}catch(e){
  console.log("Erro: Conversão inválida");
}

const aluno = {
  nota:10,
  nome:"ronaldo",
  idade: 35
}

try{
  console.log(cliente.sobrenome);
}catch(e){
  console.error("Erro: Propriedade não encontrada");
}