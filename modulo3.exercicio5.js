function buscarNumero(array, elementoBuscado) {
    for(let i = 0; i<array.length; i++){
        if(array[i]==elementoBuscado){
            return i;
        }
    }
    return -1;
}
 const lista = [15, 8, 10, 25, 12, 30, 5, 20, 18, 7];
 const elementoProcurado = 20;

 const indiceEncontrado = buscarNumero(lista, elementoProcurado);

 if(indiceEncontrado !== -1 ){
    console.log(`o elemento ${elementoProcurado} foi encontrado no indice ${indiceEncontrado}`);
 }else{
    console.log(`o elemento ${elementoProcurado} não foi encontrado na lista`);
 }