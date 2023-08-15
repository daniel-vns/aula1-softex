const readline = require('readline-sync');

// function fat(n){
//   if(n===1 || n===0){
//       return 1;
//   }else{
//       return n = n * fat(n-1);
//   }
// }
// let numero = readline.questionInt("digite um numero para saber o seu fatorial: ");
// console.log(`o fatorial de ${numero} é ${fat(numero)}`);

// function somaRecursiva(n){
//   if(n===1){
//     return 1;
//   }else{
//     return n = n + somaRecursiva(n-1);
//   }
// }
// let numero = readline.questionInt("digite um numero para saber a soma: ");
// console.log(`a soma recursiva de ${numero} é ${somaRecursiva(numero)}`);

function fibonacci(n){
    if(n<=1){
      return 1;
    }else{
      return fibonacci(n - 1) + fibonacci(n - 2); 
    }
  }
  let numero = readline.questionInt("digite um numero para saber a sequencia fibonacci: ");
  console.log(`a sequencia fibonacci de ${numero} é ${fibonacci(numero)}`);