function calculadora(){
    let num1 = 2;
    let num2 = 4;
    console.log(num1 + num2);
}

(calculadora());

function calculadora1 (a, b){
    return a + b;
}

console.log(calculadora1(3, 5));

const calculadora2 = (operador, [numero1, numero2]= [10, 20]) => "a soma é = a "  + eval(`${numero1} ${operador} ${numero2}`);

console.log(calculadora2('+'));