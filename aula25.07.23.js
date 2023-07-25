let idade = 18;
let nome = "Maria";

if(idade<16){
    console.log(nome, "não pode dirigir");
}else if(idade>=16 && idade<18){
    console.log(nome, "pode dirigir apenas autorizado pelos pais");
}else{
    console.log(nome, "pode dirigir");
}

let op = 2;
let mes = 4;
let estado_civil = 3;
let animal = 4;
let operador = "+";
let num1 = 10;
let num2 = 2;

switch(op){
    case 1:
        console.log("segunda-feira");
        break;
    case 2:
        console.log("terça-feira");
        break;
    case 3:
        console.log("quarta-feira");
        break;
    case 4:
        console.log("quinta-feira");
    case 5:
        console.log("sexta-feira");
        break;
    case 6:
        console.log(sábado);
        break;
    case 7:
        console.log("domingo");
        break;
    default:
        console.log("opção inválida"); 
}

switch(mes){
    case 1:
        console.log("janeiro");
        break;
    case 2:
        console.log("fevereiro");
        break;
    case 3:
        console.log("março");
        break;
    case 4:
        console.log("abril");
        break;
    case 5:
        console.log("maio");
        break;
    case 6:
        console.log("junho");
        break;
    case 7:
        console.log("julho");
        break;
    case 8:
        console.log("agosto");
        break;
    case 9:
        console.log("setembro");
        break;
    case 10:
        console.log("outubro");
        break;
    case 11:
        console.log("novembro");
        break;
    case 12:
        console.log("dezembro");
        break;
    default:
        console.log("opção inválida");
        break;
}

switch(estado_civil){
    case 1:
        console.log("solteiro");
        break;
    case 2:
        console.log("casado");
        break;
    case 3:
        console.log("divorciado");
        break;
    case 4:
        console.log("outro");
        break;
    default:
        console.log("opção inválida");
        break;
}

switch(animal){
    case 1:
        console.log("cachoro");
        break;
    case 2:
        console.log("gato");
        break;
    case 3:
        console.log("pássaro");
        break;
    case 4:
        console.log("outro");
        break;
    default:
        console.log("opção inválida");
        break;
}

switch(operador){
    case "+":
        console.log(num1+num2);
        break;
    case "-":
        console.log(num1-num2);
        break;
    case "*":
        console.log(num1*num2);
        break;
    case "/":
        console.log(num1/num2);
        break;
    default:
        console.log("opção inválida");
        break;
}