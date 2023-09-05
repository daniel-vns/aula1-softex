const readlineSync = require('readline-sync');

let gerador_matricula = 2;

const aluno1 = {
    matricula: 1,
    nome: "Rodolfo Silva",
    notas: [9, 7, 8],
};

const aluno2 = {
    matricula: 2,
    nome: "Ana Maria",
    notas: [6, 10, 4],
};

const alunos = [aluno1, aluno2];
let loop = true;
let matriculaBusca;

while(loop){
    console.log("=== CADASTRO DE ALUNOS ===");
    console.log("========== MENU ==========");
    console.log("0 - Sair do sistema");
    console.log("1 - Listar todos os alunos");
    console.log("2 - Cadastrar um novo aluno");
    console.log("3 - Buscar um novo aluno");
    console.log("4 - Alterar um aluno");
    console.log("5 - Remover um aluno");
    let opcao = readlineSync.questionInt("Escolha uma opção: ");
    switch(opcao){
        case 0:
            console.log("Saindo do sistema...");
            console.log("Sistema finalizado com sucesso.");
            loop = false;
            break;
        case 1:
            console.log("Listando todos os alunos...");
            console.log("-----------------------------------------------------");
            for(const a of alunos){
                let soma = 0;
                console.log(`Nome do aluno(a): ${a.nome}`);
                console.log(`Matrícula do aluno(a): ${a.matricula}`);
                for(let i = 0; i < a.notas.length; i++){
                    console.log(`Nota ${i+1}: ${a.notas[i]}`);
                    soma += a.notas[i];
                }
                let media = soma / a.notas.length;
                console.log(`Média: ${media}`);
                console.log("------------------------------------------------------");
            }
            break;
        case 2:
            let nomeAluno = readlineSync.question("Digite o nome do aluno: ");
            let notasAluno = [];
            for(let i = 0; i < 3; i++){
                notasAluno[i] = readlineSync.questionFloat(`Digite a nota: ${i+1}:`);
            }
            const aluno = {
                matricula: ++gerador_matricula,
                nome: nomeAluno,
                notas: notasAluno,
            };
            alunos.push(aluno);
            console.log("Aluno cadastrado com sucesso!!!");
            break;
        case 3:
            matriculaBusca = readlineSync.questionInt("Digite a matrícula que deseja buscar: ");
            for(const a of alunos){
                if(a.matricula === matriculaBusca){
                    console.log("---------- Resultado da busca!!! ----------");
                    console.log(`Matrícula: ${a.matricula}`);
                    console.log(`Nome: ${a.nome}`);
                    for(let i = 0; i < a.notas.length; i++){
                        console.log(`Nota ${i+1}: ${a.notas[i]}`);
                    }
                }
            } 
            break;
        case 4:
            matriculaBusca = readlineSync.questionInt("Digite a matrícula do aluno que deseja alterar: ");
            for(const a of alunos){
                if(a.matricula === matriculaBusca){
                    console.log(a.nome);
                    a.nome = readlineSync.question("Digite o nome do aluno: ");
                    for(let i = 0; i < a.notas.length; i++){
                        a.notas[i] = readlineSync.questionFloat(`Digite a nota ${i + 1}: `);
                    }
                }
            }
            console.log("---------- Aluno alterado com sucesso!!! ----------");
            break;
        case 5:
            matriculaBusca = readlineSync.questionInt("Digite a matrícula do aluno que deseja remover: ");
            for(const a of alunos){
                if(a.matricula === matriculaBusca){
                    console.log(a.nome);
                    let certeza = readlineSync.question("Tem certeza que deseja excluir? S/N ").toUpperCase();
                    while(true){
                        if(certeza == "S"){
                            console.log(`Excluindo aluno ${a.nome} do sistema..."`);
                            alunos.splice(a, 1);
                            break;
                    }else if (certeza == "N"){
                        console.log("---------- Voltando ao menu inicial ----------");
                        break;
                    }
                   }
                }
            }
            console.log("");
            break;
        default:
            console.log("opção inválida. Digite novamente.");
            break;
    }
}

