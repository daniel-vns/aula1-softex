const array = [3, 7, 9, 1, 0];

function isEmpty(){
    return array.length === 0;
}

function desenfileirar(){
    if(isEmpty()){
        return null;
    }else{
        return array.shift();
    }
}

desenfileirar();
console.log(array);

//FILA: fifo (first in first out) -> sairia na sequência: 3, 7, 9, 1, 0

function remover(elemento){
    const indice = array.indexOf(elemento);
    if(indice !==-1){
        array.splice(indice, 1);
        return true;
    }else{
        return false
    }
}

remover(7);
console.log(array);

//LISTA: remove qualquer elemento em que o programador indicar a sequencia dos indicies

function desempilhar(){
    if(isEmpty()){
        return null;
    }else{
        return array.pop();
    }
}

desempilhar();
console.log(array);

//PILHA: lifo (last in first out) -> sairia na sequência: 0, 1, 9, 7, 3