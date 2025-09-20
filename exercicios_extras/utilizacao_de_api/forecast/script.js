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

    divResposta.classList.remove('hidden')
    divResposta.style.padding = '20px'
    divResposta.innerHTML = '<p>Buscando dados...</p>'

    if (retornoApiCidade[0] == null) {
        divResposta.classList.add('hidden')
        divResposta.style.padding = '0px'
        divResposta.innerHTML = ''

        divNotFound.classList.remove('hidden')
        divNotFound.style.padding = '20px'

        let imagem_not_found = document.createElement('img')
        imagem_not_found.src = "https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png"
        imagem_not_found.alt = "notfound_image"

        let texto_not_found = document.createElement('p')
        texto_not_found.innerHTML = 'Não foi possível encontrar essa cidade :/'

        divNotFound.append(imagem_not_found, texto_not_found)
    } else {
        let retornoApiTempo = await chamaApiTempo(retornoApiCidade[0].lat, retornoApiCidade[0].lon)

        divNotFound.classList.add('hidden')
        divNotFound.innerHTML = ''
        divNotFound.style.padding = '0px'

        divResposta.innerHTML = ''

        const EMOJIS = {
                sun: "&#9728",
                cloudy: "&#127781",
                rain: "&#127783",
                snow: "&#127784",
                default: "&#127785"
        }

        let emoji_resp = document.createElement('p')
        emoji_resp.id = 'emoji_tempo'

        switch (retornoApiTempo.current_weather.weathercode){
            case 0:
            case 1:
            case 2:
                emoji_resp.innerHTML = EMOJIS.sun
                break;
            
            case 3:
            case 45:
            case 48:
                emoji_resp.innerHTML = EMOJIS.cloudy
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
                emoji_resp.innerHTML = EMOJIS.rain
                break;

            case 77:
            case 85:
            case 86: 
            case 71:
            case 73:
            case 75:
                emoji_resp.innerHTML = EMOJIS.snow
                break;

            default:
                emoji_resp.innerHTML = EMOJIS.default
                break;
        }

        let temperatura = document.createElement('p')
        temperatura.innerHTML = `<p>Temperatura: ${retornoApiTempo.current_weather.temperature} ${retornoApiTempo.current_weather_units.temperature}</p>` 
            
        let velocidade_vento = document.createElement('p')
        velocidade_vento.innerHTML = `<p>Velocidade do vento: ${retornoApiTempo.current_weather.windspeed} ${retornoApiTempo.current_weather_units.windspeed}</p>`
        
        divResposta.append(emoji_resp, temperatura, velocidade_vento)

        divResposta.classList.remove('hidden')
        divResposta.style.padding = '20px'
    }
}