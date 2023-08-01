const meuArray = [10,20,30,40,50];
segundoElmento = meuArray[1];
console.log(segundoElmento);

const frutas = ["maçã", "banana", "laranja", "uva", "manga"];
console.log(frutas.length);

frutas.push("pera");
console.log(frutas);

delete frutas.splice(0,1);
console.log(frutas);

const numeros = [10,20,30,40,50];
if (numeros.includes(25) == true){
    console.log("numero encontrado");
}else{
    console.log("numero nao encontrado");
}