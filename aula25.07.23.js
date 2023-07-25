let idade = 18;
let nome = "Maria";

if(idade<16){
    console.log(nome, "não pode dirigir");
}else if(idade>=16 && idade<18){
    console.log(nome, "pode dirigir apenas acompanhado pelos pais");
}else{
    console.log(nome, "pode dirigir");
}