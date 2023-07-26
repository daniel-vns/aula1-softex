const readlineSync = require('readine-sync');

console.log("1:soma");
console.log("2:subtração");
console.log("3:multipicação");
console.log("4:divis]ao");
console.log("0:sair");

function calculadora(num1, num2, op){
    while(op !=0){
        num1 = readlineSync.question("digite o primeiro número: ");
        num2 = readlineSync.question("digite o segundo número: ");
        op = readlineSync.question("digite o número da operação que deseja realizar: ");
        if(op === 1){
            calculadora = num1+num2;
            return calculadora;
        }else if(op === 2){
            calculadora = num1-num2;
            return calculadora;
        }else if(op === 3){
            calculadora = num1*num2;
            return calculadora;
        }else if(op === 4){
            calculadora = num1/num2;
            return calculadora;
        }else{
            return "essa opção não existe";
    }
}  
}
 