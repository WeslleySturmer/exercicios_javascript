document.querySelector('input#btngerar').addEventListener('click', gerarTabuada)

function gerarTabuada(){
    let input_num_tab = document.querySelector('input#num_tabuada')
    let num_tab = Number(input_num_tab.value)
    let resultado = document.querySelector('div#resultado')
    
    if (input_num_tab.value = '') {
        window.alert('Preencha o campo corretamente para ser gerado a tabuada')
    } else {
        resultado.innerHTML = ''
        
        for (let i = 1; i <= 10; i++) {
            resultado.innerHTML += `${num_tab} x ${i} = ${num_tab*i} <br>`
        }
    }
}