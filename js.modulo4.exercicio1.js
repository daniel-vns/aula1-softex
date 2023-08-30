function banco(conta, saldo, tipoConta, agencia) {
  this.conta = conta;
  this.saldo = saldo;
  this.tipoConta = tipoConta;
  this.agencia = agencia;
}

minhaConta = new banco("1234-x", 1000, "corrente", "recife");

minhaConta.buscarsaldo = function(){
  console.log(this.saldo);
}
  
minhaConta.deposito = function(x){
   console.log(x + this.saldo);
}

minhaConta.saque = function(y){
  console.log(this.saldo - y );
}
  
minhaConta.numeroConta = function(){
  console.log(this.conta);
}

minhaConta.buscarsaldo();
minhaConta.deposito(100);
minhaConta.saque(500);
minhaConta.numeroConta();
