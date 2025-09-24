const numberButtons = document.querySelectorAll('.numero')
const operatorButtons = document.querySelectorAll('.operador')
const limpar = document.querySelector('#limpar')
const inverte = document.querySelector('#inverte')
const igual = document.querySelector('#igual')
const screen = document.querySelector('.screen')

let total = null
let num = 0
let operator = ''

limpar.addEventListener('click', resetarValores)
igual.addEventListener('click', calcularTotal)
inverte.addEventListener('click', inverteSinal)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (screen.textContent.length < 14){
            if (!(button.value == '.' && screen.textContent.includes('.'))){
                mostrarNumeroTela(button)
                num = Number(screen.textContent)
            }
        }
    })
})

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (screen.textContent != ''){
            operator = button.value
            num = Number(screen.textContent)
            calcular()
        }
    })
})

function mostrarNumeroTela(button){
    screen.textContent += button.value
}

function calcular(){
    if (total == null){
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

    screen.textContent = ''  
}

function resetarValores(){
    screen.textContent = ''
    total = null
    num = null
}

function calcularTotal(){
    if (total != null && num != null){
        calcular()
        screen.textContent = total
        num = null
        total = null
    }
}

function inverteSinal(){
    screen.textContent = Number(screen.textContent) * -1
}