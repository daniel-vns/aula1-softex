let i = 1;
let soma = 0;
let n = 21;
let ehprimo = true;
let senha = "casa";
let lista = [1,2,3,4,5];
let media = 1;
let fat = 5;
let resultado;

//  while (i<=10){
//      console.log(i);
//      i++;
//  }

// while (i<=100){
//     soma = soma + i;
//     console.log(soma);
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

// while (i<n){
//     if(n%i==0){
//         console.log(n, "não é primo");
//         ehprimo = false;
//         break;
//     }
//     i++;
// }
// if (ehprimo){
//     console.log(n, "é primo");
// }

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

while (i<fat){
    fat = fat * i;
    console.log(fat);
}