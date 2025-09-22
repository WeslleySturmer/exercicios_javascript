let searchInput = document.querySelector('#searchInput')
let searchBtn = document.querySelector('#searchBtn')
let notFound = document.querySelector('.notFound')
let response = document.querySelector('.response')

searchBtn.addEventListener('click', showData)

const APIKEY = '74b72b717ceb0aac31fcd919c35b7cba'

async function getInfoByApi(){
    let movie = searchInput.value
    const URL = `https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&query=${movie}`

    let apiReturnID = await fetch(URL)
    let apiDataID = await apiReturnID.json()

    if (apiDataID[0] === null){
        return 'Não foi possível localizar o filme'
    } 
    return apiDataID.results[0]
}

async function showData() {

    setTimeout(() => {
        response.classList.add('hidden')
        response.style.padding = '0px'
        response.innerHTML = ""
    }, 250)

    let data = await getInfoByApi()

    const card = document.createElement('div')
    card.classList.add('card')

    const title = document.createElement('h2')
    title.textContent = data.title

    const release_date = document.createElement('h3')
    release_date.textContent = new Date(data.release_date).toLocaleDateString()

    const overview = document.createElement('p')
    overview.textContent = data.overview 


    const poster = document.createElement('img')
    poster.src = `https://image.tmdb.org/t/p/original${data.poster_path}`

    card.append(title, release_date, overview)

    setTimeout(() => {
        response.append(poster, card) 
        response.classList.remove('hidden')
        response.style.padding = '20px'
    }, 250)
    
}

