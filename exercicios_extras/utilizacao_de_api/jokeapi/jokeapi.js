const URL = 'https://v2.jokeapi.dev/joke/Programming' 

async function chamaApi(){
    // Utilizando await
    const resposta = await fetch(URL)

    if (resposta.ok){
        const data = await resposta.json()

        if (data.type == 'single'){
            console.log(data.joke)
        } else {
            console.log(data.setup)
            setTimeout(() => {
                console.log(data.delivery)
            }, 3000)
        }
    } else {
        throw new Error('Erro na API')
    }

    /*
    // Outra maneira usando o .then 

    fetch(URL)
    .then(response => response.json())
    .then(data => {
        if (data.type == 'single'){
            console.log(data.joke)
        } else {
            console.log(data.setup)
            console.log(data.delivery)
        }
    })
    .catch(error =>{
        console.log(error)
    })
        */
    
}

chamaApi()