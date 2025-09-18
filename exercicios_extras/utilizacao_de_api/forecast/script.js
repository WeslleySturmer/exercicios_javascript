document.querySelector('input#searchBtn').addEventListener('click', buscaCidade)

async function chamaApiCidade(cidade) {
    const URL = `https://nominatim.openstreetmap.org/search?q=${cidade}&format=json&limit=1`

    try{
        let resposta = await fetch(URL)
        let dados = await resposta.json()

        return dados
    } catch(error){
        throw new Error(error)
    }
}

async function chamaApiTempo(lat, lon) {
    const URL = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`

    try{
        let resposta = await fetch(URL)
        let dados = await resposta.json()

        return dados
    } catch(error){
        throw new Error(error)
    }
}


async function buscaCidade() {
    let cidade = document.querySelector('input#searchInput').value
    let divResposta = document.querySelector('div#resposta')
    let divNotFound = document.querySelector('div#notFound')

    let retornoApiCidade = await chamaApiCidade(cidade)

    if (retornoApiCidade[0] == null) {
        divResposta.classList.add('hidden')
        divResposta.style.padding = '0px'
        divResposta.innerHTML = ''

        divNotFound.classList.remove('hidden')
        divNotFound.style.padding = '20px'
        divNotFound.innerHTML = `<img src="" alt="notfound_img"> <p>Não foi possível encontrar essa cidade :/</p>`
    } else {
        let retornoApiTempo = await chamaApiTempo(retornoApiCidade[0].lat, retornoApiCidade[0].lon)

        divNotFound.classList.add('hidden')
        divNotFound.innerHTML = ''
        divNotFound.style.padding = '0px'

        divResposta.innerHTML = ''

        switch (retornoApiTempo.current_weather.weathercode){
            case 0:
            case 1:
            case 2:
                divResposta.innerHTML = `<p id="emoji_tempo">&#9728</p>`
                break;
            
            case 3:
            case 45:
            case 48:
                divResposta.innerHTML = `<p id="emoji_tempo">&#127781</p>`
                break;

            case 51:
            case 53:
            case 55: 
            case 80: 
            case 81: 
            case 82: 
            case 61:
            case 63: 
            case 65: 
            case 56: 
            case 57:
            case 66: 
            case 67:
                divResposta.innerHTML = `<p id="emoji_tempo">&#127783</p>`
                break;

            case 77:
            case 85:
            case 86: 
            case 71:
            case 73:
            case 75:
                divResposta.innerHTML = `<p id="emoji_tempo">&#127784</p>`
                break;

            default:
                divResposta.innerHTML = `<p id="emoji_tempo">&#127785</p>`
                break;
        }
            
        divResposta.innerHTML += `<p>Temperatura: ${retornoApiTempo.current_weather.temperature} ${retornoApiTempo.current_weather_units.temperature}</p>
        <p>Velocidade do vento: ${retornoApiTempo.current_weather.windspeed} ${retornoApiTempo.current_weather_units.windspeed}</p>`

        divResposta.classList.remove('hidden')
        divResposta.style.padding = '20px'
    }
}