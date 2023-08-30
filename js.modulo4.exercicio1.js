function banco(conta, saldo, tipoConta, agencia) {
  this.conta = conta;
  this.saldo = saldo;
  this.tipoConta = tipoConta;
  this.agencia = agencia;
}

minhaConta = new banco("1234-x", 1000, "corrente", "recife");

minhaConta.buscarsaldo = function(){
  return this.saldo;
}
  
minhaConta.deposito = function(x){
  return x + this.saldo;
}

minhaConta.saque = function(y){
  return this.saldo - y;
}
  
minhaConta.numeroConta = function(){
  return this.conta;
}

console.log(minhaConta.buscarsaldo());
console.log(minhaConta.deposito(100));
console.log(minhaConta.saque(500));
console.log(minhaConta.numeroConta());
