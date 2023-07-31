const input = require('readline-sync');

let nome, num, num_correto;
num_correto = false;


while (num_correto == false ){
    try{
        nome = input.question("digite seu nome: ")
        num = input.questionInt("digite seu ano de nascimento: ");
        if (isNaN(num)==false){
            if (num >= 1922 && num <=2022){
                num_correto = true;
                console.log("sua idade é: ", 2022 - num);
            }else{
                num_correto = false;
            }
        }
    }catch(error){
        console.log(error);
        console.log("dado inváido, digite novamente ");

    }
} 