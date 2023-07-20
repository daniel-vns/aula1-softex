let num = 5;
let nome = "";
let valor = "casa";
if(num>0){
    console.log("numero é positivo")
}else if(num<0){
    console.log("numero é negativo")
}else{
    console.log("numero é neutro")
}

if(num%2===0){
    console.log("numero é par")
}else{
    console.log("numero é negativo")
}

if(nome === ""){
    console.log("string vazia")
}else{
    console.log("string não é vazia")
}

if(num>10){
    console.log("verdade")
}else{
    console.log(num * 2)
}

if((typeof valor) == "boolean"){
    console.log("verdade")
}else{
    valor = false;
    console.log(valor)
}
