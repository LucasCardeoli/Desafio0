const readlineSync = require('readline-sync');
const input = readlineSync.question("Digite valores separados por virgula: ");
const lista = input.split(',').map(item => item.trim());
console.log(lista);

function diferecaDeUm(lista){
    let novaLista=[]
    
    for(let i=1;i<lista.length;i++){
       
        let valorAtual = parseInt(lista[i]);
        let valorAnterior = parseInt(lista[i - 1]);
        if (Math.abs(valorAtual - valorAnterior) === 1) {
            
            novaLista.push(lista[i - 1], lista[i]);
        }
    }
return novaLista
};
console.log(diferecaDeUm(lista));