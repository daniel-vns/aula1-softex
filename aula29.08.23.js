const pessoa = {
  nome: "joao",
};

const usuario = {
  idade: 18,
};

console.log(usuario.idade);

const produto = { preco: 50 };
produto.preco = 75;
console.log(produto.preco);

const contato = {
  email: "abc",
};
delete contato.email;
console.log(contato);

const cliente = {
  nome: "robson",
};
cliente.endereco = "Rua A, 123";
console.log(cliente);

const empresa = {
  departamentos: ["um", "dois", "tres"],
};
console.log(empresa.departamentos[0]);

const alunos = {
  notas: [85, 90, 78],
};
alunos.notas[1] = 95;
console.log(alunos);

const dados = {
  valores: [10, 20, 30],
};
dados.valores.splice(1, 1);
console.log(dados);

const livro = new Object();
livro.titulo = "livro";
livro.autor = "maria";
console.log(livro);

const agenda = {
  domingo: 1,
  segunda: 2,
  terca: 3,
  quarta: 4,
  quinta: 5,
  sexta: 6,
  sabado: 7,
};
console.log(agenda.domingo);

const inimigos = {
  ladrao: 1,
  assaltante: 2,
  assassino: 3,
  vilao: 4,
};

const passagens = {
  economica: 1,
  executiva: 2,
  primeiraClasse: 3,
};

const tarefas = {
  trabalho: 1,
  estudo: 2,
  lazer: 3,
};

const status = {
  enviado: 1,
  entregue: 2,
};
