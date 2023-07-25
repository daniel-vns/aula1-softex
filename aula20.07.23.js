let num = 5;
let nome = "";
let valor = "casa";
if(num>0){
    console.log("numero é positivo");
}else if(num<0){
    console.log("numero é negativo");
}else{
    console.log("numero é neutro");
}

if(num%2===0){
    console.log("numero' é divisivel por 2");
}else if(num%3===0){
    console.log("numero é divisivel por 3");
}else if(num%5===0){
    console.log("numero é divisivel por 5");
}else if(num%7===0){
    console.log("número é divisível por 7");
}

if(nome === ""){
    console.log("string vazia");
}else{
    console.log("string não é vazia");
}

if(num>10){
    console.log("verdade");
}else{
    console.log(num * 2);
}

if((typeof valor) == "boolean"){
    console.log("valor é booleana");
}else if ((typeof valor) == "string"){
    console.log("valor é uma string");
}else if ((typeof valor) == "number"){
    console.log("valor é numérico");
}else{
    console.log("valor é indefinido");
}

if(num<0 && num%2==0){
    console.log("número é negativo e par");
}else if(num<0 && num%2!==0){
    console.log("número é negativo e ímpar");
}else if(num>0 && num%2===0){
    console.log("número é positivo e par");
}else if(num>0 && num%2!==0){
    console.log("número é positivo e ímpar");
}else{
    console.log("número é 0");
}
