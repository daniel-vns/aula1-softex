let pessoas = ["joao", "carlos", "pedro", "maria", "aline", "daniel", "beatriz", "carol", "dougas", "valdivia"];
let idades = [31,22,18,40,34,24,20,6,15,60];
let cores = ["azul", "rosa", "vermelho", "roxo", "amarelo", "preto", "branco", "verde", "laranja", "cinza"];

console.log(pessoas);
console.log(idades);
console.log(cores);

idades.splice(9,1,70);
cores.splice(0,1,"violeta");

console.log(pessoas);
console.log(idades);
console.log(cores);