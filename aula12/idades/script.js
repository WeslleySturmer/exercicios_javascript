document.querySelector('input#verificar').addEventListener('click', verificar)

function verificar(){
    let ano_atual = (new Date()).getFullYear()
    let input_ano = document.querySelector('input#anonasc')
    let ano = Number(document.querySelector('input#anonasc').value)
    let array_sexo = document.getElementsByName('sexo')
    let resultado = document.querySelector('div#foto')
    let sexo = ''
    let idade = ano_atual - ano


    if (ano > ano_atual) {
        window.alert('Ano inválido')
        input_ano.value = null
    }  
    
    if (array_sexo[0].checked) {
        sexo = 'masculino'
    } else {
        sexo = 'feminino'
    }
    
    if (idade < 18) {
        if (sexo == "masculino") {
            resultado.innerHTML = `<p>Você é um menino de ${idade} anos </p> <img src="imagens/menino.jpg" alt="menino">`
        } else
        {
            resultado.innerHTML = `<p>Você é uma menina de ${idade} anos </p> <img src="imagens/menina.jpg" alt="menina">`
        }
    } else if (idade < 60) {
        if (sexo == "masculino") {
            resultado.innerHTML = `<p>Você é um homem de ${idade} anos </p> <img src="imagens/homem.jpg" alt="homem">`
        } else
        {
            resultado.innerHTML = `<p>Você é uma mulher de ${idade} anos </p> <img src="imagens/mulher.jpg" alt="mulher">`
        }
    } else {
        if (sexo == "masculino") {
            resultado.innerHTML = `<p>Você é um senhor de ${idade} anos </p> <img src="imagens/idoso.jpg" alt="idoso">`
        } else
        {
            resultado.innerHTML = `<p>Você é uma senhora de ${idade} anos </p> <img src="imagens/idosa.jpg" alt="idosa">`
        }
    }
    
    
}