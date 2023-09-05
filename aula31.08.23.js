// exercicio1

// const readlineSync = require('readline-sync');

// const nome = readlineSync.question('Qual é o seu nome ');
// const nota1 = readlineSync.questionInt('Digite a primeira nota: ');
// const nota2 = readlineSync.questionInt('Digite a segunda nota: ');
// const nota3 = readlineSync.questionInt('Digite a terceira nota: ');

// const media = (nota1 + nota2 + nota3)/3;

// console.log(`seu nome é ${nome} e a sua média é ${media}`);

// exercicio2

// const readlineSync = require('readline-sync');

// const ano = readlineSync.questionInt('Digite aum ano: ');

// if ((ano % 400 === 0) || (ano % 4 === 0) && (ano % 100 !== 0)){
//   console.log(`o ano ${ano} é bissexto`);
// } else{
//   console.log(`o ano ${ano} não é bissexto`);
// }

// exercicio3

// const readlineSync = require('readline-sync');

// const valor = readlineSync.questionFloat('Digite o valor do produto: ');
// const destino = readlineSync.question('Digite o destino do produto: ').toUpperCase();

// switch(destino){
//   case "MG":
//     console.log(`o preço final do produto é ${valor + (valor * 0.07)}`);
//     break;
//   case "SP":
//     console.log(`o preço final do produto é ${valor + (valor * 0.12)}`);
//     break;
//   case "RJ":
//     console.log(`o preço final do produto é ${valor + (valor * 0.15)}`);
//     break;
//   case "MS":
//     console.log(`o preço final do produto é ${valor + (valor* 0.08)}`);
//     break;
//   default:
//     console.log("estado não encontrado");
// }

// exercicio4

// let soma = 0;
// let cont = 0;

// for (let i = 0; i <= Infinity; i++) {
//   if (i % 2 === 0) {
//     soma += i;
//     cont++;
//   }
//   if (cont == 50) break;
// }
// console.log(soma);

// let soma = 0;
// let cont = 0;
// let i = 0;

// while (i <= Infinity) {
//   if (i % 2 === 0) {
//     soma += i;
//     cont++;
//   }
//   i++;
//   if (cont >= 50) break;
// }
// console.log(soma);

// let soma = 0;
// let cont = 0;
// let i = 0;

// do{
//   if(i%2 === 0){
//     soma+= i;
//     cont++;
//   }
//   i++;
//   if (cont >= 50) break;
// }while (cont <Infinity);
// console.log(soma);

// exercicio5

// const readlineSync = require('readline-sync');

// const n = readlineSync.questionInt('Digite um número: ');

// for (let i=0; i<=n; i++){
//   if(i%2 !==0){
//     console.log(i);
//   }
// }

// exercicio6

// const readlineSync = require('readline-sync');

// const n = readlineSync.questionInt('quantos dias trabalhados? ');

// let quantidadeBruta = (30 * n);
// let quantidadeLiquida = quantidadeBruta - (quantidadeBruta * 0.08);
// console.log(quantidadeLiquida);

// exercicio7

// const readlineSync = require('readline-sync');

// const horarioInicial = readlineSync.question('digite o horario inicial no formato (hora:minuto:segundo): ');
// const duracao = readlineSync.questionInt('digite a duração do experimento em segundos: ');

// let horario = horarioInicial.split(":");

// let tempoTotal = (horario[0] * 3600 ) + (horario[1] * 60) + horario[0] + duracao;
// let novoHor = Math.floor(tempoTotal / 3600);
// let novoMin = Math.floor((tempoTotal % 3600) / 60).toPrecision();
// let novoSeg = Math.floor(tempoTotal % 3600) % 60;

// console.log(`${novoHor}:${novoMin}:${novoSeg}`)

// exercicio8

// const readlineSync = require('readline-sync');

// dias = readlineSync.questionInt('quantas horas você trabalha por semana? ');
// extra = readlineSync.questionInt('quntas horas extras você fez no ano? ')

// const horasTrabahada = dias * 52;
// const totHorasNormais = horasTrabahada * 10;
// const tothorasExtras = extra * 15;
// const salarioAnual = totHorasNormais + tothorasExtras;

// console.log(`o total recebebido por horas normais foi R$ ${totHorasNormais} reais, o total recebido por horas extra foi R$ ${tothorasExtras} reis e o salário anual foi de R${salarioAnual} reais`);

// exercicio9

// const readlineSync = require('readline-sync');

// numero1 = readlineSync.questionInt('digite um número: ');
// numero2 = readlineSync.questionInt('digite outro número: ');
// numero3 = readlineSync.questionInt('digite o último número: ');

// if(numero1>=numero2 && numero1>=numero3 && numero2>=numero3){
//     console.log(`a ordem crecente é: ${numero3}, ${numero2}, ${numero1}`);
// }else if(numero1>=numero2 && numero1>=numero3 && numero3>=numero2){
//     console.log(`a ordem crecente é: ${numero2}, ${numero3}, ${numero1}`);
// }else if(numero2>=numero1 && numero2>=numero3 && numero1>=numero3){
//     console.log(`a ordem crecente é: ${numero3}, ${numero1}, ${numero2}`);
// }else if(numero2>=numero1 && numero2>=numero3 && numero3>=numero1){
//     console.log(`a ordem crecente é: ${numero1}, ${numero3}, ${numero2}`);
// }else if(numero3>=numero1 && numero3>=numero2 && numero1>=numero2){
//     console.log(`a ordem crecente é: ${numero2}, ${numero1}, ${numero3}`);
// }else if(numero3>=numero1 && numero3>=numero2 && numero2>=numero1){
//     console.log(`a ordem crecente é: ${numero1}, ${numero2}, ${numero3}`);
// }

// exercicio10

// const readlineSync = require('readline-sync');

// numero = readlineSync.questionInt('digite um valor par calcular a temperatura: ');
// temperatura = readlineSync.question('digite qual o tipo de temperatura: ').toUpperCase();
// conversao = readlineSync.question('digite a conversao que deseja realizar: ').toUpperCase();

// if(temperatura == "CELSIUS"){
//     switch(conversao){
//         case "FAHRENHEIT":
//             console.log((numero * 1.8) + 32);
//             break;
//         case "KELVIN":
//             console.log(numero + 273.15);
//             break;
//         default:
//             console.log("digitou errado");
//             break;
//     }
// }

// if(temperatura == "FAHRENHEIT"){
//     switch(conversao){
//         case "CELSIUS":
//             console.log((numero - 32)/1.8);
//             break;
//         case "KELVIN":
//             console.log((numero + 459.67)/1.8);
//             break;
//         default:
//             console.log("digitou errado");
//             break;
//     }
// }


// if(temperatura == "KELVIN"){
//     switch(conversao){
//         case "CELSIUS":
//             console.log(numero - 273.15);
//             break;
//         case "FAHRENHEIT":
//             console.log((numero * 1.8) - 459.67);
//             break;
//         default:
//             console.log("digitou errado");
//             break;
//     }
// }

// exercicio11

// const readlineSync = require('readline-sync');

// mes = readlineSync.question('digite o mes: ').toUpperCase();
// ano = readlineSync.questionInt('digite o ano: ');


// function data(mes, ano){
//     switch(mes){
//         case "JANEIRO":
//             console.log("31");
//             break;
//         case "FEVEREIRO":
//             if(ano%4==0 || ano%400==0 && ano%100!==0){
//                 console.log("29");
//             }else{
//                 console.log("28");
//             }
//             break;
//         case "MARÇO":
//             console.log("31");
//             break;
//         case "ABRIL":
//             console.log("30");
//             break;
//         case "MAIO":
//             console.log("30");
//             break;
//         case "JUNHO":
//             console.log("30");
//             break;
//         case "JULHO":
//             console.log("31");
//             break;
//         case "AGOSTO":
//             console.log("31");
//             break;
//         case "SETEMBRO":
//             console.log("30");
//             break;
//         case "OUTUBRO":
//             console.log("31");
//             break;
//         case "NOVEMBRO":
//             console.log("30");
//             break;
//         case "DEZEMBRO":
//             console.log("31");
//             break;
//     }   
// }
// data(mes, ano);

// exercicio12

// const readlineSync = require('readline-sync');

// inicio = readlineSync.question('qual a hora de inicio (formato hora:minuto): ');
// termino = readlineSync.question('qual a hora do termino (formato hora:minuto):');

// function duracao(inicio, termino) {
//     inicioTempo = inicio.split(":");
//     terminoTempo = termino.split(":");
//     const inicioTotMinuto = (parseInt(inicioTempo[0]) * 60) + parseInt(inicioTempo[1]);
//     const terminoTotMinuto = (parseInt(terminoTempo[0]) * 60) + parseInt(terminoTempo[1]);
//     let duracao = terminoTotMinuto - inicioTotMinuto;
    
//     if(inicioTotMinuto > terminoTotMinuto){
//         return ((24*60)-inicioTotMinuto) + terminoTotMinuto;
//     }
//     return duracao;
// }
// console.log(`Tempo total em minutos: ${duracao(inicio, termino)} minutos.`);

// exercicio13

// const readlineSync = require('readline-sync');

// function fibonacci(n){
//     if(n<=1){
//         return i;
//     }else{
//         return fibonacci (n-1) + fibonacci (n-2);
//     }
// }

// let numero = readline.questionInt("digite um numero para saber a sequencia fibonacci: ");
// console.log(`a sequencia fibonacci de ${numero} é ${fibonacci(numero)}`);