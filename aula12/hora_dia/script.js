document.body.addEventListener('load', carregar())

function carregar(){
    setInterval(() => {
        let data_atual = new Date()
        let hora_atual = 11 // data_atual.getHours()
        let minuto_atual = data_atual.getMinutes().toString().padStart(2,'0')
        
        let corpo = document.querySelector('body')
        let texto = document.querySelector('div#texto_hora')
        let img = document.querySelector('div#img_hora')
        
        if (hora_atual < 12) {
            texto.innerHTML = `<p>Bom dia!</p> <p>Agora são ${hora_atual}:${minuto_atual} </p>`
            img.innerHTML = `<img src="imagens/manha.jpg" alt="imagem_manha"></img>`
            corpo.style.background = 'blue'
        } else if (hora_atual < 18) {
            texto.innerHTML = `<p>Boa tarde!</p> <p>Agora são ${hora_atual}:${minuto_atual} </p>`
            img.innerHTML = `<img src="imagens/tarde.jpg" alt="imagem_tarde"></img>`
            corpo.style.background = 'orange'
        } else {
            texto.innerHTML = `<p>Boa noite!</p> <p>Agora são ${hora_atual}:${minuto_atual} </p>`
            img.innerHTML = `<img src="imagens/noite.jpg" alt="imagem_noite"></img>`
            corpo.style.background = 'gray'
        }
    }, 1000)
}
