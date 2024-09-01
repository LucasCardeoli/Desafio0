const readlineSync = require('readline-sync');
const n = readlineSync.question("Digite um valor n: ");

function Asteriscos(n){
    let lista=[]
    for(let i=1;i<=n;i++){
    const a='*'.repeat(i)
    lista.push(a)
    }
    return lista
  }
console.log(Asteriscos(n))
    


