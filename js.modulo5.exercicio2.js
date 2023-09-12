class Carro {
    constructor(modelo, cor) {
      this.modelo = modelo;
      this.cor = cor;
      this.velocidadeAtual = 0;
      this.ligado = false;
    }
  
    acelerar(velocidade) {
      if (this.ligado) {
        this.velocidadeAtual += velocidade;
        console.log(`O carro acelerou para ${this.velocidadeAtual} km/h.`);
      } else {
        console.log('O carro está desligado. Ligue-o antes de acelerar.');
      }
    }
  
    frear() {
      this.velocidadeAtual = 0;
      console.log('O carro parou.');
    }
  
    ligar() {
      this.ligado = true;
      console.log('O carro está ligado.');
    }
  }
  
  const meuCarro = new Carro('Sedan', 'Prata');
  meuCarro.ligar();
  meuCarro.acelerar(60);
  meuCarro.frear();
  
  class Telefone {
    constructor(marca, modelo, numero) {
      this.marca = marca;
      this.modelo = modelo;
      this.numero = numero;
      this.ligado = false;
    }
  
    fazerChamada(destino) {
      if (this.ligado) {
        console.log(`Chamando ${destino}...`);
      } else {
        console.log('O telefone está desligado. Ligue-o antes de fazer uma chamada.');
      }
    }
  
    enviarMensagem(destino, mensagem) {
      if (this.ligado) {
        console.log(`Enviando mensagem para ${destino}: "${mensagem}"`);
      } else {
        console.log('O telefone está desligado. Ligue-o antes de enviar uma mensagem.');
      }
    }
  
    desligar() {
      this.ligado = false;
      console.log('O telefone está desligado.');
    }
  }
  
  const meuTelefone = new Telefone('Apple', 'iPhone 12', '1234567890');
  meuTelefone.ligado = true;
  meuTelefone.fazerChamada('Amigo');
  meuTelefone.enviarMensagem('Família', 'Olá, como vocês estão?');
  
  class ContaBancaria {
    constructor(titular, numeroConta) {
      this.titular = titular;
      this.numeroConta = numeroConta;
      this.saldo = 0;
    }
  
    depositar(valor) {
      this.saldo += valor;
      console.log(`Depósito de R$ ${valor} realizado. Novo saldo: R$ ${this.saldo}`);
    }
  
    sacar(valor) {
      if (valor <= this.saldo) {
        this.saldo -= valor;
        console.log(`Saque de R$ ${valor} realizado. Novo saldo: R$ ${this.saldo}`);
      } else {
        console.log('Saldo insuficiente para o saque.');
      }
    }
  
    consultarSaldo() {
      console.log(`Saldo atual: R$ ${this.saldo}`);
    }
  }
  
  const minhaConta = new ContaBancaria('João', '12345-6');
  minhaConta.depositar(1000);
  minhaConta.sacar(500);
  minhaConta.consultarSaldo();
  
  class Usuario {
    constructor(nomeUsuario, email, idade) {
      this.nomeUsuario = nomeUsuario;
      this.email = email;
      this.idade = idade;
    }
  
    atualizarNomeUsuario(novoNome) {
      this.nomeUsuario = novoNome;
      console.log(`Nome de usuário atualizado para: ${novoNome}`);
    }
  
    enviarMensagem(mensagem) {
      console.log(`Mensagem enviada por ${this.nomeUsuario}: ${mensagem}`);
    }
  
    verificarIdade() {
      console.log(`Idade de ${this.nomeUsuario}: ${this.idade} anos`);
    }
  }
  
  const usuario1 = new Usuario('usuario123', 'usuario@example.com', 25);
  usuario1.atualizarNomeUsuario('novoUsuario456');
  usuario1.enviarMensagem('Olá, como você está?');
  usuario1.verificarIdade();