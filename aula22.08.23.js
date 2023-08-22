// const usuarios = [
//     {nome: "Robinson", idade: 18},
//     {nome: "William", idade: 28},
//     {nome: "Janaina", idade: 19},
//     {nome: "Carla", idade: 25},
//     {nome: "Maira", idade: 32},
//     {nome: "George", idade: 30},
//     {nome: "Camila", idade: 27},
// ];

// for (let i = 0; i<usuarios.length; i++){
//     console.log(`${usuarios[i].nome}, ${usuarios[i].idade}`);
// }

// for (let i in usuarios){
//     console.log(usuarios[i].nome);
//     console.log(usuarios[i].idade);
// }

// for (let i of usuarios){
//     console.log(`${i.nome}, ${i.idade}`);
// }

// const numeros = [150,100,200,250,50];
// const palavras = ["cadeira", "lapis", "caneta", "caderno", "mesa"];
// const logicos = [true, false, false, true, true];

// for ( let i in numeros){
//     console.log(numeros[i]);
// }

// for ( let i of numeros){
//     console.log(i);
// }

// for ( let i in palavras){
//     console.log(palavras[i]);
// }

// for ( let i of palavras){
//     console.log(i);
// }

// for ( let i in logicos){
//     console.log(logicos[i]);
// }

// for ( let i of logicos){
//     console.log(i);
// }

// const numeros = [3,7,2,9,5];

// for(let i of numeros){
//     console.log(i);
// }

// const objeto = {a: 10, b: 20, c: 30, d: 40};

// let soma = 0;

// for(let i in objeto){
//     soma += objeto[i];
// }
// console.log(soma);

// const array = [12,5,8,21,16,7];
// const arrayPar = [];

// for(let i of array){
//     if(i%2===0){
//         arrayPar.push(i);
//     }
// }
// console.log(arrayPar);

// const estudantes = {alice: 18, bob: 20, carol: 19, david: 21};

// for(let i in estudantes){
//     if(estudantes[i] === 19){
//         console.log(`Nome do estudante: ${[i]} ${estudantes[i]} anos`)
//     }
// }

const pontos = [[2,5,8], [3,9,12], [4,6,10]];
let soma = 0;

for(l in pontos) {
    for(c in pontos[l]){
        soma += pontos[l][c];
    }
}

console.log(soma);

for(l of pontos){
    for(c of l){
        soma += c;
    }
}
console.log(soma);