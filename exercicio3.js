const readlineSync = require('readline-sync');
const input = readlineSync.question("Digite valores separados por virgula: ");
const lista = input.split(',').map(item => item.trim());
console.log(lista);

function diferecaDeUm(lista){
    let novaLista=[]
    novaLista.push('[]')
    for(let i=0;i<lista.length;i++){
       novaLista.push('['+parseInt(lista[i])+']')
       
      }
      novaLista.push('['+lista+']')
      
return novaLista
};
console.log(diferecaDeUm(lista));