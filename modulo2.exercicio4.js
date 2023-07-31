const input = require('readline-sync');

let nome, ano, ano_correto;
ano_correto = false;

while (ano_correto == false ){
    try{
        nome = input.question("digite seu nome: ")
        ano = input.questionInt("digite seu ano de nascimento: ");
        if (isNaN(ano)==false){
            if (ano >= 1922 && num <=2022){
                ano_correto = true;
                console.log("sua idade é: ", 2022 - ano);
                break;
            }else{
                ano_correto = false;
                throw new Error ("dado invalido");
            }
        }   
    }catch(error){
        console.log(error);
        console.log("dado invalido, digite novamente");
    }
} 