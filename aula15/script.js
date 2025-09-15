let num  = [3, 5, 6, 1, 4]

console.log(`Array inicial ${num}`)

// Adicionando manualmente um valor no array
num[5] = 12

console.log(`Inseri 12 no final ${num}`)

// Adicionando com a função push um valor no final do array
num.push(7)

console.log(`Inseri 7 no final ${num}`)
console.log(`Tamanho do array ${num.length}`)

// Ordenando os valores com função sort
num.sort()
console.log(`Utilizando função para ordenar os numeros ${num}`)

/*
// Maneira convencional para imprimir
console.log(`Agora número por número:`)
for (let i = 0; i < num.length; i++){
    console.log(num[i])
}

// Maneira mais otimizada
console.log(`Agora número por número parte 2:`)
for (let i in num){
    console.log(num[i])
}
*/

// Buscando valores dentro de um array
let valor_procura = num.indexOf(5)

if (valor_procura == -1){
    console.log('Número não foi encontrado')
} else {
    console.log(`Foi encontrado na posição ${valor_procura}`)
}