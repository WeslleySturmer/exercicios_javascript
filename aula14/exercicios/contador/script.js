document.querySelector('input#btncontar').addEventListener('click', contar)

function contar(){
    let input_inicio = document.querySelector('input#inicio')
    let input_fim = document.querySelector('input#fim')
    let input_passo = document.querySelector('input#passo')
    let inicio = Number(input_inicio.value)
    let fim = Number(input_fim.value)
    let passo = Number(input_passo.value)
    let resultado = document.querySelector('div#resultado')

    if (passo <= 0 || passo > fim){
        window.alert('Valores incoerentes, verifique os dados digitados e tente novamente')
        input_inicio.value = ''
        input_fim.value = ''
        input_passo.value = ''
    } else {
        resultado.innerHTML = 'Contando ...'

        setTimeout(() => {
            resultado.innerHTML = ''

            if (inicio < fim) {
                for(let i = inicio; i <= fim; i += passo){
                    if (i == inicio){
                        resultado.innerHTML += `${i} `
                    } else if (i < fim) {
                        resultado.innerHTML += `&#128073 ${i} `
                    } else {
                        resultado.innerHTML += `&#128073 ${i} &#127937`
                    }
                }
            } else {
                for(let i = inicio; i >= fim; i -= passo){
                    if (i == inicio){
                        resultado.innerHTML += `${i} `
                    } else if (i > fim) {
                        resultado.innerHTML += `&#128073 ${i} `
                    } else {
                        resultado.innerHTML += `&#128073 ${i} &#127937`
                    }
                }
            }


        }, 1200)
    }
}