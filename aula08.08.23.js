
// function exibirSaudacao(nome, idade, dia, mes, ano){
//     console.log(`boa tarde ${nome}, percebi que você tem ${idade} anos, pois você nasceu em ${dia} de ${mes} ${ano}.`);
// }
// exibirSaudacao("Daniel", 37, "08", "junho", 1986);

// function saudacao(){
//     console.log("Olá, mundo!");
// }
// saudacao();

// function dobro(num){
//     console.log(num*2); 
// }
// dobro(2);

// function mostrarNumeros(inicio, fim){
//     for(let i = inicio; i<=fim; i++){
//         console.log(i);
//     }
// }
// mostrarNumeros(3,30);

// function verificarPar(num){
//     if(num%2===0){
//         console.log(`${num} é par`)
//     }else console.log(`${num} é ímpar`)
// }
// verificarPar(8);

// function imprimirLista(fruta){
//     let i=0;
//     while(i<fruta.length){
//         console.log(fruta[i]);
//         i++;
//     }
// }
// imprimirLista(["uva", "pera", "maçã", "banana"]);

// let fruta = ["uva", "pera", "maçã", "banana"];

// function imprimirLista(fruta){
//     let i;
//     for(i=0; i<fruta.length; i++){
//         console.log(fruta[i]);
//     }
// }
// imprimirLista(fruta);

// let numeros = [1,2,3,4,5,6,7,8,9,10];
// function calcularMedia(numeros){
//     let soma = 0;
//     let media;
//     let i;
//     for(i=0;i<numeros.length;i++){
//         soma = soma + numeros[i];
//     }
//     media = soma / numeros.length;
//     console.log(media);
// }
// calcularMedia(numeros);

// let numeros = [1,2,3,4,5,6,7,8,9,10];
// function maiorNumero(numeros){
//     let maior=0;
//     let i;
//     for(i=0;i<numeros.length;i++){
//         if(i > maior){
//             maior = i;
//         }
//     }
//     console.log(maior);
// }
// maiorNumero(numeros);

// let texto = paralelepipedo;
// function contarVogais(texto){
//     let i;
//     for(i=0; i<texto.length;i++){
//         if(i=="a"){
//             console.log()
//         }else if (i=="e"){
//             console.log();
//         }else if (i=="i"){
//             console.log();
//         }else if (i=="o"){
//             console.log();
//         }else if(i =="u"){
//             console.log();
//         }
//     }
// }

function verificarPrimo(num) {
    for (var i = 2; i < num; i++) {
      if(num % i === 0) {
        return false;
      }
    }
    return num > 1;  
  }
  console.log(verificarPrimo(1));







