function calculadora(num1, num2, op){
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
        return 0;
    }
}
num1 = 10;
num2 = 2;
op = 1;

resultado = calculadora(10, 2, 1);
console.log(resultado);