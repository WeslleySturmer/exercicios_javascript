document.querySelector('input#buscar').addEventListener('click', mostrarDados)
let resposta = document.querySelector('div#resposta')

async function chamarApi(pais) {
    try{
        let resposta = await fetch(`https://restcountries.com/v3.1/name/${pais}`)

        if(resposta.status == 200){
            let dados = resposta.json()
            return dados
        } 
        return null
    } catch (error) {
        console.log(error)
        throw new Error('Erro na API')
    }
    
}

async function mostrarDados(){
    let pais = document.querySelector('input#pais').value.toLowerCase()

    resposta.innerHTML = ''
    resposta.style.padding = '20px'
    resposta.classList.add('.hidden')

    let dadosApi = await chamarApi(pais)
    if (dadosApi != null){
        let infoPais = dadosApi[0]

        resposta.innerHTML = 
        `<p><strong>${infoPais.name.common}</strong></p>
        <p>Capital: ${infoPais.capital?.[0] ? infoPais.capital[0] : 'Não disponível'}</p>
        <p>População: ${infoPais.population.toLocaleString()}</p>
        <img src="${infoPais.flags.png}" alt="${infoPais.flags.alt || 'bandeira_pais'}">`

        setTimeout(() => {
            resposta.style.padding = '20px'
            resposta.classList.remove('.hidden')
        }, 1000)
    } else {
        resposta.innerHTML = '<p>Não foi possível encontrar esse país</p>'
        resposta.style.padding = '20px'
        resposta.classList.remove('.hidden')
    }

    
    
}