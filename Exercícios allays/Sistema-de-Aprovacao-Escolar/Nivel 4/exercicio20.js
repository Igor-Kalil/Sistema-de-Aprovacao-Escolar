let numeros = [4 , 10 , 19 , 54 , 67 , 243 , 558 , 64];
let pares = 0
for (let i = 0; i < numeros.length; i++){
    if (numeros[i] % 2 === 0){
        pares++
    }
}
console.log('Quantidade de números pares: ' + pares)