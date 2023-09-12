class NumeroComplexo {
    constructor(real, img) {
      this.real = real;
      this.img = img;
    }

    somar(x) {
        const novoReal = this.real + x.real;
        const novoImg = this.img + x.real;
        return new NumeroComplexo(novoReal, novoImg);
    }

    subtrair(x) {
        const novoReal = this.real - x.real;
        const novoImg = this.img - x.real;
        return new NumeroComplexo(novoReal, novoImg);
    }

    multiplicar(x) {
        const novoReal = this.real * x.real - this.img * x.img;
        const novoImg = this.real * x.img + this.img * x.real;
        return new NumeroComplexo(novoReal, novoImg);
    }

    imprimir() {
        console.log(`Parte Real: ${this.real}`);
        console.log(`Parte Imaginária: ${this.img}`);
    }
}
// Função para realizar operações com três números complexos
function operacoesComTresComplexos(c1, c2, c3) {
    const soma = c1.somar(c2).somar(c3);
    const subtracao = c1.subtrair(c2).subtrair(c3);
    const multiplicacao = c1.multiplicar(c2).multiplicar(c3);
  
    console.log("Soma:");
    soma.imprimir();
    console.log("Subtração:");
    subtracao.imprimir();
    console.log("Multiplicação:");
    multiplicacao.imprimir();
}
// Exemplo de uso:
const complexo1 = new NumeroComplexo(3, 4);
const complexo2 = new NumeroComplexo(1, 2);
const complexo3 = new NumeroComplexo(2, 3);

console.log("Complexo 1:");
complexo1.imprimir();
console.log("Complexo 2:");
complexo2.imprimir();
console.log("Complexo 3:");
complexo3.imprimir();

console.log("Operações com três números complexos:");
operacoesComTresComplexos(complexo1, complexo2, complexo3);

