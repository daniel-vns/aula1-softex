const input = require('readline-sync');

let x = 0;
let y = 0;
let z = 0;
let branco = 0;
let nulo = 0;



const candidatos = {
    candidato_x: 889,
    candidato_y: 847,
    candidato_z: 515,
    branco: 0
}

votacao = false;

while ( votacao == false){
    try{
        voto = input.question("digite seu voto:");
        
        if(isNaN(voto)){
            throw new Error("Não é permitido textos, digite um número válido!");
        }
        switch (voto) {

            case '889':
                x ++;
                break;

            case '847':
                y ++;
                break;

            case '515':
                z ++;
                break;

            case '0':
                branco ++;
                break;

            default:
                nulo ++;
                break;
        }
        let votar = input.question("Deseja continuar a votacao? (s/n): \n").toLowerCase();
        if (votar == "n"){
            votacao = true;
        }
    }catch(error){
        console.log("erro:", error.message);
    }   
}
console.log("Resultado votação: \n");

    if(x>y && x>z)
    {
        console.log("Vencedor: Candidato X \n");
    }else if(y > x && y>z){
        console.log("Vencedor: Candidato Y \n");
    }else if(z > x && z > y){
        console.log("Vencedor: Candidato Z \n");
    }else{
        console.log("não houve vencedor \n");
    }

console.log("a quantidade de votos do candidato_x foi: ", x);   
console.log("a quantidade de votos do candidato_y foi: ", y); 
console.log("a quantidade de votos do candidato_z foi: ", z); 
console.log("a quantidade de votos branco foi: ", branco); 
console.log("a quantidade de votos nulos: ", nulo);     

