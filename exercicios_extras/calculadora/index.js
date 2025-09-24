const numberButtons = document.querySelectorAll('.numero')
const operatorButtons = document.querySelectorAll('.operador')
const limpar = document.querySelector('#limpar')
const igual = document.querySelector('#igual')
const screen = document.querySelector('.screen')

let total = 0
let operator = ''

limpar.addEventListener('click', limparTela)
igual.addEventListener('click', calcularTotal)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        mostrarNumeroTela(button)
    })
    
})

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        operator = button.value
        calcular()
    })
})

//operatorButtons.forEach(button => calcular())

function mostrarNumeroTela(button){
    screen.innerHTML += button.value
}

function calcular(){
    let num = Number(screen.innerText)

    if (total == 0){
        total = num
    } else {
        switch (operator){
            case '+':
                total += num
                break

            case '-':
                total -= num
                break

            case '/':
                total /= num
                break

            case '*':
                total *= num
                break

        }
    }

    screen.innerHTML = ''  
}

function limparTela(){
    screen.innerHTML = ''
    total = 0
}

function calcularTotal(){
    let num = Number(screen.innerText)

    calcular()

    screen.innerHTML = total
}