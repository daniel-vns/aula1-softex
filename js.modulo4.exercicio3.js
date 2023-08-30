const pessoa = [
  {nome: "Daniel", idade: 37, profissao: "desenvolvedor", cidade: "salvador"},
  {nome: "Rodofo", idade: 20, profissao: "médico", cidade: "Recife"},
  {nome: "Ana", idade: 32, profissao: "advogada", cidade: "são-paulo"},
  {nome: "Beatriz", idade: 18, profissao: "psicóloga", cidade: "Minas Gerais"},
];

for (let i in pessoa){
  console.log(pessoa[i]);
  console.log(pessoa[i].nome);
  console.log(pessoa[i].idade);
  console.log(pessoa[i].profissao);
  console.log(pessoa[i].cidade);
}
  
for (let i of pessoa){
  console.log(i);
  console.log(i.nome);
  console.log(i.idade);
  console.log(i.profissao);
  console.log(i.cidade);
}