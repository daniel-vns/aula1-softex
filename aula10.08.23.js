// function exibirSaudacao(nome, saudacao="Hello"){
//     console.log(`${saudacao}, ${nome}`);
// }
// exibirSaudacao("Carlos", "olá");
// exibirSaudacao("carlos");

// function saudacao(nome, saudacao = "Olá"){
//     console.log(`${saudacao}, ${nome}`)
// }
// saudacao("daniel");

// function calculadora(num1, num2, op="+"){
//     switch(op){
//         case "+":
//             console.log(num1+num2);
//             break;
//         case "-":
//             console.log(num1-num2);
//             break;
//         case "*":
//             console.log(num1*num2);
//             break;
//         case "/":
//             console.log(num1/num2);
//             break;
//         default:
//             console.log("digite a operação corretamente");
//             break;
//     }
// }
// calculadora(3,5);
// calculadora(3,5,"-");
// calculadora(3,5,"*");
// calculadora(3,5,"/");

// function contagemRegressiva(inicio=10){
//     for(let i= inicio; i>=1; i--){
//         console.log(i);
//     }
// }
// contagemRegressiva(4);

// function apresentacao(nome="douglas", idade=30, profissao="pedreiro"){
//     console.log(`Olá, eu sou ${nome}, tenho ${idade} anos e sou ${profissao}`);
// }
// apresentacao();
// apresentacao("daniel", 20, "engenheiro");

// function mensagemPersonalizada(texto, estilo="normal"){
//     switch(estilo){
//         case"normal":
//             console.log(texto);
//             break;
//         case"negrito":
//             console.log(texto.bold());
//             break;
//         case"italico":
//             console.log(texto.italics());
//             break;
//         default:
//             console.log("digite o estilo correto");
//             break;
//     }
// }
// mensagemPersonalizada("tudo bem", "negrito");

// function criarMensagemDeSaudacao(nome){
//     const mensagem = `Hello, ${nome}`;
//     return mensagem;
// }
// let mensagemDeSaudacao = criarMensagemDeSaudacao("daniel");
// console.log(criarMensagemDeSaudacao("daniel"));

// function somar(a,b){
//     return a+b;
// }
// console.log(somar(3,5));

// function ehPar(numero){
//     if(numero%2==0){
//         return true;
//     }else{
//         return false;
//     }
// }
// console.log(ehPar(3));

// function maiorNumero(a,b,c){
//     if(a>b && a>c){
//         return a;
//     }else if(b>a && b>c){
//         return b;
//     }else if (c>a && c>b){
//         return c;
//     }else{
//         return;
//     }
// }
// console.log(maiorNumero(6,3,4));

// function calcularIMC(peso, altura){
//     const imc = peso / (altura*altura);
//     return imc;
// }

// function statusIMC(peso, altura){
//     let imc = calcularIMC(peso, altura);
//     if (imc<18.5){
//         return "magro";
//     }else if((imc>=18.5) && (imc<25)){
//         return "normal";
//     }else if((imc>=25) && (imc<30)){
//         return "sobrepeso";
//     }else{
//         return "obeso";
//     }
// }
// console.log(calcularIMC(50, 1.80));
// console.log(statusIMC(50, 1.80));

function contarVogal(texto){
    const vogais = "aeiouAEIOU";
    let i = 0;
    for(letra of texto){
        if(vogais.includes(letra)){
            i++;
        }  
    }
    return i;
}
console.log(contarVogal("paralelepipedo"));
