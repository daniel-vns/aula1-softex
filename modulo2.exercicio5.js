const input = require('readline-sync');

const voto = {
    candidato_x: 889,
    candidato_y: 847,
    candidato_z: 515,
    branco: 0
}

while ( voto == true){
    if(voto == 889){
        candidato_x=1;
        candidato_x++;
        console.log("deseja votar novamente");
    }else if(voto == 847){
        candidato_y=1;
        candidato_y++;
        console.log("deseja votar novamente");
    }else if(voto == 515){
        candidato_z=1;
        candidato_z++;
        console.log("deseja votar novamente");
    }else if(voto == 0){
        candidato_branco=1;
        candidato_branco++;
        console.log("deseja votar novamente");
    }else if(voto == String){
        console.log("escolha um numero correto");
    }else{
        voto = null;
        voto ++;
        console.log("deseja votar novamente");
    }
}
console.log("a quantidade de votos do candidato_x foi: ", candidato_x);   
console.log("a quantidade de votos do candidato_y foi: ", candidato_y); 
console.log("a quantidade de votos do candidato_z foi: ", candidato_z); 
console.log("a quantidade de votos branco foi: ", branco); 
console.log("a quantidade de votos nulos: ", null);     

