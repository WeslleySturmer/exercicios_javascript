let input_num = document.querySelector('input#num')
let numeros_adicionados = document.querySelector('div#numeros_adicionados')
let resposta = document.querySelector('div#resposta')

document.querySelector('input#btnadd').addEventListener('click', adicionar)
document.querySelector('input#btnfinalizar').addEventListener('click', analisar)

let numeros = []

function numero_valido(num){
    if (num == '' || num > 100 || num < 1 || Number(num) == 'NaN'){
        return false
    } else {
        return true
    }
}

function verifica_num_array(num, lista){
    if (lista.indexOf(num) != -1) {
        return false
    } else {
        return true
    }
}

function adicionar(){
    let numero = Number(input_num.value)
    resposta.innerHTML = ''
    
    if (!numero_valido(numero)){
        window.alert('Verifique os dados digitados e tente novamente')
        input_num.value = ''
    } else if (!verifica_num_array(numero, numeros)) {
        window.alert('O número digitado já foi adicionado anteriormente, digite outro valor')
        input_num.value = ''
    } else {
        numeros.push(numero)
        input_num.value = ''
        numeros_adicionados.innerHTML += `<p>Adicionado número ${numero}</p>`
    }
    input_num.focus()
}

function analisar(){
    let tamanho = numeros.length
    let maior = (numeros.sort())[numeros.length -1]
    let menor = (numeros.sort())[0]
    let soma = 0
    for(let i in numeros) {
        soma += numeros[i]
    }
    let media = (soma / numeros.length).toFixed(2)

    resposta.innerHTML = `<p>Ao todo, temos ${tamanho} números cadastrados</p>
    <p>O maior valor informado é o ${maior}</p>
    <p>O menor valor informado é o ${menor}</p>
    <p>Somando todos os valores, temos ${soma}</p>
    <p>A média dos valores digitado é ${media}</p>`

}