let i;
let soma = 0;
let n = 123456;
let ehprimo = true;
let senha = "casa";
let lista = [1,2,3,4,5,6,7,8,9,10];
let media = 1;
let fat = 5;
let resultado = 1;
let digito;

//  while (i<=10){
//      console.log(i);
//      i++;
//  }

//  while (i<=10){
//      soma = soma + i;
//      console.log(soma);
//     i++;
// }

// while (i<=50){
//     if (i%2==0){
//         console.log(i);
//     }
//     i++;
// }

// while (i<=1000){
//     console.log(i);
//     i*=2;
// }

//   while (i<n){
//       if(n%i==0){
//           console.log(n, "não é primo");
//           ehprimo = false;
//           break;
//       }
//       i++;
//   }
//   if (ehprimo){
//       console.log(n, "é primo");
//   }

// senha = readlineSync.question("digite a sua senha: ");
// while (senha !=="casa"){
//   console.log("senha errada");
//   senha = readlineSync.question("digite a sua senha: ");
// }

// while(i<=30){
//     if(i%3==0){
//         console.log(i);
//     }
//     i++;
// }

// while (i<lista.length){
//     soma = soma + lista[i];
//     i++;
// }
// media = soma / lista.length;
// console.log(media);

// while (i<=fat){
//     resultado *=i;
//     i++;
// }
// console.log(resultado);

// while (i<11){
//     console.log(11-i);
//     i++;
// }

// do{
//     console.log(i);
//     i++;
// } while(i<=10);

//  do{
//      console.log(soma);
//      soma = soma + i;
//      i++;
//  } while(i<=11);

// do{
//     if(i%2==0){
//         console.log(i);
//     }
// i++;
// }while (i<=50);
    
// do{
//     console.log(i);
//     i*=2;
// }while(i<=1000);  
    
//  do{
//      if(n%i==0){
//          console.log(n, "não é primo");
//          ehprimo = false;
//          break;
//      }
//      i++;
//      } while(i<n);
//     if(ehprimo){
//         console.log(n, "é primo");
//     }

// do{
//     senha = input.question("digite sua senha:");
// }while(senha!=="casa");

// do{
//     if(i%3==0){
//         console.log(i);
//     }
// i++;
// }while(i<=30);

// do{
//     soma = soma + lista[i];
//     media = soma / lista.length;
//     i++;
// }while(i<lista.length);
// console.log(media);

// do{
//     resultado *=i;
//     i++;
// }while(i<=fat);
// console.log(resultado);

// do{
//     console.log(11-i);
//     i++;
// }while(11-i);

// for(i=1; i<=20;i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }

// for(i=1; i<=10; i++){
//     soma = soma + i;
// }
// console.log(soma);

// console.log("a tabuada de ", n, "é");
// for(i=1; i<=10; i++){
//     console.log(n, "x", i, "=", n*i);
// }

// for(i=10;i>=1;i--){
//     console.log(i);
// }

// for(i=1;i<=100;i++){
//     if(i%3==0 && i%5==0){
//         console.log("fizzbuzz");
//     }else if(i%3==0){
//         console.log("fizz");
//     }else if(i%5==0){
//         console.log("buzz");
//     }else{
//         console.log(i);
//     }  
// }

// for(i=0;i<lista.length;i++){
//     soma = soma + lista[i];
//     media = soma/lista.length;
//     console.log(media);
// }

// for(i=fat;i>1;i--){
//     resultado *= i; 
// }
// console.log(resultado);

// for(i=0; i<=lista.length; i++){
//     console.log(lista[i]);
// }

// for(i=1; i<=100; i++){
//     digito = n%10;
//     soma = soma + digito;
//     n = (n - digito) / 10;
// }
// console.log(soma);

function primeNumber(num) {
    for (let divisor = 2; divisor < num; divisor++) 
    if (num % divisor == 0) return false;
    return true;
}

let determinadoNumero = 50;

for ( i = 2; i < determinadoNumero; i++){
    if (primeNumber(i)){
        console.log(i);  
    } 
} 