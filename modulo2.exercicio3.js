const readlineSync = require('readline-sync');
console.log("escolha uma opcao abaixo para fazer uma conta com 2 numeros");
console.log("1:soma");
console.log("2:subtração");
console.log("3:multipicacao");
console.log("4:divisao");
console.log("0:sair");
let op;
function calculadora(){
    let op;
    while(op !=0){
        num1 = readlineSync.questionInt("digite o primeiro numero: ");
        num2 = readlineSync.questionInt("digite o segundo numero: ");
        op = readlineSync.questionInt("digite o numero da operacao que deseja realizar: ");
        if(op === 1){
            console.log(num1+num2);
            
        }else if(op === 2){
            console.log(num1-num2);
        }else if(op === 3){
            console.log(num1*num2);
        }else if(op === 4){
            console.log(num1/num2);
        }else{
            console.log("essa opção não existe");
    }
}  
}
calculadora();
 