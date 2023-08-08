class No{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.next = null;
    }
}

class listaLigada{
    constructor(){
        this.head = null;
    }

    addFirst(nome,idade){
        const newNo = new No(nome, idade);
        newNo.next = this.head;
        this.head = newNo;
    }

    addNo(nome, idade){
        const newNo = new No(nome, idade);
        if(!this.head){
            this.head = new No(nome, idade);
        }else{
            let current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = new No(nome, idade);
        }
    }
}

let listaLig = new listaLigada();


listaLig.addFirst("daniel", 37);
listaLig.addNo("carlos", 20);
listaLig.addNo("maria", 18);
listaLig.addNo("aline", 42);
listaLig.addNo("gabriel", 80);

console.log(listaLig);